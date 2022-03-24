import { Injectable } from "@nestjs/common";


@Injectable()
export class Verifier {
    private readonly expectedAudience: string;
    private readonly oAuth2Client: Object;
    constructor(projectNumber, projectId, backendServiceId){}
}