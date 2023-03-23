import React from 'react';

function Search(props) {
    return (
        <form
            action=""
            method="get"
            className="flex items-center ml-[131px] max-w-[340px] w-full border border-[#eb3e32] rounded-[5px] overflow-hidden"
        >
            <input
                type="text"
                placeholder="Tìm kiếm sản phẩm ...."
                className="flex pl-2.5 h-10 w-full focus-visible: outline-none placeholder:text-[#999ea1] placeholder:text-sm placeholder: font-light text-sm"
            />

            <button className="flex ml-auto w-10 pr-2.5">
                <img src="./iconsearch.png" alt="" />
            </button>
        </form>
    );
}

export default Search;
