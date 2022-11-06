import { FC, useState } from "react";
import { Moment } from "moment";

import { Calendar, Modal } from "antd";

import { IEvent } from "../models/IEvent";
import { formatDate } from "../utils/formatDate";

interface EventsCalendarProps {
    events: IEvent[]
}



const EventCalendar : FC <EventsCalendarProps> = ({events}) => {

    const [currentDate, setCurrentDate] = useState('')
    const [visible, setVisible] = useState(false)

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

      const onSelect = (newValue: Moment) => {
        setVisible(true)
        const formatedDate = formatDate(newValue.toDate())
        setCurrentDate(formatedDate)
      };

    return (
        <>
            <Calendar 
                dateCellRender={dateCellRender}
                onSelect={onSelect}
            />

            <Modal
                open={visible}
                onCancel={() => setVisible(false)}
                footer={null}
            >
                {
                    <div>
                        {
                            events.map((event, index) => {
                                if(event.date === currentDate) {
                                    return <div key={index}>{event.description}</div>
                                }
                                else {
                                    return <div key={index}>Нет событий на этот день</div>
                                }
                            })
                        }

                    </div>
                    
                }
            </Modal>
            
        </>
    );
};

export default EventCalendar;