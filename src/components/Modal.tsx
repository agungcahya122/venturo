import React, { FC } from 'react'

import CustomButton from './cutomButton';

import { PiCookingPot } from 'react-icons/pi'
import { GrFormClose } from 'react-icons/gr'
import { BiMinus } from 'react-icons/bi'
import { BsPlus } from 'react-icons/bs'

interface modalProps {
  image?: any;
  name?: string;
  price?: number;
}

const Modal: FC<modalProps> = ({ image, name, price }) => {
  return (
    <>
      <div className='flex justify-between px-7 pt-5 pb-2 border-b '>
        <div className="flex items-center gap-2">
          <PiCookingPot className="w-6 h-6 text-sky-500" />
          <p className="text-zinc-900 text-[18px]">Main Course</p>
        </div>

        <button className="">
          <GrFormClose className="text-zinc-900 w-5 h-5" />
        </button>
      </div>

      <div className='border-b space-y-2 py-2 max-h-[27rem] w-full overflow-auto'>
        <div className='grid grid-cols-12'>
          <div className='col-span-4'>
            <div className='object-fill object-center rounded-md '>
              <img src={`https://www.indomie.com/uploads/product/indomie-mi-goreng-special_detail_094906814.png`} alt=".jpg" />
            </div>
          </div>

          <div className='col-span-8 text-zinc-900 text-[13px] '>
            <p className='text-[14px] font-[500]'>{`Nasi Lalapan Ayam Bakar`}</p>
            <p className=' text-sky-500'>{`Rp. 12000`}</p>
            <div className='flex w-full gap-4'>
              <p className='text-[12px] max-w-[8.5rem] mt-2 pl-1 break-words'>{`mantappppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp`}</p>

              <div className='pt-2'>
                <div className="flex flex-row">
                  <div className='bg-sky-400 flex items-center px-1 text-zin-50 text-[16px] rounded-md hover:cursor-pointer'>
                    <BiMinus className="w-3 h-3" />
                  </div>
                  <p className=" text-[16px] text-color3 mx-4">{1}</p>
                  <div className='bg-sky-400 flex items-center px-0.5 text-zin-50 text-[16px] rounded-md hover:cursor-pointer'>
                    <BsPlus className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
