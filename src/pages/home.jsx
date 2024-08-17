import myImage from "../assets/wedding_img/home_photo.png";
import dress from "../assets/wedding_img/Rectangle 6.png"
import { FaShoppingCart } from "react-icons/fa";



const Home = () => {
  return (
    
    <div className="snap-x">
      
      <div className="relative flex container mx-auto">
        <img src={myImage} alt="image" className="max-w-full h-auto"/>
        <div className="absolute lg:mt-[88px] lg:ml-[720px] lg:mr-[99px] ">
        <h1 className="font-bold text-[36px] mb-3 text-[#3C3C3C] text-nowrap uppercase">make your wedding here!</h1>
        <p className="font-bold text-[24px] text-[#882437] uppercase">We prepare everything you need for wedding</p>
        </div>
      </div>

      <div className="relative flex gap-x-3 container auto mt-10 items-center w-[90%] mx-auto">
        <div className="overflow-hidden w-1/2 flex flex-col ">
          <div className="w-[500px]">
          <h1 className="mb-5 text-[#485C2F] font-['sail'] text-[64px]">White Ball Dress</h1>
          <span className="font-['cabin']">120,000MMK</span>
          <p className="mb-8 mt-5 font-['cabin']">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias et laboriosam porro nihil expedita, officia veniam provident earum cumque minus modi vero aperiam dignissimos, libero eveniet incidunt, ducimus in nisi.</p>
          <button>
          <div className="flex bg-[#485C2F] px-2 py-2 text-white rounded-md ">
          <FaShoppingCart className="m-1"/>Shop Now
          </div>
          </button>
          </div> 
        </div>
        <div className="w-1/2">
          <img src={dress} alt="image" className="h-auto "/>
        </div>
      </div>
      {/* <div>
      <svg className="w-64 h-50">
      <path d="M0.739658 14.1301C47.3263 45.4106 181.71 69.7165 262.707 60.1966C343.704 50.6768 399.39 31.3772 480.981 8.70554C562.573 -13.9661 640.587 15.9151 720.1 39.2747C799.612 62.6343 878.221 79.3639 959.218 69.844C1040.22 60.3241 1123.81 44.3322 1204.51 41.3883C1285.21 38.4443 1360.62 48.4398 1400.82 63.4346L1439.83 78.3752" stroke="#E9AB26" strokeWidth="1" fill="none"/>
            <path d="M10 30 10 50 10 60 10 70 C 20 10, 40 10, 50 30 S 80 50, 90 30" stroke="blue" strokeWidth="1" fill="none" />
        </svg>
        </div> */}
        
    </div>
  )
}

export default Home