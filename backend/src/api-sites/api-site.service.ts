import { Inject, Injectable, Logger } from '@nestjs/common';
import { collection, getDocs } from "firebase/firestore";
import { CollectionReference, Firestore } from '@google-cloud/firestore';
import { ApiSiteDocument } from './document';

@Injectable()
export class ApiSiteService {
    private logger:Logger  = new Logger(ApiSiteService.name);
    constructor(
        @Inject(ApiSiteDocument.collectionName) 
        private apiSiteCollection: CollectionReference<ApiSiteDocument>,
    ){}

    async getApiSites(): Promise<ApiSiteDocument[]> {
        this.logger.log("here!")
        const snapshot = await this.apiSiteCollection.get();
        const todos: ApiSiteDocument[] = [];
        snapshot.forEach(doc => todos.push(doc.data()));
        return todos;
      }
}
