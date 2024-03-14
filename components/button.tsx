import Image from 'next/image'
import React from 'react'

type btnProps = {
  type: 'button' | 'submit',
  variant: 'btn_red' | 'btn_white',
  icon?: string,
  title: string,
  className: string
}

const Button = ({ type, variant, icon, title, className }: btnProps) => {
  return (
    <button className={`flex justify-center items-center rounded-md ${className} ${variant}`} type={type}>{icon && <Image src={icon} height={30} width={30} alt='icon' />} <label className={`font-semibold`}>{title}</label></button>
  )
}

export default Button