import React from 'react';

function Wrapper({ children, className, ...propsRest }) {
    return (
        <div className={`w-full shadow-[0px_2px_6px_rgba(50,50,50,0.33)] ${className}`} {...propsRest}>
            {children}
        </div>
    );
}

export default Wrapper;
