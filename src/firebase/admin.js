// import * as firebaseAdmin from "firebase-admin";

// import { firebaseConfig } from "./config";

// const privateKey = firebaseConfig.apiKey;
// const clientEmail = firebaseConfig.clientEmail;
// const projectId = firebaseConfig.projectId;

// if (!privateKey || !clientEmail || !projectId) {
//   console.log(
//     `Failed to load Firebase credentials. Follow the instructions in the README to set your Firebase credentials inside environment variables.`
//   );
// }

// if (!firebaseAdmin.apps.length) {
//   firebaseAdmin.initializeApp({
//     credential: firebaseAdmin.credential.cert({
//       privateKey: privateKey,
//       clientEmail,
//       projectId,
//     }),
//     databaseURL: `https://${projectId}.firebaseio.com`,
//   });
// }

// export { firebaseAdmin };
