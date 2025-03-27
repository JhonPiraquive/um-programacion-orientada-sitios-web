import { Component } from '@angular/core';
import { ApiCountryService } from '../../services/api-country.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-countries',
  imports: [NgFor],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.css'
})
export class CountriesComponent {
  countries: any[] = [];

  constructor(private countryService: ApiCountryService) { }

  getCountries() {
    this.countryService.getCountries().subscribe(response => {
      try {
        const countryList = response['soap:Envelope']['soap:Body']['m:ListOfCountryNamesByNameResponse']['m:ListOfCountryNamesByNameResult']['m:tCountryCodeAndName'];

        if (!countryList) {
          console.error('La respuesta no contiene la lista de países esperada:', response);
          return;
        }

        this.countries = Array.isArray(countryList) ? countryList.map(country => ({
          code: country['m:sISOCode'],
          name: country['m:sName']
        })) : [{
          code: countryList['m:sISOCode'],
          name: countryList['m:sName']
        }];

        console.log(this.countries);
      } catch (error) {
        console.error('Error procesando la respuesta SOAP:', error, response);
      }
    }, error => {
      console.error('Error en la petición:', error);
    });
  }
}
