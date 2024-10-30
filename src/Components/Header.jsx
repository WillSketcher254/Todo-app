// import React from 'react'
import TodoImg from '/src/assets/todoIcon.jpg'

// function Header() {
//     return (
//         <div>
//             
//             Header
//         </div>
//     )
// }

// export default Header

import React from 'react'

function Header() {
  return (
    <div className='header flex center w-full bg-slate-500 p-3 '>
        <img src={TodoImg} alt="" className='h-10 mx-10 rounded-xl'/>
        <h1 className='text-[40px]'>To-do list</h1>
    </div>
  )
}

export default Header;