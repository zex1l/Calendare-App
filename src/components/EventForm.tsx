import { Button, DatePicker, Form, Input, Row } from 'antd';
import { Moment } from 'moment';

import {FC, useState} from 'react';
import { useTypedSelector } from '../hooks/useTypedReduxr';
import { IEvent } from '../models/IEvent';
import { formatDate } from '../utils/formatDate';


interface EventFormProps {
    submit: (event : IEvent) => void
}

const EventForm : FC <EventFormProps> = ({submit}) => {
    const [event, setEvent] = useState<IEvent>({
        author: '',
        description: '',
        date: '',
        
    } as IEvent)

    const {user} = useTypedSelector(state => state.authReducer)

    const setDate = (date : Moment | null) => {
        if(date) {
            setEvent({...event, date: formatDate(date.toDate())})
        }
    }

    const submitForm = () => {
        submit({...event, author: user.username})
    }


    return (
        <Form onFinish={submitForm}>
            <Form.Item
                label="Описание события"
                name="Description"
                rules={[{ required: true, message: 'Введите описание!' }]}
            >
                <Input
                onChange={e => setEvent({...event, description: e.target.value})}
                    value={event.description}
                />
            </Form.Item>

            <Form.Item
                label="Дата события"
                name="date"
                rules={[{ required: true, message: 'Введите дату события!' }]}
            >
                <DatePicker
                    onChange={(data) => setDate(data)}
                />
            </Form.Item>

            <Row justify='end'>
                <Form.Item>
                    <Button htmlType='submit'>Добавить</Button>
                </Form.Item>
            </Row>
        </Form>
    );
};

export default EventForm;