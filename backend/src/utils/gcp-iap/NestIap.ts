import { Verifier } from './gcp-iap.service';

export async function verifier(opts){
  const verifier = new Verifier(opts);
  return async (res, next) => {
    const iapJwt = res.headers["x-goog-iap-jwt-assertion"];
    try {
      const ticket = await verifier.verify(iapJwt);
      res.iapPayload = ticket.payload;
    } catch (err) {
      res.throw(401);
    }
    await next();
  };
}