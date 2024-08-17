import dresses from "../assets/wedding_img/Frame 133.png"
import Photoshoot from "../assets/wedding_img/Frame 134.png"
import accessories from "../assets/wedding_img/132.png"
import themes from "../assets/wedding_img/133.png"
import boy from "../assets/wedding_img/Ellipse 1.svg"
import girl from "../assets/wedding_img/Ellipse 2.svg"
import { RiArrowRightWideLine,RiArrowLeftWideLine } from "react-icons/ri";

const Service = () => {
  return (
    <div>
        <div className="w-[80%] mx-auto my-14" >
    
    <div>
    <div className="flex flex-col items-center">
    <h1 className="mb-8 font-['sail'] text-[64px] text-[#485C2F]">Our Services</h1>
    <h3 className="uppercase font-['cabin'] text-[24px] text-[#65583A]">What We Offer For You</h3>
    </div>
    
    <div className="grid lg:grid-cols-2 gap-10 mt-12">
      <div>
        <img src={dresses} alt="image" className="w-full h-full"/>
      </div>
      <div>
      <img src={Photoshoot} alt="image" className="w-full h-full"/>
      
      </div>
      <div>
      <img src={accessories} alt="image" className="w-full h-full"/>
     
      </div>
      <div>
      <img src={themes} alt="image" className="w-full h-full"/>
     
      </div>
    </div>
    </div>
  
      </div>

    <div className="w-[90%] mx-auto relative my-5 ">
    <RiArrowLeftWideLine className="left-0 absolute text-[86px] bottom-96" />
    <RiArrowRightWideLine className="right-0 absolute text-[86px] bottom-96" />   
    <div className="border border-blue-600 my-20 w-[80%] mx-auto">
        <div className="flex flex-col items-center mt-8">
          <h1 className="font-['sail'] text-[64px] text-[#C58C02] mb-16">Review</h1>
          <h3 className="uppercase font-['cabin'] text-[24px] text-[#65583A]">What our client says</h3>
          <hr className="w-[652px] text-[#2D2D2D57] my-12"/>
        </div>
        
        <div className="mx-10">
          <p className="text-center text-[#65583A]">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
          </p>
        </div>
        
        <div className="flex justify-center mt-[122px] relative h-[240px] w-full">
        <div className="flex justify-center  relative  h-[240px] w-[400px]">
        
          <div className="border rounded-full w-[240px] h-[240px] border-blue-500 flex justify-center absolute left-0 z-10">
          <img src={boy} alt="image" className="w-[196px]  "/>
          </div>
          
          <div className="border rounded-full w-[240px] h-[240px] border-blue-500 flex justify-center absolute right-0 ">
          <img src={girl} alt="image" className="w-[196px] " />
          </div>   
                 
        </div>
         
        </div>       
          <div className="flex flex-col items-center my-10 ">
            <h3 className="font-['sail'] text-[32px] text-[#C58C02]">John & Lucy</h3>
            <span className="font-['sail'] text-[16px] text-[#C58C02] mt-3">Wedding - 20.2.2022</span>
          </div>
      </div>
    </div>
     
      
    </div>
    
      
      
   
    
  )
}

export default Service