// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'https://jsonplaceholder.typicode.com',
  firebase: {
    apiKey: "AIzaSyA5lC1KKwg3LehPXqb4OEQbfe7IYPrwAkc",
    authDomain: "angular-poeic.firebaseapp.com",
    databaseURL: "https://angular-poeic.firebaseio.com",
    projectId: "angular-poeic",
    storageBucket: "angular-poeic.appspot.com",
    messagingSenderId: "168521595012"
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
