import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Menus } from '../utils/types/TypeData'

import Navbar from '../components/Navbar'
import Layout from '../components/Layout'
import Modal from '../components/Modal'
import Card from '../components/Card'

const App = () => {

  const [menus, setMenus] = useState<Menus[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchData();
  }, [])

  function fetchData() {
    setLoading(true);
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
    <Layout>
      {/* < div className='w-full h-full bg-gray-500'> */}
      <Navbar />

      <div className='grid grid-cols-5 gap-5 space-x-2 mt-36 px-12 '>
        {menus.map((item, index) => (
          <Card
            key={index}
            image={item.gambar}
            name={item.nama}
            price={item.harga}
          />
        ))}
      </div>

      {/* </ div > */}
    </Layout>
  )
}

export default App
