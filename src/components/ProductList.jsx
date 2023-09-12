import React, { useState } from 'react';

const ProductList = ({ Products }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };
    const filteredProducts = Products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div className="search-container">
                <input type="text" placeholder="Search products..."  className="search-input" value={searchQuery} onChange={handleSearchChange} />
                <div className="icon-container">
                    <i className="ri-search-line"></i>
                </div>
            </div>
            <div className="product-area pt-5">
                <div className="container">
                    <div className="row">
                        {filteredProducts.map((product, idx) => (
                            <div className="col-lg-3 col-md-6 col-12 mt-5" key={idx}>
                                <div className="card">
                                    <div className="card-img p-4">
                                        <img src={product.image} className="card-img-top h-100" alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title mb-2">{product.name}</h4>
                                        <p className="card-text mb-2">{product.description}</p>
                                        <h5 className="h5 mb-4">Product Price : ${product.price}</h5>
                                        <a href="index.html" className="btn btn-danger me-2"><i className="ri-heart-line"></i></a>
                                        <a href="index.html" className="btn btn-success"><i className="ri-shopping-cart-line"></i></a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductList;
