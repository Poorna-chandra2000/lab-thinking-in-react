
import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {

    const [searchQuery, setSearchQuery] = useState('');
    const [onlyInStock, setOnlyInStock] = useState(false);

    const handleSearchChange = (query) => {
        setSearchQuery(query);
    };

    const handleInStockChange = (event) => {
        setOnlyInStock(event.target.checked);
    };

    const filteredProducts = jsonData.filter((product) => {
        const matchesSearchQuery = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStockFilter = !onlyInStock || product.inStock;
        return matchesSearchQuery && matchesStockFilter;
    });


    return (
        <div>
            <h1>Root Store</h1>
            <SearchBar searchQuery={searchQuery} onSearchChange={handleSearchChange} checked={onlyInStock} onCheckChange={handleInStockChange} />
            <ProductTable products={filteredProducts} />
        </div>
    )

};
export default ProductsPage;
