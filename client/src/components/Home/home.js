import Axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CheckBox from './CheckBox';
import RadioBox from './RadioBox';
import {price, category} from './Datas';
import Search from './Search';
import {Container} from 'react-bootstrap';

function Home() {

    const [Products, setProducts] = useState([])
    const [Skip, setSkip] = useState(0)
    const [Limit, setLimit] = useState(6)
    const [PostSize, setPostSize] = useState(0)
    const [SearchTerms, setSearchTerms] = useState("")
    const [Filters, setFilters] = useState({
        category: [],
        price: []
    })

    useEffect(()=> {
        const variables = {
            skip: Skip,
            limit: Limit
            
        }
        getProducts(variables)
    }, [])

    const getProducts = (variables) => {
        Axios.post('/api/product/getProducts', variables)
            .then(response => {
                if(response.data.success) {

                    if(variables.loadMore) {
                        setProducts([...Products, ...response.data.products])
                    }else {
                        setProducts(response.data.products)  
                    }

                    
                    // next page if possible
                    // setProducts(response.data.products)  
                    setPostSize(response.data.postSize)
                    console.log(response.data.products)

                }else {
                    alert('Failed to Fetch product data')
                }
            })
    }

    const onLoadMore = () => {
        let skip = Skip + Limit;
        const variables = {
            skip: skip,
            limit: Limit,
            loadMore: true

        }

        getProducts(variables)
        setSkip(skip)
    }

    const renderCards = Products.map((product, index) => {
        return(
            <div>
                <Link to={`/product/${product._id}`}>
                    {product.title}
                </Link>
                {/* <img src={`http://localhost:5000/${product.images[0]}`} /> */}
            </div>
        )
    })


    const showFilteredResults =(filters) => {
        const variables = {
            skip: 0,
            limit: Limit,
            filters: filters

        }
        getProducts(variables)
        setSkip(0)

    }

    const handlePrice = (value) => {
        const data = price;
        let array = [];
        for (let key in data) {

            if(data[key].id === parseInt(value, 10)){
                array = data[key].array;
            }
        }
        return array
    }

    const handleFilters = (filters, category) => {
        const newFilters = {...Filters}

        newFilters[category] = filters

        if(category === "price") {
            let priceValues = handlePrice(filters)
            newFilters[category] = priceValues
        }
        
        showFilteredResults(newFilters)
        setFilters(newFilters)

    }

    const updateSearchTerms = (newSearchTerm) => {
        

        console.log(newSearchTerm)
        const variables = {
            skip: 0,
            limit: Limit,
            filters: Filters,
            searchTerm: newSearchTerm

        }
        setSkip(0)
        setSearchTerms(newSearchTerm)
        getProducts(variables)

    }

    return (
        <div>
            HOME
            <Container>
                <CheckBox 
                    handleFilters={filters => handleFilters(filters, "categorys")}
                    list={category}
                />
                <RadioBox 
                    handleFilters={filters => handleFilters(filters, "price")}
                    list={price}
                />

                <Search 
                    refreshFunction={updateSearchTerms}
                />
                <br />
                {renderCards}
                {PostSize >= Limit &&
                    <div style={{justifyContent: 'center', display: 'flex'}}>
                        <button onClick={onLoadMore}>load More</button>
                    </div>
                }
            </Container>
                
                    
        </div>
    );
}

export default Home;