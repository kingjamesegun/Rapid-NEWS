import React from 'react'

function Quote() {
    return (
        <div className={`quote text-center mt-12 py-5 container bg-gray-50`}>
            <div className={` border-solid border-4 p-4 border-blue-400`}>
                <div className={`font-serif text-4xl text-center`}>
                    I would rather be an artist than a leader.
                    <br/>
                    Ironically, a leader has to follow the rules.
                </div>
                <p className={`text-gray-500 text-xs font-sans pt-4`}>
                    15.20.2021 <span className={`text-blue-300 `}>Cris Jams</span>
                </p>
            </div>
            
        </div>
    )
}

export default Quote
