import React from 'react'
//shortcur refce
function Navbar() {
  return (
    <div className='top-0  w-full'>
        <nav className='text-white text-4xl bg-violet-600 py-5 '>
            <ul className='flex space-x-10 justify-evenly'>
                <li className='hover:text-green-500' >About</li>
                <li className='hover:text-green-500'>Help</li>
                <li className='hover:text-green-500'>Contact</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar