// import { useState } from "react"
// import { PiCookingPot } from 'react-icons/pi'
// import { MdOutlineShoppingCart } from "react-icons/md"

// interface PropsNavbar {
//   modal: string;
// }

// export const Navbar = () => {

//   const [modal, setModal] = useState<string>("modal");

//   const openModal = () => {
//     setModal("modal-open");
//   }

//   return (
//     <>
//       <div className={'navbar bg-zinc-100 pt-5 px-12 fixed top-0 z-50 transition '}>
//         <div className="navbar-start">
//           <div className="flex items-center gap-2">
//             <PiCookingPot className="w-6 h-6 text-sky-500" />
//             <p className="text-zinc-900 text-[18px]">Main Course</p>
//           </div>
//         </div>

//         <div className={`navbar-end`}>
//           <div className='flex relative bg-zin-100 border-2 border-sky-400 px-6 py-2 items-center'>
//             <div className="absolute -top-3 -right-3 bg-red-600 rounded-full px-2 py-0">
//               <p className="border-none text-zinc-50">{9}</p>
//             </div>
//             <div className="tooltip tooltip-bottom tooltip-accent " data-tip="Keranjang">
//               <div className="indicator flex items-center ">
//                 <MdOutlineShoppingCart className='text-sky-400 w-6 h-6 cursor-pointer ' />
//                 <p className="text-[16px]">Keranjang</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* <div className="modal-box max-w-full bg-color2 shadow-xl md:w-11/12 lg:w-8/12">
//         <div
//           onClick={() => setModal("modal")}
//           className=" absolute right-2 top-2 z-50 rounded-3xl bg-color3 px-2 py-0.5 text-[20px] font-bold text-color2 hover:cursor-pointer hover:bg-[rgba(31,64,104,0.8)]  hover:text-color1"
//         >
//           <p className="" onClick={() => setModal("modal")}>
//             ✕
//           </p>
//         </div>
//         <div>
//           <p>Test</p>
//         </div>
//       </div> */}
//     </>
//   )
// }
