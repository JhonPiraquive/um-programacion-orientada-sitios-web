import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, from, Observable, switchMap } from 'rxjs';
import { parseString } from 'xml2js';

@Injectable({
  providedIn: 'root'
})
export class ApiCountryService {
  private apiUrl = '/api/CountryInfoService.wso';

  constructor(private http: HttpClient) {}

  getCountries(): Observable<any> {
    const body = `<?xml version="1.0" encoding="utf-8"?>
      <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                     xmlns:xsd="http://www.w3.org/2001/XMLSchema"
                     xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Body>
          <ListOfCountryNamesByName xmlns="http://www.oorsprong.org/websamples.countryinfo" />
        </soap:Body>
      </soap:Envelope>`;

    const headers = new HttpHeaders({
      'Content-Type': 'text/xml',
      'SOAPAction': 'http://www.oorsprong.org/websamples.countryinfo/ListOfCountryNamesByName'
    });

    return this.http.post(this.apiUrl, body, { headers, responseType: 'text' }).pipe(
      switchMap(response => from(this.parseXML(response))) // Convierte la Promise en Observable
    );
  }

  private parseXML(xml: string): Promise<any> {
    return new Promise((resolve, reject) => {
      parseString(xml, { explicitArray: false }, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  }
}
