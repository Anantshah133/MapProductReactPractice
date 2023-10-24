import React from 'react';

export default function AsideComponent({ onSearchChange, onColorChange, onTypeChange }) {
    const handleSearchChange = (e) => {
        onSearchChange(e.target.value);
    };

    const handleColorChange = (e) => {
        onColorChange(e.target.value);
    };

    const handleTypeChange = (e) => {
        onTypeChange(e.target.value);
    };

    return (
        <aside className='aside'>
            <div className="filter-container">
                <div className="search-container">
                    <input type="text" placeholder="Search Products here..." className="search-input" onChange={handleSearchChange} />
                    <div className="icon-container">
                        <i className="ri-search-line"></i>
                    </div>
                </div>
                <div className="filter-section mt-3 ps-4">
                    <h3 className='text-white text-start4 mt-5 mb-4'>Filter Product By:</h3>
                    <h6 className="text-white fs-3">Color:</h6>
                    <label className="d-inline-flex align-items-center me-3">
                        <input type="radio" name="color" value="White" className="me-2" onChange={handleColorChange} />
                        <p className="m-0 text-white fs-5">White</p>
                    </label>
                    <label className="d-inline-flex align-items-center me-3">
                        <input type="radio" name="color" value="Blue" className="me-2" onChange={handleColorChange} />
                        <p className="m-0 text-white fs-5">Blue</p>
                    </label>
                    <label className="d-inline-flex align-items-center me-3">
                        <input type="radio" name="color" value="Black" className="me-2" onChange={handleColorChange} />
                        <p className="m-0 text-white fs-5">Black</p>
                    </label>

                    <div className="filter-section mt-4">
                        <h6 className='text-white fs-3'>Type : </h6>
                        <select onChange={handleTypeChange} className='form-control w-50'>
                            <option value="">All</option>
                            <option value="men">Men</option>
                            <option value="women">Women</option>
                            <option value="kids">Kids</option>
                        </select>
                    </div>
                </div>
            </div>
        </aside>
    );
}
