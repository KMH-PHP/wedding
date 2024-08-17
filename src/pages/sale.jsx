import sale_img from "../assets/wedding_img/Rectangle 10.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsFillGridFill } from "react-icons/bs";
import { HiViewList } from "react-icons/hi";
import man from "../assets/wedding_img/Rectangle 173.png"
import woman from "../assets/wedding_img/Rectangle 174.png"

const sale = () => {
  return (
    <div className="">
      <div className="">
        <img src={sale_img} className="max-w-full"/>
      </div>

      <div className="container mx-auto  mt-10 w-[90%]">
        <div className="flex justify-between">
          <div className="flex gap-1">
            <h1 className="text-[24px] font-semibold">Found 376 results for </h1>
            <h1 className="text-blue-500 text-[24px] font-semibold"> dji phantom</h1>
          </div>

          <div className="flex gap-4">
          <div className="border rounded border-[#DDE2E4] flex gap-1 w-40 h-8 items-center">
            <span className="text-[#DDE2E4] ml-3">Sort by</span>
            <span className="">Featured</span>
            <MdKeyboardArrowDown className="m-1"/>
          </div>

          <div className="flex rounded border">
            <div className="border bg-[#E5E9EB]  w-8 h-8 flex items-center justify-center">
            <BsFillGridFill className="m-1"/>
            </div>
            <div className="border text-[#B0BABF]  w-8 h-8 flex items-center justify-center">
            <HiViewList className="m-1"/>
            </div>
          </div>

          </div>

          </div>

      <div className=" mt-6 flex">
      <div className=" col-span-1 mr-10">
        <div className="mb-4">
          <label htmlFor="min" className="font-semibold">Price,$</label>
          <div className="flex gap-4">
          <input type="text" placeholder="Min" className="border w-[132px] h-8 rounded pl-2 border-[#DDE2E4]"/>
          <input type="text" placeholder="Max" className="border w-[132px] h-8 rounded pl-2 border-[#DDE2E4]"/>
          </div>
        </div>
        
        <div className="mb-3">
          <h1 className="font-semibold mb-1">Quadcopter Features</h1>
          <div className="flex gap-2 items-center w-[256px] h-8">
          <input type="checkbox" className="border border-[#DDE2E4]"/><span className="">App-Controlled</span>
          </div>
          <div className="flex gap-2 items-center w-[256px] h-8">
          <input type="checkbox" className="border border-[#DDE2E4]"/><span className="">Obstacle Avoidance</span>
          </div>
          <div className="flex gap-2 items-center w-[256px] h-8">
          <input type="checkbox" className="border border-[#DDE2E4]"/><span className="">Video Downlink Capable</span>
          </div>
          <div className="flex gap-2 items-center w-[256px] h-8">
          <input type="checkbox" className="border border-[#DDE2E4]"/><span className="">Wi-Fi</span>
          </div>
        </div>

        <div className="mb-3">
          <h1 className="font-semibold mb-1">Video Capture Resolution</h1>
          <div className="flex gap-2 items-center w-[256px] h-8">
          <input type="checkbox" className="border border-[#DDE2E4]"/><span className="">4K UHD 2160p</span>
          </div>
          <div className="flex gap-2 items-center w-[256px] h-8">
          <input type="checkbox" className="border border-[#DDE2E4]"/><span className="">FHD 1080p</span>
          </div>
          <div className="flex gap-2 items-center w-[256px] h-8">
          <input type="checkbox" className="border border-[#DDE2E4]"/><span className="">HD 720p</span>
          </div>
        </div>

        <div className="mb-3">
          <h1 className="font-semibold mb-1">Operator Skill Level</h1>
          <div className="flex gap-2 items-center w-[256px] h-8">
          <input type="checkbox" className="border border-[#DDE2E4]"/><span className="">Beginner</span>
          </div>
          <div className="flex gap-2 items-center w-[256px] h-8">
          <input type="checkbox" className="border border-[#DDE2E4]"/><span className="">Intermediate</span>
          </div>
          <div className="flex gap-2 items-center w-[256px] h-8">
          <input type="checkbox" className="border border-[#DDE2E4]"/><span className="">Expert</span>
          </div>
        </div>

        <div className="mb-3">
          <h1 className="font-semibold mb-1">Brand</h1>
          <div className="flex gap-2 items-center w-[256px] h-8">
          <input type="checkbox" className="border border-[#DDE2E4]"/><span className="">DJI</span>
          </div>
          <div className="flex gap-2 items-center w-[256px] h-8">
          <input type="checkbox" className="border border-[#DDE2E4]"/><span className="">Holy Stone</span>
          </div>
          <div className="flex gap-2 items-center w-[256px] h-8">
          <input type="checkbox" className="border border-[#DDE2E4]"/><span className="">Potensic</span>
          </div>
          <div className="flex gap-2 items-center w-[256px] h-8">
          <input type="checkbox" className="border border-[#DDE2E4]"/><span className="">Ruko</span>
          </div>
          <div className="flex gap-2 items-center w-[256px] h-8">
          <input type="checkbox" className="border border-[#DDE2E4]"/><span className="">aovo</span>
          </div>
          <div className="flex gap-2 items-center w-[256px] h-8">
          <input type="checkbox" className="border border-[#DDE2E4]"/><span className="">OXOXO</span>
          </div>
          <div className="flex gap-2 items-center w-[256px] h-8">
          <input type="checkbox" className="border border-[#DDE2E4]"/><span className="">DEERC</span>
          </div>
        </div>

      </div>

      <div className="border border-gray-950">
          <div>
            <div>
              <div className="flex">
                <img src={man} className="max-w-full"/>
                <img src={woman} className="max-w-full" />

              </div>
              <h3>Western Style Wedding Dress & Suit</h3>
              <span>150000 MMK</span>
              
            </div>
          </div>
      </div>
      </div>
      

      </div>
    </div>
  )
}

export default sale