import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';

import * as firebase from 'firebase';
import 'firebase/firestore';

import { environment } from '../../environments/environment';

import { FirebaseService } from './firebase_service';

export interface Schedule {
  subtitle: string;
  content: string;
  date: string;
  status: { dps: number; healer: number; tank: number };
}

@Injectable()
export class ScheduleService {
  constructor(private $firebaseService: FirebaseService) {}

  getSchedule(): Promise<firebase.firestore.QuerySnapshot> {
    const db = this.$firebaseService.getFireStore();
    return db.collection('schedule').get();
  }
}
