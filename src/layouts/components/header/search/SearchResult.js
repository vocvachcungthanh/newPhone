import React from 'react';
import { Link } from 'react-router-dom';

function SearchResult() {
    return (
        <React.Fragment>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                <Link
                    to="/"
                    className="search__result flex flex-wrap p-[5px] border-t border-[rgb(0_0_0_/_10%)] hover:opacity-75 transition-all"
                    key={index}
                >
                    <div className="search__thumb w-10 h-10 overflow-hidden flex-shrink-0">
                        <img
                            className="flex object-cover"
                            src="https://bizweb.dktcdn.net/thumb/large/100/429/689/products/may-xay-an-dam-03l-bear-qsj-a01f2-gr-b03v2-12062021.png?v=1623599484340"
                            alt=""
                        />
                    </div>
                    <div className="search__content flex-1 pl-[10px] leading-5 text-[11px]">
                        <h3 className="product__title text-[11px] text-[#303846] font-normal">
                            Máy xay ăn dặm 0.3L Bear QSJ-A01F2 (GR-B03V2)
                        </h3>
                        <div className="product__price text-[#eb3e32] font-bold">890.000₫</div>
                    </div>
                </Link>
            ))}
            <Link
                to="/"
                className="block text-center text-[#222] py-[7px] text-sm leading-5 border-t border-[rgb(0_0_0_/_10%)] hover:text-[#eb3e32]"
            >
                Xem tất cả (8)
            </Link>
        </React.Fragment>
    );
}

export default SearchResult;
