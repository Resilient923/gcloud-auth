export class ApiSiteDocument {
  static collectionName = 'site-configurations';
  
  name: string;
  object:{
    authApiKey: string;
    loginUi:{
      footer: string;
      showGoogleLogin: boolean;
      title: string;
    };
    projectId: string;
}
}