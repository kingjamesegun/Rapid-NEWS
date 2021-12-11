import React from 'react'

function HotCard({images, type}) {
    return (
        <div className={`mx-3 my-5 border-l-4 border-solid pl-2 border-blue-300`}>
            
            <div className={`font-sans uppercase text-xs font-semibold text-gray-500`}>
                {type}
            </div>
            <p className={`font-serif text-base py:1 lg:py-2 font-bold text-black `}>
               {images.name}
            </p>
            <div className={`font-sans text-xs text-gray-500`}>
                Sat, 04 Dec 2021 
                <span className={`text-blue-300 pl-3`}>
                   || Google Actualités
                </span>
            </div>
        </div>
    )
}

export default HotCard
