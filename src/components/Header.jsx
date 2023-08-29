export default function Header() {
    return (
        <header className="header sticky-bar">
            <div className="container">
                <div className="main-header d-flex align-items-center position-relative">
                    <div class="header-logo">
                        <a class="d-flex" href="index.html">
                            <img alt="luxride" src="https://wp.alithemes.com/html/guza/demos/assets/imgs/template/logo.svg" />
                        </a>
                    </div>
                    <div className="header-menu">
                        <ul className="m-0 d-flex align-items-center gap-5">
                            <li>Home</li>
                            <li>Shop</li>
                            <li>Products</li>
                            <li>Pages</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="header-account d-flex">
                        <div className="account-icon">
                            <i class="ri-search-2-line"></i>
                        </div>
                        <div className="account-icon">
                            <i class="ri-user-line"></i>
                        </div>
                        <div className="account-icon">
                            <i class="ri-heart-line"></i>
                        </div>
                        <div className="account-icon">
                            <i class="ri-shopping-bag-line"></i>    
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}