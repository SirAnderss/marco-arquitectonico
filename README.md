# Marco Arquitectonico

### Requisitos del sistema para hacer deploy:

- [Node JS 10.x](https://nodejs.org/es/download/) o superior.
- [Git](https://git-scm.com/)

### Clonamos el repositorio e instlamos las dependencias
```
$ git clone https://github.com/SirAnderss/marco-arquitectonico.git
$ cd marco-arquitectonico
$ npm install
```
### Configuración del proyecto
- Configuracion de variables de entorno
```
cp env.example env
```
- En la consola de [Firebase](https://console.firebase.google.com), creamos un nuevo proyecto.
- Inicializamos una nueva base de datos en Firestore y un nuevo Bucket en Storage
- Creamos una nueva aplicación web
- Desde la configuración del proyecto en firebase copiamos las llaves y los ids necesarios en nuestro archivo .env
- Ejecutamos el revidor de prueba
```
npm run dev
```
- Si todo esta bien deberia poder visualizar la aplicación correctamente en el navegador

### Deploy
- Instalamos las dependencias de firebase
```
npm install -g firebase-tools
```
- En la carpeta del proyecto ejecutamos
```
firebase login
firebase init
** Marcamos la opción de Hosting durante la inicialización
```
- En la carpeta del proyecto editamos el archivo firebase.json y reemplazamos todo el contenido por
```
{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```
- Compilamos el proyecto
```
npm run build
```
- Hacemos deploy
```
firebase deploy
```

## Listo!!!