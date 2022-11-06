import { FC } from "react";
import { Moment } from "moment";

import { Calendar } from "antd";

import { IEvent } from "../models/IEvent";
import { formatDate } from "../utils/formatDate";

interface EventsCalendarProps {
    events: IEvent[]
}



const EventCalendar : FC <EventsCalendarProps> = ({events}) => {

    const dateCellRender = (value: Moment) => {
        const formatedData = formatDate(value.toDate())
        const currentDataEvents = events.filter(event => formatedData === event.date)
        return (
          <div>
            {
                currentDataEvents.map((event, index) => 
                    <div key={index}>{event.description}</div>
                )
            }
          </div>
        );
      };

    return (
        <Calendar 
            dateCellRender={dateCellRender}
        />
    );
};

export default EventCalendar;