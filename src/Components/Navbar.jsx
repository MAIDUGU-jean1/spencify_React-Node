import React from 'react'

const Navbar = () => {
  return (
  <header className='bg-white shadow-md'>
   <div className='py-4 shadow-md'>
  <ul className='container mx-auto flex flex-wrap justify-between md:flex-row px-4 md:px-2 items-center'>

<div className='flex gap-4'>
    <li>
        <link rel="stylesheet" href="/" />Home
    </li>

    <li>
        <link rel="stylesheet" href="/" />About 
    </li>

    <li>
        <link rel="stylesheet" href="/" />FAQs
    </li>

    <li>
        <link rel="stylesheet" href="/" />Contact
    </li>
</div>
<div>
      <li>
        <link rel="stylesheet" href="/" />Signup
        <link rel="stylesheet" href="/" />My Account
      </li>
</div>
  </ul>

   </div>

  </header>
  )
}

export default Navbar