import { Layout , Row, Button, Modal} from 'antd';
import {FC, useEffect, useState} from 'react'
import EventCalendar from '../components/EventCalendar';
import EventForm from '../components/EventForm';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedReduxr';
import { IEvent } from '../models/IEvent';

const Event : FC = () => {

    const [visibleState, setVisibleState] = useState(false)

    const {user} = useTypedSelector(state => state.authReducer)
    const {events} = useTypedSelector(state => state.eventReducer)
    const {createEvent, fetchEvents} = useActions()

    useEffect(() => {
        fetchEvents(user.username)
    }, [])

    const addNewEvent = (event : IEvent) => {
        setVisibleState(false)

        createEvent(event)
    }
    
    return (
        
        <Layout>
            <EventCalendar events={events}/>
            <Row style={{"justifyContent": "center"}}>
                <Button onClick={() => setVisibleState(true)}>
                    Добавить событие
                </Button>
            </Row>

            <Modal
                title="Добавить событие"
                visible={visibleState}
                footer={null}
                onCancel={() => setVisibleState(false)}
            >
                <EventForm
                    submit={addNewEvent}
                />
            </Modal>
        </Layout>
    );
};

export default Event;