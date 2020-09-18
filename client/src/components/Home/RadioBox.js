import React, { useState } from 'react';
import { Accordion, Card, Button, FormGroup } from 'react-bootstrap';
import { Form } from 'react-bootstrap';




function RadioBox(props) {



    const [Value, setValue] = useState('0')

    const renderRadioBox = () => props.list && props.list.map((value) => (
        <React.Fragment  key={value.id}>
            <Form.Check
                type="radio"
                label={value.name}
                value={value.id}
                name="PriceRadios"
                defaultChecked={value.id === 0 ? true : false}
            />
        </React.Fragment>
    ))

    const handleChange = ( event ) => {
        setValue(event.target.value)
        props.handleFilters(event.target.value)
    }

    return (
        <div>
            <Accordion defaultActiveKey="1">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Click me!
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <FormGroup onChange={handleChange}>
                                {console.log(renderRadioBox())}
                                {renderRadioBox()}
                            </FormGroup>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    );
}

export default RadioBox;