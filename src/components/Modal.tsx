import React, { FC } from 'react'

import CustomButton from './cutomButton';

interface modalProps {
  image?: any;
  name?: string;
  price?: number;
}

const Modal: FC<modalProps> = ({ image, name, price }) => {
  return (
    <div className="h-10/12 -m-6 flex w-full">
      <div className="flex flex-row h-[6rem] items-center justify-center mt-8 p-3 w-[90%] bg-bgCard mx-auto rounded-xl">
        <div className=" w-[30%]">
          <img src={image} className="rounded-lg shadow-md" />
        </div>
        <div className=" w-[70%] ml-2">
          <h1 className="text-[16px] capitalize text-color3 font-semibold">
            {name}
          </h1>
          <div className="flex flex-row justify-between mt-1 items-center">
            <h2 className="text-[18px] font-semibold text-color3 mt-1 mr-2 align- bottom">{`Rp. ${price}`}</h2>
            <div className="flex flex-row">
              <CustomButton
                id="btn-add"
                label="+"
                // onClick={AddProduct}
                className="text-white bg-orangeComponent px-2 rounded-lg mr-2"
              />
              <p className=" text-[16px] text-color3 ">{1}</p>
              <CustomButton
                size=''
                id="btn-add"
                label="-"
                // onClick={DelProduct}
                className="text-white bg-orangeComponent h-[1.5rem] px-2 rounded-lg ml-2"
              />
              <p className=" text-[16px] text-color3 ">{1}</p>
              <CustomButton
                size='full'
                id="btn-add"
                label="-"
                // onClick={DelProduct}
                className="text-white bg-orangeComponent h-[1.5rem] px-2 rounded-lg ml-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
