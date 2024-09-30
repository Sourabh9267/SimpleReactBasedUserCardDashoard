import React, { useState } from 'react'
import Cards from './componants/Cards'
import Card from './componants/Card'
import Form from './componants/Form'

function App() {

 const usrdata=[
  
  ]

  const [data,setData] = useState(usrdata);

  
  
  return (
    <div className='bg-[#19191a] h-screen w-full  flex font-[poppins] '>
      

      <div className="formdiv h-screen w-96 bg-[#333333] flex items-center justify-center">

      <Form userdata={data} updatedata={setData}/>  

      </div>
     
      <div className="cardsdiv h-screen w-full">

      <Cards userdata={data} updatedata={setData}>




      </Cards>

      </div>

    </div>
  )
}

export default App