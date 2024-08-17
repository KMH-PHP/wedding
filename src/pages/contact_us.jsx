import { CiLocationOn } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { FiPhone } from "react-icons/fi";

const Contact_us = () => {
  return (
    <div>
         <div className="w-[90%] mx-auto my-14" >
      <div className="flex flex-col justify-center items-center">
      <h1 className="font-['sail'] text-[64px] text-[#485C2F]">Contact Us</h1>
      <span className="uppercase  font-['jost'] text-[21px] text-[#627E40]">How You Can Contact Us</span>
      </div>
      
      <div className="flex gap-10 mt-14 justify-center">
        <div className="relative w-[284px] h-[260px] flex justify-center">
    
        <div className="absolute z-20">
          <div className="border rounded-full  w-[91px] h-[91px]  flex justify-center items-center">
            <CiLocationOn className=" w-[50px] h-[50px] text-[#65583A]"/>
          </div>
        </div>
        
         <div className="border border-t-0 rounded shadow-md  w-[284px] h-[213px] flex flex-col justify-center items-center absolute bottom-0 z-0">
          <h3 className="font-['sail'] text-[24px] text-[#485C2F] mt-7 text-center">Address</h3>
          <p className="font-['jost'] text-[18px] text-[#627E40] mt-9 w-[227px] h-auto text-center">7 Green Lake Street Crawfordsville, IN 47933</p>
          </div>
        </div>

        <div className="relative w-[284px] h-[260px] flex justify-center">
    
    <div className="absolute z-20">
      <div className="border rounded-full  w-[91px] h-[91px]  flex justify-center items-center">
        <TfiEmail className=" w-[50px] h-[50px] text-[#65583A] "/>
        
      </div>
    </div>
    
     <div className="border border-t-0 rounded shadow-md  w-[284px] h-[213px] flex flex-col justify-center items-center absolute bottom-0 z-0">
      <h3 className="font-['sail'] text-[24px] text-[#485C2F] mt-7 text-center">Email Us</h3>
      <p className="font-['jost'] text-[18px] text-[#627E40] mt-9 w-[227px] h-auto text-center">kwin@gmail.com
      oakarkyaw7090@gmail.com</p>
      </div>
        </div>

        <div className="relative w-[284px] h-[260px] flex justify-center">
    
    <div className="absolute z-20">
      <div className="border rounded-full  w-[91px] h-[91px]  flex justify-center items-center">
        <FiPhone className=" w-[50px] h-[50px] text-[#65583A]"/>
      </div>
    </div>
    
     <div className="border border-t-0 rounded shadow-md  w-[284px] h-[213px] flex flex-col justify-center items-center absolute bottom-0 z-0">
      <h3 className="font-['sail'] text-[24px] text-[#485C2F] mt-7 text-center">Call Now</h3>
      <p className="font-['jost'] text-[18px] text-[#627E40] mt-9 w-[150px] h-auto text-center">+95 977324324
      +95 923546353</p>
      </div>
         </div>
      </div>

      <div className="my-16 border border-[#65583A]">
        <div className="mt-[141px]">
          <div className="flex flex-col items-center">
              <h1 className="font-['sail'] text-[45px] text-[#485C2F]">Have Any Questions?</h1>
              <h3 className="my-14 text-[#65583A] w-[752px] text-center font-normal text-[22px] font-['jost'] tracking-wider">
                It is a long established fact that a reader will be distracted content of a page when looking.</h3>
          </div>

          <div className=" mb-14 flex justify-center">
            <form >
              <div className="flex gap-[162px]">
              <div className="">
              <div className="flex flex-col mb-12">
                <label htmlFor="your_name" className="text-[#65583A] text-[22px]">Your Name</label>
                <input type="text" placeholder="Enter your Name" className="text-sm border-0 border-b-2 w-[336px] py-3 border-gray-400"/>
              </div>
              <div className="flex flex-col">
                <label htmlFor="your_name" className="text-[#65583A] text-[22px]">Your Address</label>
                <input type="text" placeholder="Enter your address" className="text-sm border-0 border-b-2 w-[336px] py-3 border-gray-400"/>
              </div>
              </div>
              <div>
              <div className="flex flex-col mb-12">
                <label htmlFor="your_email" className="text-[#65583A] text-[22px]">Your Email</label>
                <input type="text" placeholder="Enter your Email" className="text-sm border-0 border-b-2 w-[336px] py-3 border-gray-400"/>
              </div>
              <div className="flex flex-col">
                <label htmlFor="your_name" className="text-[#65583A] text-[22px]">Your Message</label>
                <input type="text" placeholder="Enter your message" className="text-sm border-0 border-b-2 w-[336px] py-3 border-gray-400"/>
              </div>
              </div>
              </div>
              <div className="text-center mt-12">
                <button className="text-white rounded px-8 py-4 bg-[#485C2F]"><span className="font-bold">Submit</span></button>
              </div> 
            </form>
          </div>
        </div>
      </div>
    </div>

      <div className="bg-[#B5CC99] text-center py-9 w-screen">
        <span className="text-[20px] font-['jost']">K-Win Technology</span>
        </div>
    </div>
   

  )
}

export default Contact_us;