import { ApiSiteDocument } from "../api-sites/document";

export const FirestoreDatabaseProvider = 'firestoredb';
export const FirestoreOptionsProvider = 'firestoreOptions'
export const FirestoreCollectionProviders: string[] = [
    //TodoDocument.collectionName,
    ApiSiteDocument.collectionName
];

// * examples *
// import { Timestamp } from '@google-cloud/firestore';

// export class TodoDocument {
//   static collectionName = 'todos';

//   name: string;
//   dueDate: Timestamp;
// }