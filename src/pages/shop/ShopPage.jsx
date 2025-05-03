import React, { useEffect, useState } from 'react'

import productsData from "../../data/products.json"
import ProductCards from './ProductCards';
import ShopFiltering from './ShopFiltering';

const filters = {
    categories: ['All','Desktops','Laptops','Consoles','Accessories'],
    priceRanges: [
        { label: 'Under 200$', min: 0, max: 200 },
        { label: '200$ - 500$', min: 200, max: 500 },
        { label: '500$ - 800$', min: 500, max: 800 },
        { label: '800$ and above', min: 800, max: Infinity }
    ]
}

const ShopPage = () => {
    const [products, setProducts] = useState(productsData);
    const [filtersState, setFiltersState] = useState ({
        category: 'All',
        priceRange: ''
    });

    // filtering functions
    const applyFilters = () => {
        let filteredProducts = productsData;

        // filter by category
        if(filtersState.category && filtersState.category !== 'All') {
            filteredProducts = filteredProducts.filter(product => product.category === filtersState.category)
        }

        // filter by price
        if(filtersState.priceRange) {
            const [minPrice, maxPrice] = filtersState.priceRange.split('-').map(Number);
            filteredProducts = filteredProducts.filter(product => product.price >= minPrice && product.price <= maxPrice)
        }

        setProducts(filteredProducts)
    }

    useEffect(() => {
        applyFilters()
    }, [filtersState])

    // clear the filters
    const clearFilters = () => {
        setFiltersState({
            category: 'All',
            priceRange: ''
        })
    }

  return (
    <>
      <section className='section__container bg-primary-light'>
        <h2 className='section__header capitalize'>Shop</h2>
        <p className='section__subheader'>Explore our full collection of gaming gear — desktops, laptops, consoles, and accessories all in one place.</p>
    </section>

    <section className='section__container'>
        <div className='flex flex-col md:flex-row md:gap-12 gap-8'>
            {/* left side */}
            <ShopFiltering
            filters={filters}
            filtersState={filtersState}
            setFiltersState={setFiltersState}
            clearFilters={clearFilters}
            />

            {/* right side */}
            <div>
                <h3 className='text-xl font-medium mb-4'>Products Available: {products.length}</h3>
                <ProductCards products={products}/>
            </div>
        </div>
    </section>
    </>
  )
}

export default ShopPage
