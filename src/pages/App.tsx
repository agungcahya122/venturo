import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Menus } from '../utils/types/TypeData'

import Layout from '../components/Layout'
import Card from '../components/Card'
import Modal from '../components/Modal'

import { PiCookingPot } from 'react-icons/pi'
import { MdOutlineShoppingCart } from "react-icons/md"

const App = () => {

  const [menus, setMenus] = useState<Menus[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const [modal, setModal] = useState<string>("modal");

  const openModal = () => {
    setModal("modal-open");
  }


  useEffect(() => {
    fetchData();
  }, [])

  function fetchData() {
    axios
      .get(
        `https://tes-mobile.landa.id/api/menus`
      )
      .then((res) => {
        setMenus(res.data.datas);
      })

      .catch((err) => {
        console.log(err.toString());
      })
      .finally(() => setLoading(false));
  }


  return (
    < Layout >
      {/* Navbar */}
      <div className='bg-zinc-100 '>
        <div className={'navbar bg-zinc-100 pt-5 px-12 fixed top-0 z-50 transition '}>
          <div className="navbar-start">
            <div className="flex items-center gap-2">
              <PiCookingPot className="w-6 h-6 text-sky-500" />
              <p className="text-zinc-900 text-[18px]">Main Course</p>
            </div>
          </div>

          <div className={`navbar-end`}>
            <div onClick={() => openModal()} className={`flex modal${modal} relative bg-zin-100 border-2 border-sky-400 px-6 py-2 items-center`}>
              <div className="absolute -top-3 -right-3 bg-red-600 rounded-full px-2 py-0">
                <p className="border-none text-zinc-50">{9}</p>
              </div>
              <div className="tooltip tooltip-bottom tooltip-accent " data-tip="Keranjang">
                <div className="indicator flex items-center ">
                  <MdOutlineShoppingCart className='text-sky-400 w-6 h-6 cursor-pointer ' />
                  <p className="text-[16px]">Keranjang</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Menu */}

        <div className='grid grid-cols-5 gap-5 space-x-2 mt-32 px-12'>
          {menus.map((item, index) => (
            <Card
              key={index}
              image={item.gambar}
              name={item.nama}
              price={item.harga}
            />
          ))}
        </div>
      </div>

      <div id="modal-login" className={`modal ${modal}`}>
        <div className="modal-box max-w-full bg-white shadow-xl w-5/12">
          <div
            onClick={() => setModal("modal")}
            className=" absolute right-2 top-2 z-50 rounded-3xl bg-white px-2 py-0.5 text-[20px] font-bold text-color2 hover:cursor-pointer hover:bg-[rgba(31,64,104,0.8)]  hover:text-color1"
          >
            <p className="" onClick={() => setModal("modal")}>
              ✕
            </p>
          </div>
          <Modal />
        </div>
      </div>

    </ Layout >
  )
}

export default App
