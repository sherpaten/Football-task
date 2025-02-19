import React from 'react'

export default function Button(props) {
    const { className, ...remProps } = props;
    return (
        <button className={`bg-[#FFEB3B] hover:bg-[#ca8a04] transition-colors duration-200 my-2 rounded-lg px-2 py-1 text-lg text-[#161616] font-bold ${className}`} {...remProps}>
            {props.children}
        </button>
    )
}
