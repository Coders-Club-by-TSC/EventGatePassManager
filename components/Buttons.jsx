import React from 'react'

const WhiteButton = ({ onClick, text }) => {
    return (
        <button type="button" onClick={onClick} className="text-black bg-white hover:bg-white/90 focus:ring-4 focus:outline-none focus:ring-white/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ">
            {text}
        </button>
    )
}
const BlackButton = ({ onClick, text }) => {
    return (
        <button type="button" onClick={onClick} className="text-white bg-black hover:bg-black/90 focus:ring-4 focus:outline-none focus:ring-black/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ">
            {text}
        </button>
    )
}

export { WhiteButton, BlackButton }