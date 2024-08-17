import about_photo from "../assets/wedding_img/Rectangle 3.png"
import success_photo from "../assets/wedding_img/Image.png"

const About = () => {
  return (
    <div className="container auto items-center w-[90%] mx-auto  my-14">
      <div className="">
      <div className="flex relative gap-x-3 justify-center mb-6">
        <h1 className="font-['sail'] text-[64px] text-[#485C2F]">About Us</h1>
        <h3 className="uppercase text-[36px] p-5">Who we are</h3>
      </div>
      <div className="flex relative gap-10 grip grip-cols-2">
         <div className="overflow-hidden w-1/2 mr-11">
          <p className="mt-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae quaerat ea incidunt laboriosam deserunt porro architecto earum saepe possimus ducimus inventore mollitia consequuntur dignissimos, voluptatum culpa distinctio exercitationem, ad deleniti!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae quaerat ea incidunt laboriosam deserunt porro architecto earum saepe possimus ducimus inventore mollitia consequuntur dignissimos, voluptatum culpa distinctio exercitationem, ad deleniti!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae quaerat ea incidunt laboriosam deserunt porro architecto earum saepe possimus ducimus inventore mollitia consequuntur dignissimos, voluptatum culpa distinctio exercitationem, ad deleniti!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae quaerat ea incidunt laboriosam deserunt porro architecto earum saepe possimus ducimus inventore mollitia consequuntur dignissimos, voluptatum culpa distinctio exercitationem, ad deleniti!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae quaerat ea incidunt laboriosam deserunt porro architecto earum saepe possimus ducimus inventore mollitia consequuntur dignissimos, voluptatum culpa distinctio exercitationem, ad deleniti!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae quaerat ea incidunt laboriosam deserunt porro architecto earum saepe possimus ducimus inventore mollitia consequuntur dignissimos, voluptatum culpa distinctio exercitationem, ad deleniti!
          </p>
         </div>
         <div className="">
           <img src={about_photo} alt="image" className="h-full w-full"/>
         </div>
      </div>
      </div>
    
      <div className="mt-12">
        <div className="flex flex-col mb-4">
          <span className="text-sm text-[#65583A]">Launch faster</span>
          <h1 className="text-[64px] text-[#485C2F] font-['sail']">Success By The Numbers</h1>
          <p className="text-md text-[#65583A] w-[768px]">We’ve done all the heavy lifting so you don’t have to — get all the data you need to launch and grow your business faster.</p>
        </div>

        <div className="relative flex grid grid-cols-2 ">
          <div className="flex grid grid-cols-2 gap-8  m-8">
            <div className=" flex flex-col items-center ">
            <h1 className="text-[60px] text-[#463A1C] font-semibold">4,000+</h1>
            <h3 className="font-semibold font-[18px]">Global customers</h3>
            <p className="text-sm text-gray-500 text-center">We’ve helped over 4,000 amazing global companies.</p>
            </div>
            <div className=" flex flex-col items-center">
            <h1 className="text-[60px] text-[#463A1C] font-semibold">600%</h1>
            <h3 className="font-semibold font-[18px]">Return on investment </h3>
            <p className="text-sm text-gray-500 text-center">Our customers have reported an average of ~600% ROI.</p>
           </div>
            <div className=" flex flex-col items-center">
            <h1 className="text-[60px] text-[#463A1C] font-semibold">10k</h1>
            <h3 className="font-semibold font-[18px]">Global downloads</h3>
            <p className="text-sm text-gray-500 text-center">Our app has been downloaded over 10k times.</p>
            </div>
            <div className=" flex flex-col items-center">
            <h1 className="text-[60px] text-[#463A1C] font-semibold">200+</h1>
            <h3 className="font-semibold font-[18px]">5-star reviews</h3>
            <p className="text-sm text-gray-500 text-center">We’re proud of our 5-star rating with over 200 reviews.</p>
            </div>
          </div>
          <div className="m-8">
            <img src={success_photo} alt="image"className="w-full h-full"/>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default About