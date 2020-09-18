import Axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import CheckBox from './CheckBox';
import RadioBox from './RadioBox';
import {price, category} from './Datas';

function Home() {

    const [Products, setProducts] = useState([])
    const [Skip, setSkip] = useState(0)
    const [Limit, setLimit] = useState(6)
    const [PostSize, setPostSize] = useState(0)
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
                {product.title}
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
        console.log(filters);
        const newFilters = {...Filters}

        newFilters[category] = filters

        if(category === "price") {
            let priceValues = handlePrice(filters)
            newFilters[category] = priceValues
        }
        
        showFilteredResults(newFilters)
        setFilters(newFilters)

    }


    return (
        <div>
            Home
            <CheckBox 
                handleFilters={filters => handleFilters(filters, "categorys")}
                list={category}
            />
            <RadioBox 
                handleFilters={filters => handleFilters(filters, "price")}
                list={price}
            />
            <br />
            {renderCards}
            {PostSize >= Limit &&
                <div style={{justifyContent: 'center', display: 'flex'}}>
                    <button onClick={onLoadMore}>load More</button>
                </div>
            }
                
        </div>
    );
}

export default Home;