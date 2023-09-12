import './App.css';
import Header from './components/Header';
import ProductArea from './components/Product-Area';
import ProductList from './components/ProductList';
import Data from '../src/components/product-content';

function App() {
  return (
    <>
      <Header />
      {/* <ProductArea /> */}
      <ProductList Products={Data}/>
    </>
  )
}

export default App;