import React from 'react'

const page = ({ params }) => {
    return (
        <div>{params.event}</div>
    )
}

export default page