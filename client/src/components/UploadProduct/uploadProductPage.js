import React, { useState } from 'react';
import {Form , Button, Container, Col} from 'react-bootstrap';
import FileUpload from '../utils/FileUpload';
import Axios from 'axios';

const Category = [
    {
        key: 1, 
        value: "Mens"
    },
    {
        key: 2, 
        value: "Womens"
    },
    {
        key: 3, 
        value: "Kids"
    },
    {
        key: 4, 
        value: "Topwear"
    },
]

const UploadProductPage = (props) => {


    const [TitleValue, setTitleValue] = useState("");
    const [DescriptionValue, setDescriptionValue] = useState("");
    const [PriceValue, setPriceValue ] = useState(0);
    const [CategoryValue, setCategoryValue] = useState(1)
    const [Images, setImages] = useState([])

    const onTitleChange = (event) => {
        setTitleValue(event.currentTarget.value)
    }
    const onDescriptionChange = (event) => {
        setDescriptionValue(event.currentTarget.value)
    }
    const onPriceChange = (event) => {
        setPriceValue(event.currentTarget.value)
    }
    const onCategorySelect = (event) => {
        setCategoryValue(event.currentTarget.value)
    }
    const updateImages = (newImages) => {
        setImages(newImages)
    }

    const onSubmit = (event) => {
        event.preventDefault();

        const variables = {
            writer: props.user.userData._id,
            title: TitleValue,
            description: DescriptionValue,
            price: PriceValue,
            images: Images,
            categorys: CategoryValue
        }

        Axios.post('/api/product/uploadProduct', variables)
            .then(response => {
                if(response.data.success) {
                    alert('Product Successfully uploaded')
                    props.history.push('/')

                } else {
                    alert('Failed to Upload Product')
                }
            })
    }


    return (
        <div>
            <Container>
                <Col md={{ span: 8, offset: 2 }}>
                                    <h1>UploadProductPage</h1>

                    <Form onSubmit={onSubmit} >

                        <FileUpload refreshFunction={updateImages} />

                        <Form.Group controlId="Title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" onChange={onTitleChange}/>
                        </Form.Group>
                        
                        <Form.Group controlId="Description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows="2" onChange={onDescriptionChange} />
                        </Form.Group>

                        <Form.Group controlId="Price">
                            <Form.Label>Price(Rs)</Form.Label>
                            <Form.Control type="number" placeholder="0" onChange={onPriceChange} />
                        </Form.Group>

                        <Form.Group controlId="Category">
                            <Form.Label>Category</Form.Label>
                            <Form.Control as="select" onChange={onCategorySelect} >
                                {Category.map(item => (
                                    <option key={item.key} value={item.key}>{item.value}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Button variant="primary" type="submit" >
                            Submit
                        </Button>

                    </Form>
                </Col>
            

            </Container>
            

        </div>
    );
};

export default UploadProductPage;