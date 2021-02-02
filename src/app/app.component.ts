import { Component, Provider } from '@angular/core';
import * as schedule from '@syncfusion/ej2-angular-schedule';
import { EventSettingsModel, View } from '@syncfusion/ej2-angular-schedule';
import { defaultData } from "./datasource";

const providers: Provider = [
  schedule.DayService, 
  schedule.WeekService, 
  schedule.WorkWeekService, 
  schedule.MonthService, 
  schedule.AgendaService, 
  schedule.MonthAgendaService, 
  schedule.TimelineViewsService, 
  schedule.TimelineMonthService
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: providers,
})
export class AppComponent {
  public currentView: View = 'Month';
  public data: object[] = defaultData;
  public eventSettings: EventSettingsModel = {
    dataSource: this.data
  }
}
