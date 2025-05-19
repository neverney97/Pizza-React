import React from 'react'
import image0 from '../assets/logo.jpg'

const Navbar = () => {
  return (
    <div>
        <nav class="flex justify-between bg-red-500 h-20">
		    <div class="p-2 pt-5">
		        <img class="h-10 w-15" src={image0} alt="Logo"/>
		    </div>
		    <div class="relative group">
			    <button class="drop-shadow-xl text-2xl text-white p-5 rounded-lg rounded:md rounded:sm hover:bg-blue-700">Menu</button>
		    </div>
	    </nav>
    </div>
  )
}

export default Navbar