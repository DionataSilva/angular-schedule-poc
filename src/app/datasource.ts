export let defaultData: Object[] = [
  {
    Id: 1,
    Subject: 'Conference',
    StartTime: new Date(2021, 1, 7, 10, 0),
    EndTime: new Date(2021, 1, 7, 11, 0),
    IsAllDay: false,
    RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=3'
  }, {
    Id: 2,
    Subject: 'Meeting - 1',
    StartTime: new Date(2021, 1, 15, 10, 0),
    EndTime: new Date(2021, 1, 16, 12, 30),
    IsAllDay: false
  }, {
    Id: 3,
    Subject: 'Paris',
    StartTime: new Date(2021, 1, 13, 0, 0),
    EndTime: new Date(2021, 1, 13, 12, 30),
    IsAllDay: false
  }, {
    Id: 4,
    Subject: 'Vacation',
    StartTime: new Date(2021, 1, 12, 10, 0),
    EndTime: new Date(2021, 1, 12, 12, 30),
    IsAllDay: true
  },
  {
    Id: 1,
    Subject: 'RUSSIA vs SAUDI ARABIA',
    Description: 'Group A',
    StartTime: new Date(2021, 1, 25, 15, 0),
    EndTime: new Date(2021, 1, 25, 17, 0),
    StartTimezone: 'Europe/Moscow',
    EndTimezone: 'Europe/Moscow',
    City: 'Moscow',
    CategoryColor: '#1aaa55',
    GroupId: 1
  }
];