import React from 'react';

const ProductList = ({ filteredProducts }) => {
    return (
        <>
            <h2 className='text-primary text-center mt-5'>Welcome To Our Product Gallery</h2>
            <div className="product-area pt-5">
                <div className="container">
                    <div className="row">
                        {filteredProducts.map((product, idx) => (
                            <div className="col-xl-3 col-md-6 col-12 mt-5" key={idx}>
                                <div className="card">
                                    <div className="card-img p-4">
                                        <img src={product.image} className="card-img-top h-100" alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title mb-2">{product.name}</h4>
                                        <p className="card-text mb-2"><b>For : </b>{product.type.toUpperCase()}</p>
                                        <p className="mb-4 d-flex align-items-center">Color : <span className='color-area ms-3' style={{backgroundColor: `${product.disColor}`}}></span></p>
                                        <p><b>Brand : </b> {product.brand}</p>
                                        {/* <a href="index.html" className="btn btn-danger me-2"><i className="ri-heart-line"></i></a>
                                        <a href="index.html" className="btn btn-success"><i className="ri-shopping-cart-line"></i></a> */}
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
