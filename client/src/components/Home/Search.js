import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

function Search(props) {

    const [SearchTerms, setSearchTerms] = useState("")
    const onChangeSearch = (event) => {
        setSearchTerms(event.currentTarget.value)
        props.refreshFunction(event.currentTarget.value)
    }

    return (
        <div>
            <Form.Control type="text" placeholder="Search" 
                onChange={onChangeSearch}
            />
        </div>
    );
}

export default Search;