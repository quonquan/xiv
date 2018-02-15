import { Component, OnInit } from '@angular/core';

import { FirebaseService } from '../shared/firebase_service';
import { ScheduleService, Schedule } from '../shared/schedule_service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  schedule: Schedule;

  constructor(
    private $firebaseService: FirebaseService,
    private $scheduleService: ScheduleService
  ) {}

  ngOnInit() {
    this.$scheduleService.getSchedule().then(doc => {
      if (doc.docs.length) {
        this.schedule = <Schedule>doc.docs.pop().data();
      }
    });
  }
}
