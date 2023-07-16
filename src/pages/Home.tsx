import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import axios from 'axios'

import { setMenus } from '../utils/redux/reducers/reducer';
import { Menus } from '../utils/types/TypeData'

import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import Loading from '../components/Loading';
import Navbar from '../components/Navbar'
import Layout from '../components/Layout'
import Card from '../components/Card'

const Home = () => {
  const dispatch = useDispatch();
  const [allMenu, setAllMenu] = useState<Menus[]>([]);
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
        setAllMenu(res.data.datas);
      })

      .catch((err) => {
        console.log(err.toString());
      })
      .finally(() =>
        setTimeout(() => {
          setLoading(false)
        }, 500)
      )
  }

  function handleData(item: Menus) {
    setLoading(true)
    const checkExist = localStorage.getItem("Datas");
    if (checkExist) {
      let parseMenu: Menus[] = JSON.parse(checkExist);
      parseMenu.push(item);
      localStorage.setItem("Datas", JSON.stringify(parseMenu));
      dispatch(setMenus(parseMenu));
    } else {
      localStorage.setItem("Datas", JSON.stringify([item]))
      dispatch(setMenus([item]))
    }
    toast.success('Berhasil menambahkan menu', {
      position: toast.POSITION.TOP_LEFT
    });
    setLoading(false)
  }

  return (
    <Layout>
      <Navbar />
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className='grid grid-cols-5 gap-5 space-x-2 mt-36 px-12 '>
            {allMenu.map((item, index) => (
              <Card
                key={index}
                image={item.gambar}
                name={item.nama}
                price={item.harga}
                handleData={() => handleData(item)}
              />
            ))}
          </div>
          <ToastContainer />
        </>
      )}
    </Layout>
  )
}

export default Home
