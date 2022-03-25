import { Inject, Injectable, Logger } from '@nestjs/common';
import { collection, getDocs } from "firebase/firestore";
import { CollectionReference, Timestamp } from '@google-cloud/firestore';


@Injectable()
export class HealthCheckService {
    getHealth(): string {
        return 'health-check!';
    }
}
