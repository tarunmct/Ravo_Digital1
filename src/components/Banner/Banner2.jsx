import React, { useState } from 'react'
import BannerImg from '../../assets/4.png'
import {motion} from 'framer-motion'
import { toast } from 'react-toastify'

const Banner2 = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "8a1130a8-17ac-44e3-8330-c708aabb5f34");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        toast.success("Form submitted successfully");
        setResult("");
        event.target.reset();
      } else {
        console.log("Error", data)
        toast.error(data.message || "Failed to submit form")
        setResult("");
      }
    } catch (error) {
      console.log("Error", error)
      toast.error("Something went wrong. Please try again.")
      setResult("");
    }
  };
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 pt-12 md:pt-16 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          {/*Hero Image Section */}
          <div className='flex justify-center
          items-center'>
            <motion.img
            initial={{
              opacity:0,
              x:-100,
            }}
            whileInView={{
              opacity:1,
              x:0,
            }}
            transition={{duration:0.5, delay:0.5}}
            src={BannerImg} alt="" className='w-[80%]
            md:max-w-[550px] xl:w-[600px] md:!scale-110' />
          </div>
          {/* Contact section */}
          <motion.div
           initial={{opacity:0,x:100}}
           whileInView={{opacity:1,x:0}}
           transition={{duration:0.5,delay:0.4}} 
          className='text-center p-6 py-10 lg:px-32 w-full overflow-hidden'>
          <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact  
      <span className='underline underline-offset-4
      decoration-1 font-light pl-2'>Us</span></h1>
      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Ready to Make a Move? Let's Build Your Future Together</p>
      
      <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
        <div className='flex flex-wrap'>
          <div className='w-full md:w-1/2 text-left'>Your Name
          <input className='w-full border-gray-300 rounded py-3 px-4
          mt-2 border' type="text" name='name' placeholder='Your Name' required />
          </div>
          <div className='w-full md:w-1/2 text-left md:pl-4'>
            Your Email
          <input className='w-full border-gray-300 rounded py-3 px-4
          mt-2 border' type="email" name='Email' placeholder='Your Email' required />
          </div>
        </div>
        <div className='my-6 text-left'>
          Message
          <textarea 
          className='w-full border border-gray-300 rounded py-3 px-4
          mt-2 h-48 resize-none'
          name="Message" placeholder="Message" required></textarea>
        </div>

        <button className='bg-[#fdcd2d] font-semibold py-2 px-12 mb-10 rounded text-black'>
          {result ? result : "Send Message"}</button>
      </form>
          </motion.div>
          </div>
        </div>
    </>
  )
}

export default Banner2
