import React from 'react';

//uselocation hook
import { useLocation } from 'react-router-dom';

//usefecht hook
import useFetch from '../hooks/useFetch';

//components
import CategoryNav from '../components/CategoryNav';
import Product from '../components/Product';

const Search = () => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const searchTerm = searchParams.get('query')
  console.log(searchTerm)
  //get products based on search term
  const {data} = useFetch(`/products?populate=*&filters[title][$contains]=${searchTerm}`)
  console.log(data)
  return (
    <div className=' mb-[30px] pt-40 xl:pt-0 lg:pt-4'>
      <div className=' container mx-auto'>
        <div className=' flex gap-x-[30px]'>
          <CategoryNav/>
          <div>
            {/* products grid */}
            <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px]'>
              {data?.map((product)=> {
                    return <Product product={product} key={product.id}/> 
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Search;
