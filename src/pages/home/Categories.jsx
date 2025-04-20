import React from 'react'
import category1 from "../../assets/cat-1.jpg"
import category2 from "../../assets/cat-2.jpg"
import category3 from "../../assets/cat-3.jpg"
import category4 from "../../assets/cat-4.jpg"
import { Link } from 'react-router-dom'

const Categories = () => {
    const categories = [
      {name: 'Desktops', path: 'desktops', image: category1},
      {name: 'Laptops', path: 'laptops', image: category2},
      {name: 'Consoles', path: 'consoles', image: category3},
      {name: 'Accessories', path: 'accessories', image: category4},
    ]
  return (
    <div className='product__grid'>
      {
        categories.map((category) => (
          <Link key={category.name} to={`/categories/${category.path}`}>
            <img src={category.image} alt="category.name" />
            <h4 className='categories__card'>{category.name}</h4>
          </Link>

        ))
      }
    </div>
  )
}

export default Categories