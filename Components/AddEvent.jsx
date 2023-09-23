import Link from 'next/link';

import React from 'react'

const AddEvent = () => {
  return (
    <div>
      <Link href="/create">
        <button>ADD EVENT</button>
      </Link>
    </div>
  )
}

export default AddEvent
