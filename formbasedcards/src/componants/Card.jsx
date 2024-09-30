import React from 'react'

function Card({img,name,phone,email,bio,rembtnidx,handlerem}) {

    
  // Add more props as needed and update the component as per your requirements


  return (
    <div className='h-fit w-64 rounded-md drop-shadow-lg bg-[#94c4f62d] flex flex-col flex-wrap items-center gap-2 p-4 text-white'>
        

        <div className="div w-full flex justify-center">
        
        <img className='h-24 w-24 rounded-full ' src={img || "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?size=338&ext=jpg&ga=GA1.1.1819120589.1727568000&semt=ais_hybrid"} alt="" />

        </div>

        <h1 className='text-xl font-bold '>{name}</h1>
        <h4 className='text-xs'>{email} </h4>
        <h4 className='text-xs'> {phone}</h4>
        <p className='text-xs text-wrap w-56 py-2 px-4'>{bio}</p>

        <button onClick={()=>handlerem(rembtnidx)} className='h-8 w-full rounded-full bg-red-500 text-sm font-bold mt-4'>Remove User</button>

    </div>
  )
}

export default Card