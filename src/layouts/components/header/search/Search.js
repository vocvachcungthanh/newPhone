import React from 'react';
import Tippy from '@tippyjs/react/headless';

import SearchInput from './SearchInput';
import SearchResult from './SearchResult';
import { Wrapper as PopperWrapper } from '~/components/commons/Popper';

function Search() {
    const [dataSearch] = React.useState([]);

    return (
        <Tippy
            interactive
            animation={true}
            visible={dataSearch.length > 0}
            render={(attrs) => (
                <PopperWrapper tabIndex="-1" className="-mt-3 max-w-[338px] w-[338px]" {...attrs}>
                    <SearchResult />
                </PopperWrapper>
            )}
        >
            <div className="flex items-center ml-[103px] max-w-[338px] w-full border border-[#eb3e32] rounded-[5px] overflow-hidden">
                <SearchInput />
            </div>
        </Tippy>
    );
}

export default Search;
