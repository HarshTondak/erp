import React, { useState, SetStateAction, Dispatch } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { registerLicense } from "@syncfusion/ej2-base";

interface Event {
  Id: number;
  Subject: string;
  Location: string;
  StartTime: string;
  EndTime: string;
  CategoryColor: string;
}

registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NAaF1cXmhNYVJ2WmFZfVpgdVRMYFhbRHRPMyBoS35RckVgWH5fcXZTQmBbUkNz"
);

const PropertyPane = (props: { children: React.ReactNode }) => (
  <div className="cell">{props.children}</div>
);

const scheduleData: Event[] = [
  {
    Id: 1,
    Subject: "Solar Eclipse Viewing",
    Location: "Mumbai",
    StartTime: "2024-03-01T05:30:00.000Z",
    EndTime: "2024-03-01T07:00:00.000Z",
    CategoryColor: "#1aaa55",
  },
  {
    Id: 2,
    Subject: "Himalayan Glacier Expedition",
    Location: "Leh",
    StartTime: "2024-03-05T09:00:00.000Z",
    EndTime: "2024-03-05T12:00:00.000Z",
    CategoryColor: "#357cd2",
  },
  {
    Id: 3,
    Subject: "Star Party",
    Location: "Jaipur",
    StartTime: "2024-03-08T19:00:00.000Z",
    EndTime: "2024-03-08T22:00:00.000Z",
    CategoryColor: "#7fa900",
  },
  {
    Id: 4,
    Subject: "Meteor Shower Watch",
    Location: "Jodhpur",
    StartTime: "2024-03-10T23:00:00.000Z",
    EndTime: "2024-03-11T02:00:00.000Z",
    CategoryColor: "#ea7a57",
  },
  {
    Id: 5,
    Subject: "Astronomy Workshop",
    Location: "Bangalore",
    StartTime: "2024-03-12T10:00:00.000Z",
    EndTime: "2024-03-12T17:00:00.000Z",
    CategoryColor: "#00bdae",
  },
  {
    Id: 6,
    Subject: "Night Sky Photography Camp",
    Location: "Manali",
    StartTime: "2024-03-15T20:00:00.000Z",
    EndTime: "2024-03-17T08:00:00.000Z",
    CategoryColor: "#f57f17",
  },
  {
    Id: 7,
    Subject: "Telescope Building Workshop",
    Location: "Kolkata",
    StartTime: "2024-03-18T14:00:00.000Z",
    EndTime: "2024-03-18T18:00:00.000Z",
    CategoryColor: "#1aaa55",
  },
  {
    Id: 8,
    Subject: "Astrophotography Meetup",
    Location: "Delhi",
    StartTime: "2024-03-20T19:00:00.000Z",
    EndTime: "2024-03-20T22:00:00.000Z",
    CategoryColor: "#357cd2",
  },
  {
    Id: 9,
    Subject: "Asteroid Watch Party",
    Location: "Chennai",
    StartTime: "2024-03-22T21:00:00.000Z",
    EndTime: "2024-03-23T00:00:00.000Z",
    CategoryColor: "#7fa900",
  },
  {
    Id: 10,
    Subject: "Space Exploration Seminar",
    Location: "Hyderabad",
    StartTime: "2024-03-25T09:00:00.000Z",
    EndTime: "2024-03-25T17:00:00.000Z",
    CategoryColor: "#ea7a57",
  },
  {
    Id: 11,
    Subject: "Stargazing Night",
    Location: "Pune",
    StartTime: "2024-03-27T20:00:00.000Z",
    EndTime: "2024-03-27T23:00:00.000Z",
    CategoryColor: "#00bdae",
  },
  {
    Id: 12,
    Subject: "Rocket Model Building Workshop",
    Location: "Goa",
    StartTime: "2024-03-29T10:00:00.000Z",
    EndTime: "2024-03-29T16:00:00.000Z",
    CategoryColor: "#f57f17",
  },
  {
    Id: 13,
    Subject: "Cosmic Wonders Exhibition",
    Location: "Jaipur",
    StartTime: "2024-03-01T10:00:00.000Z",
    EndTime: "2024-03-10T18:00:00.000Z",
    CategoryColor: "#1aaa55",
  },
  {
    Id: 14,
    Subject: "Astro Photography Competition",
    Location: "Mumbai",
    StartTime: "2024-03-12T09:00:00.000Z",
    EndTime: "2024-03-12T17:00:00.000Z",
    CategoryColor: "#357cd2",
  },
  {
    Id: 15,
    Subject: "Moon Observation Night",
    Location: "Nagpur",
    StartTime: "2024-03-15T19:00:00.000Z",
    EndTime: "2024-03-15T22:00:00.000Z",
    CategoryColor: "#7fa900",
  },
  {
    Id: 16,
    Subject: "Astronomy Quiz Competition",
    Location: "Indore",
    StartTime: "2024-03-18T14:00:00.000Z",
    EndTime: "2024-03-18T17:00:00.000Z",
    CategoryColor: "#ea7a57",
  },
  {
    Id: 17,
    Subject: "Planet Observation Camp",
    Location: "Ooty",
    StartTime: "2024-03-22T20:00:00.000Z",
    EndTime: "2024-03-24T06:00:00.000Z",
    CategoryColor: "#00bdae",
  },
  {
    Id: 18,
    Subject: "Space Art Exhibition",
    Location: "Kolkata",
    StartTime: "2024-03-25T10:00:00.000Z",
    EndTime: "2024-03-30T18:00:00.000Z",
    CategoryColor: "#f57f17",
  },
  {
    Id: 19,
    Subject: "Astronomy Book Fair",
    Location: "Delhi",
    StartTime: "2024-03-01T09:00:00.000Z",
    EndTime: "2024-03-05T17:00:00.000Z",
    CategoryColor: "#7fa900",
  },
  {
    Id: 20,
    Subject: "Celestial Object Identification Workshop",
    Location: "Bangalore",
    StartTime: "2024-03-10T10:00:00.000Z",
    EndTime: "2024-03-10T16:00:00.000Z",
    CategoryColor: "#ea7a57",
  },
];

const Calendar: React.FC = () => {
  const [scheduleObj, setScheduleObj]: [
    ScheduleComponent | null,
    Dispatch<SetStateAction<ScheduleComponent | null>>
  ] = useState<ScheduleComponent | null>(null);

  const change = (args: { value: Date }) => {
    if (scheduleObj) {
      scheduleObj.selectedDate = args.value;
      scheduleObj.dataBind();
    }
  };

  const onDragStart = (arg: { navigation: { enable: boolean } }) => {
    // eslint-disable-next-line no-param-reassign
    arg.navigation.enable = true;
  };

  return (
    <div className="admin-container">
      <AdminSidebar />
      <div>
        <PropertyPane>
          <table style={{ width: "90%", background: "white" }}>
            <tbody>
              <tr style={{ height: "50px" }}>
                <td style={{ width: "100%" }}>
                  <DatePickerComponent
                    value={new Date()}
                    showClearButton={false}
                    placeholder="Current Date"
                    floatLabelType="Always"
                    change={change}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </PropertyPane>

        <ScheduleComponent
          height="70%"
          width="90%"
          ref={(schedule) => setScheduleObj(schedule)}
          selectedDate={new Date()}
          eventSettings={{ dataSource: scheduleData }}
          dragStart={onDragStart}
        >
          <ViewsDirective>
            {["Day", "Week", "WorkWeek", "Month", "Agenda"].map((item) => (
              <ViewDirective key={item} option={item} />
            ))}
          </ViewsDirective>
          <Inject
            services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
          />
        </ScheduleComponent>
      </div>
    </div>
  );
};

export default Calendar;
