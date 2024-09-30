import React,{ useState} from 'react'
import { useForm } from "react-hook-form"


function Form({userdata,updatedata}) {

    const {register,handleSubmit}=useForm();

    const submitfx = (data)=>{
        console.log(data);
        
        const newUserdata = [...userdata, data];
        console.log(newUserdata);
         
        updatedata(newUserdata)
        
    }
    const profileurl=''
    const [profile,setProfile]=useState(profileurl)

    const handleProfile=(event)=>{
       setProfile(event.target.value)
    }

  return (
    <div className='h-fit w-64 bg-[#77777788] rounded-md p-4'>

        <form action="" className='flex flex-col gap-4' onSubmit={handleSubmit(submitfx)}>
            <label htmlFor="" className='flex items-center justify-center text-lg font-bold text-white'>Fill Details</label>
            <div className="rounddiv h-24 w-full flex items-center justify-center  ">

                <img className='h-24 w-24 rounded-full object-cover' src={profile || "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?size=338&ext=jpg&ga=GA1.1.1819120589.1727568000&semt=ais_hybrid" } alt="" />

            </div>

            <input {...register('img',{onChange: handleProfile})}  type="text" placeholder='Profile Picture URL Here' className='px-2 rounded-md h-8' />
            <input {...register('name')} type="text" placeholder='Name Here' className='px-2 rounded-md  h-8'/>
            <input {...register('email')}  type="email" placeholder='E-Mail Here' className='px-2 rounded-md h-8'/>
            <input {...register('phone')} type="tel" placeholder='Mobile No. Here' className='px-2 rounded-md h-8'/>
            <textarea  {...register('bio')}   placeholder='Bio Here' className='px-2 h-32 rounded-md '/>
            <input type="submit" value="Add User Card" className='w-full h-8 bg-green-600 font-bold rounded-full text-white' />


        </form>


    </div>
  )
}

export default Form