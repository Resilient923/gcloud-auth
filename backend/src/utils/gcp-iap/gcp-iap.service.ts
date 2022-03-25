import { Injectable } from "@nestjs/common";
import { OAuth2Client } from "google-auth-library";
import { debug } from "util";

@Injectable()
export class Verifier {
    private readonly expectedAudience;
    private readonly oAuth2Client;
    constructor(projectNumber?: any, projectId?: any, backendServiceId?: any){
        this.expectedAudience = null;
        if (projectNumber && projectId) {
        // Expected Audience for App Engine.
        this.expectedAudience = `/projects/${projectNumber}/apps/${projectId}`;
        } else if (projectNumber && backendServiceId) {
        // Expected Audience for Compute Engine
        this.expectedAudience = `/projects/${projectNumber}/global/backendServices/${backendServiceId}`;
        } else {
        throw new Error("invalid argument");
        }
        this.oAuth2Client = new OAuth2Client();
        debug("initialized successfully");
        this.oAuth2Client.getIapPublicKeys();
    }
    async verify(iapJwt) {
        if (typeof iapJwt !== "string") {
          debug(`auth failed(iapJwt is invalid: '${iapJwt}')`);
          throw new Error("iapJwt must be string");
        }
        try {
          // Verify the id_token, and access the claims.
          debug("start getIapPublicKeys()");
          const response = await this.oAuth2Client.getIapPublicKeys();
          debug("end getIapPublicKeys()");
          const ticket = await this.oAuth2Client.verifySignedJwtWithCertsAsync(
            iapJwt,
            response.pubkeys,
            this.expectedAudience,
            ["https://cloud.google.com/iap"]
          );
          debug("auth success!");
          debug(`ticket: ${ticket}`);
          return ticket;
        } catch (e) {
          debug(e);
          throw e;
        }
      }
}

module.exports = Verifier;
