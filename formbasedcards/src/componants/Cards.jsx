import React from 'react'
import Card from './Card'


function Cards({userdata,updatedata,rembtnidx}) {

    const handleRemove = (idx) => {
        console.log("Removing item at index:", idx);
      
        const newUserdata = [...userdata]; 
        newUserdata.splice(idx, 1); 
      
        updatedata(newUserdata);
      };

    

  return (
    <div className='flex gap-4 p-5 flex-wrap '> 

    {

        userdata.map((item,index)=>{
            return <Card key={index} img={item.img} name={item.name} email={item.email} phone={item.phone} bio={item.bio} rembtnidx={index} handlerem={handleRemove} />
        })
    }


    

    </div>
  )
}

export default Cards