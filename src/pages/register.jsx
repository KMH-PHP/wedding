

import signup from "../assets/wedding_img/signup.png";
import { BiSolidHide } from "react-icons/bi";
import { FaCheckSquare } from "react-icons/fa";
import  captcha  from "../assets/wedding_img/captcha.svg";

const Register = () => {
  return (
        <div className="">
            <div className=" md:flex bg-white mx-auto overflow-hidden">
                    <img src={signup} alt="image" className="max-w-auto md:h-full  md:w-1/2" />

                <div className="md:w-1/2 flex  items-center mx-28">
                    <div className=" flex flex-col w-[473px] h-[770px]">
                         <h2 className="text-[32px] ">Create an account</h2>
                         <div className="flex">
                             <p>Already have an account?</p>
                            
                   
                   {/* <Link to="/sign_in" className="underline">Log in</Link> 
                   <Outlet /> */}
                    
                   
                    
                    </div>

                    <div className="my-8 w-[473px]">
                    <form action="#">
                            <div className="flex flex-col">
                            <label htmlFor="username" className="mb-1 text-[#666666]">User name</label>
                            <input type="text" className="border border-gray-400 h-14 w-[473px] rounded-xl" />
                            </div>

                            <div className="flex flex-col my-6">
                            <label htmlFor="email" className="mb-1 text-[#666666]">Email address</label>
                            <input type="text" className="border border-gray-400 h-14 w-[473px] rounded-xl" />
                            </div>

                            <div className="flex flex-col mb-1">
                                <div className="flex justify-between">
                                <label htmlFor="password" className="mb-1 text-[#666666]">Password</label>
                                <div className="flex">
                                <BiSolidHide className="m-1 text-[#666666]"/>
                                <span className="text-[#666666]">Hide</span>
                                </div>
                                </div>
                             <input type="text" className="border border-gray-400 h-14 w-[473px] rounded-xl" />
                            </div>

                            <span className="text-md text-[#666666] ">Use 8 or more characters with a mix of letters, numbers & symbols</span>    

                            <div className="w-[290px] my-8">
                    <p className="text-[#666666]">By creating an account,you agree to our <span className="underline text-[#000]">Terms of use</span> and <span className="underline text-[#000]">Privacy Policy</span></p>
                             </div>

                            <div className="flex w-[363px] border h-16 items-center rounded-xl border-gray-900 mb-8"> 
                                <FaCheckSquare className="text-green-500 m-1 ml-6" />
                                <span>I’m not a robot</span>
                            <img src={captcha} alt="image" className="w-6 h-6 ml-32"/>                                
                            </div>

                            <button className="rounded-xl border p-3 text-white bg-gray-400">Create an accrount</button>
                            </form>
                            <div className="flex">
                             <p>Already have an account?</p>
                             
                    
                    {/* <Link to="/sign_in" className="underline">Log in</Link> */}
                  
                    </div>
                    </div>                  
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Register