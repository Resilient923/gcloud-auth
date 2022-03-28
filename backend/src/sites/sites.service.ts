import {
    Injectable,
    Inject,
    Logger,
  } from '@nestjs/common';
  import { CollectionReference } from '@google-cloud/firestore';
  import { ApiSiteDocument } from './documents/sites.document';
  
  @Injectable()
  export class ApiSiteService {
    private logger: Logger = new Logger(ApiSiteService.name);
  
    constructor(
      @Inject(ApiSiteDocument.collectionName)
      private apiSiteCollection: CollectionReference<ApiSiteDocument>,
    ) {}
  
    async create({name,object}): Promise<ApiSiteDocument> {
      const docRef = this.apiSiteCollection.doc(name);
      await docRef.set({
        name,
        object
      });
      const apiSiteDoc = await docRef.get();
      const apiSite = apiSiteDoc.data();
      return apiSite;
    }
  
    async findAll(): Promise<ApiSiteDocument[]> {
      const snapshot = await this.apiSiteCollection.get();
      const apiSite: ApiSiteDocument[] = [];
      snapshot.forEach(doc => apiSite.push(doc.data()));
      console.log("apiSite",apiSite);
      return apiSite;
    }
  }