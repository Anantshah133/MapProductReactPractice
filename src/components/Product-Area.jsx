import "./style.css";
import Products from "./product-content"
function ProductArea() {
    return (
        <div className="main">
            {showContent(Products)}
        </div>
    )
}

function showContent(Products) {
    Products.map((product, idx) => {
        <div class="card" style={{ width: '18rem' }}>
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="index.html" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    })
}

export default ProductArea;