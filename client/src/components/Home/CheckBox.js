import React ,{ useState } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';




function CheckBox(props) {

    const [Checked, setChecked] = useState([])


    const handleToggle = (value) => {

        const currentIndex = Checked.indexOf(value);
        const newChecked = [...Checked];

        if(currentIndex === -1){
            newChecked.push(value)
        }else {
            newChecked.splice(currentIndex, 1)
        }
        setChecked(newChecked)
        props.handleFilters(newChecked)

    }

    const renderCheckboxLists = () => props.list && props.list.map((value, index) => (
        <React.Fragment key={index}>
            <Form.Check 
                onChange={()=>handleToggle(value.key)}
                type="checkbox"
                checked={Checked.indexOf(value.key) === -1 ? false : true}
                label={value.value} 
            />
        </React.Fragment>
    ))


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
                            {renderCheckboxLists() }
                            hello
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    );
}

export default CheckBox;