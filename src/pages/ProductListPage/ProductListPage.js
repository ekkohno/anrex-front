import React, { useMemo, useState } from 'react';
import FilterIcon from '../../components/common/FilterIcon';
import content from '../../data/content.json';
import Categories from '../../components/Filters/Categories';
import PriceFilter from '../../components/Filters/PriceFilter';
import ColorsFilter from '../../components/Filters/ColorsFilter';
import SizeFilter from '../../components/Filters/SizeFilter';
import CollectionsFilter from '../../components/Filters/CollectionsFilter'; // Импортируем новый компонент
import ProductCard from './ProductCard';

const categories = content?.categories;

const ProductListPage = ({ categoryType }) => {
  const [selectedCollections, setSelectedCollections] = useState([]);

  const categoryContent = useMemo(() => {
    return categories?.find((category) => category.code === categoryType);
  }, [categoryType]);

  const productListItems = useMemo(() => {
    let filteredProducts = content?.products?.filter((product) => product?.category_id === categoryContent?.id);
    
    if (selectedCollections.length > 0) {
      filteredProducts = filteredProducts.filter((product) => selectedCollections.includes(product.collection));
    }

    return filteredProducts;
  }, [categoryContent, selectedCollections]);

  return (
    <div>
      <div className="flex">
        <div className="w-[20%] p-[10px] border rounded-lg m-[20px]">
          {/* Filters */}
          <div className="flex justify-between">
            <p className="text-[16px] text-gray-600">Фильтр</p>
            <FilterIcon />
          </div>
          <div>
            {/* Product types */}
            <p className="text-[16px] text-black mt-5">Категории</p>
            <Categories types={categoryContent?.types} />
            <hr />

            {/* Collections */}
            <CollectionsFilter collections={categoryContent?.meta_data?.collections} onFilterChange={setSelectedCollections} />
            <hr />
            
            {/* Price */}
            <PriceFilter />
          </div>
        </div>

        <div className="p-[15px]">
          <p className="text-black text-lg">{categoryContent?.description}</p>
          {/* Products */}
          <div className="pt-4 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 px-2">
            {productListItems?.map((item, index) => (
              <ProductCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
