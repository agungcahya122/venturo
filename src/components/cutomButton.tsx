import { FC, ButtonHTMLAttributes } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
  label: string;
  size?: string;
  loading?: boolean;
}

const CustomButton: FC<ButtonProps> = ({ id, label, size, loading, ...props }) => {
  return (
    <button id={id} disabled={loading} className={`rounded-md bg-sky-500 max-w-full w-${size} px-4 py-2 text-[14px] text-zinc-50 disabled:cursor-not-allowed disabled:bg-zinc-400  ${loading} `} {...props}>
      <p className='flex items-center '>
        <AiOutlinePlus className="w-5 h-5 text-zin-50" />
        {label}
      </p>
    </button>
  )
}

export default CustomButton
