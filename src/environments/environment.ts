// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
import * as firebase from 'firebase';

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyBWPNYAMxac8tYakjGNKMtVWK1MZDLnYFQ',
    authDomain: 'lsxiv-184c4.firebaseapp.com',
    databaseURL: 'https://lsxiv-184c4.firebaseio.com/',
    storageBucket: 'gs://lsxiv-184c4.appspot.com',
    messagingSenderId: '692666999091',
    projectId: 'lsxiv-184c4'
  }
};
