// import { ApiSiteDocument } from "../sites/document";
import { ApiSiteDocument } from "src/sites/documents/sites.document";
import { TodoDocument } from "src/todo/documents/todo.document";

export const FirestoreDatabaseProvider = 'firestoredb';
export const FirestoreOptionsProvider = 'firestoreOptions'
export const FirestoreCollectionProviders: string[] = [
    TodoDocument.collectionName,
    ApiSiteDocument.collectionName
];

// * examples *
// import { Timestamp } from '@google-cloud/firestore';

// export class TodoDocument {
//   static collectionName = 'todos';

//   name: string;
//   dueDate: Timestamp;
// }