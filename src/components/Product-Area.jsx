import "./style.css";
import Products from "./product-content";

function ProductArea() {
    return (
        <div className="product-area pt-5">
            <div className="container">
                <div className="row">
                    {Products.map((product, idx) => (
                        <div className="col-lg-3 col-md-6 col-12 mt-5" key={idx}>
                            <div className="card">
                                <div className="card-img p-4">
                                    <img src={product.image} className="card-img-top h-100" alt="" />
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title mb-2">{product.name + (idx+1)}</h4>
                                    <p className="card-text mb-2">{product.description}</p>
                                    <h5 className="h5 mb-4">Product Price : ${product.price}</h5>
                                    <a href="index.html" className="btn btn-danger me-2"><i class="ri-heart-line"></i></a>
                                    <a href="index.html" className="btn btn-success"><i class="ri-shopping-cart-line"></i></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductArea;