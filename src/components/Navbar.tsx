import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

import { MdOutlineShoppingCart } from "react-icons/md"
import { PiCookingPot } from 'react-icons/pi'

import Modal from './Modal';
import { RootState } from "../utils/types/redux";

declare global {
  interface Window {
    my_modal_2: any
  }
}

const Navbar = () => {

  const datas = useSelector((state: RootState) => state.data.menus);

  return (
    <div className={'navbar bg-zinc-100 pt-8 pb-4 px-12 fixed top-0 z-50 transition '}>
      <div className="navbar-start">
        <div className="flex items-center gap-2">
          <PiCookingPot className="w-6 h-6 text-sky-500" />
          <p className="text-zinc-900 text-[18px]">Main Course</p>
        </div>
      </div>

      <div className={`navbar-end`}>
        <div onClick={() => window.my_modal_2.showModal()} className='flex relative bg-zin-100 border-2 border-sky-400 px-6 py-2 items-center hover:cursor-pointer'>
          <div className="absolute -top-3 -right-3 bg-red-600 rounded-full px-2 py-0">
            <p className="border-none text-zinc-50">{datas.length}</p>
          </div>
          <div className="tooltip tooltip-bottom tooltip-accent " data-tip="Keranjang">
            <div className="indicator flex items-center ">
              <MdOutlineShoppingCart className='text-sky-400 w-6 h-6 cursor-pointer ' />
              <p className="text-[16px]">Keranjang</p>
            </div>
          </div>
        </div>
      </div>

      <dialog id="my_modal_2" className="modal">
        <form method="dialog" className="absolute top-0 bottom-0 right-0 w-96 rounded-none bg-zinc-50">
          <Modal />
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div >
  )
}

export default Navbar