# Proyecto Base Para Angular

> Importante definir la estructura del proyecto (Lo que vaya a consumir de mi backend debe estar en un service)
> Importante definir la estructura del proyecto (Lo que vaya a pintar en mi frontend debe estar en un componente)

# Pasos a considerar para obtener información de una API
1. Se debe agregar el provideHttpClient al app.config.ts (Esto puede variar segun la versión de angular)
2. Los componentes se deben importar en app.component.ts al igual que en app.component.html
3. Los estilos globales se pueden incluir en src/app/styles.css

# Comandos para generación de archivos

> Como crear un componente: ```ng generate component components/el-nombre-de-mi-componente``` (Debo crear una estructura de carpetas para dar un orden)
> Como crear un servicio: ```ng generate service services/api``` (Debo crear una estructura de carpetas para dar un orden)

# Como ejecutar cada app

> Ingresar a la carpeta de la app y ejecutar ```ng serve```
