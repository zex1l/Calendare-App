import {FC} from 'react'
import EventCalendar from '../components/EventCalendar';

const Event : FC = () => {
    return (
        <div className='p-10'>
            <EventCalendar/>
        </div>
    );
};

export default Event;