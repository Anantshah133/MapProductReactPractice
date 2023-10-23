import './App.css';
import "./components/style.css"
import ProductList from './components/ProductList';
import Data from './components/product-content';
import AsideComponent from './components/AsideComponent';
import { useState } from 'react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterColor, setFilterColor] = useState(''); // Add a state for color filter
  const [filterType, setFilterType] = useState('');
  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handleColorChange = (color) => {
    setFilterColor(color);
  };

  const filteredProducts = Data.filter((product) => {
    const nameMatches = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const colorMatches = filterColor ? product.color === filterColor : true;
    const typeMatches = filterType ? product.type === filterType : true;

    return nameMatches && colorMatches && typeMatches;
  });

  const handleTypeChange = (type) => {
    setFilterType(type);
  };

  return (
    <>
      <div className="container-fluid">
        <main className='row'>
          <div className="col-3 ps-0">
            <AsideComponent onSearchChange={handleSearchChange} onColorChange={handleColorChange} onTypeChange={handleTypeChange} />
          </div>
          <div className="col-9">
            <ProductList filteredProducts={filteredProducts} />
          </div>
        </main>
      </div>
    </>
  )
}

export default App;