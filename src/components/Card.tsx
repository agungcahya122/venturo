import React, { FC } from "react";

import CustomButton from "./cutomButton";

interface CardProps {
  image?: any;
  type?: string;
  price?: number;
  name?: string;
}

const Card: FC<CardProps> = ({ image, type, price, name }) => {
  return (
    <div className="card h-auto card-compact bg-bgCard bg-white rounded-md shadow-xl">
      <div className="h-44 w-full bg-center bg-cover bg-no-repeat p-2" style={{ backgroundImage: `url(${image})` }}>
        {/* <img
          src={image}
          alt="logo.svg"
          className=" "
        /> */}
      </div>
      <div className="card-body p-2">
        <p className="card-title text-zinc-900 font-semibold text-[16px]">
          {name}
        </p>
        <p className="card-title text-sky-500 text-[14px] -mt-3">{`Rp. ${price}`}</p>
        <div className="card-actions">
          <CustomButton
            size="full"
            id="btn-card"
            label="Tambahkan ke Keranjang"
          // onClick={onClickCart}
          />
        </div>
        {/* <p className="text-[16px] text-color4 mt-1 pb-4 font-semibold">{`Stok : ${stock}`}</p> */}
      </div>
    </div>
  );
};

export default Card;
