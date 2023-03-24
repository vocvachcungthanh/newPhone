import React from 'react';

function SearchInput() {
    return (
        <React.Fragment>
            <input
                type="text"
                placeholder="Tìm kiếm sản phẩm ...."
                className="flex pl-2.5 h-10 w-full focus-visible: outline-none placeholder:text-[#999ea1] placeholder:text-sm placeholder: font-light text-sm"
            />

            <button className="flex ml-auto w-10 pr-2.5">
                <img src="./iconsearch.png" alt="" />
            </button>
        </React.Fragment>
    );
}

export default SearchInput;
