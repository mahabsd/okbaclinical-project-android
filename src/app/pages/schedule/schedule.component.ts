import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ScheduleDialogComponent } from './schedule-dialog/schedule-dialog.component';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { Subject } from 'rxjs';
import { blockTransition } from '../../theme/utils/app-animation';
import { SchedulesService } from 'src/app/services/schedule.service';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
  animations: [blockTransition],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[@blockTransition]': ''
  }
})
export class ScheduleComponent implements OnInit {
  view: string = 'month';
  viewDate: Date = new Date();
  activeDayIsOpen: boolean = true;
  actions: CalendarEventAction[] = [{
    label: '<i class="material-icons icon-sm white">edit</i>',
    onClick: ({ event }: { event: CalendarEvent }): void => {
      this.openScheduleDialog(event);
    }
  }, {
    label: '<i class="material-icons icon-sm white">close</i>',
    onClick: ({ event }: { event: CalendarEvent }): void => {
      this.events = this.events.filter(iEvent => iEvent !== event);
      this.snackBar.open('Event deleted successfully!', null, {
        duration: 1500
      });
    }
  }];
  events: CalendarEvent[] = [];
  refresh: Subject<any> = new Subject();


  public settings: Settings;
  schedules: any;
  constructor(public appSettings: AppSettings,
    public dialog: MatDialog,
    public snackBar: MatSnackBar, public scheduleService: SchedulesService) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    this.getAllSchedules();

  }

  dayClicked({ date, events }: { date: Date, events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if ((isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) || this.events.length === 0) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
    console.log(this.events);

  }
  public getAllSchedules(): void {
    var response: CalendarEvent[];
    //for show spinner each time
    this.scheduleService.getAllSchedules().subscribe((schedule: CalendarEvent[]) => {
      schedule.forEach(element => {
        element.color= colors.blue,
        element.actions= this.actions
      })
      this.events=schedule;
        console.log(this.events);
       
      // console.log("nidhal"+this.events);
    });
    // console.log("hello get" +this.schedules);

  }
  public addSchedule(schedule) {
    this.scheduleService.addSchedule(schedule).subscribe(schedule => {
      this.getAllSchedules()
      console.log("hello" + schedule);

    });
  }
  public updateSchedule(schedule) {
    this.scheduleService.updateSchedule(schedule._id, schedule).subscribe(schedule => {
      this.getAllSchedules();
      console.log("hello" + schedule);
    });
  }

  openScheduleDialog(event) {
    let dialogRef = this.dialog.open(ScheduleDialogComponent, {
      data: event
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result) {
        if (!result.isEdit) {

          // console.log("close 1"+ JSON.stringify(actionnaire));
          this.addSchedule(result)
          // result.color = colors.blue;
          // result.actions = this.actions;
          // this.events.push(result);

        } else {

          this.updateSchedule(result);
        }

      }
    });
  }

}