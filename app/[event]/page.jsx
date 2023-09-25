import React from 'react'

const page = ({ params }) => {
    return (
        <>
        <div className='flex justify-center items-center flex-col '>
            <div className='mt-10 w-9/12 mb-8'>
                <h1 className='text-5xl font-bold'>Event: ARAMBH</h1>
                <h3 className='text-2xl font-light text-gray-600 mt-2'>Creator: utkarshsingh737091@gmail.com</h3>
                <h3 className='text-2xl font-light text-gray-600 mt-2'>Registered member: 173</h3>
            </div>
            
<h1 className='text-4xl font-bold my-4'>Event Collaborators</h1>
<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
    <div>
    <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h6 class="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">utkarshsingh737091@gmail.com 
</h6>

    
</a>
    </div>
    <div>
    <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h6 class="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">utkarshsingh737091@gmail.com 
</h6>
    
</a>
    </div>
    <div>
    <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h6 class="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">utkarshsingh737091@gmail.com 
</h6>
    
</a>
    </div>
    
    
</div>

        </div>
        </>
    )
}

export default page