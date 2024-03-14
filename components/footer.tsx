import { produk, tentang } from "@/constants";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return <footer className="w-full h-[583px] bg-footer px-[64px] py-[39px] flex flex-col items-center gap-y-[46px]">
    <section className="w-full h-[291px] flex justify-between gap-x-[149px]">
      <div className="w-[608px] h-full flex flex-col gap-y-4 text-white">
        <Link href={'/'}>
          <img src="/logo/logo-white.svg" alt="logo" />
        </Link>
        <span className="text-base font-normal">SobatBangun adalah platform digital dari SIG yang bergerak dengan misi mengembangkan proses pembangunan dan renovasi rumah secara lebih baik serta berkelanjutan.</span>
        <div className="flex gap-x-2">
          <img src="./icon/Message.svg" alt="email" /><a href="/" className="underline">sobat@sobatbangum.com</a>
        </div>
        <span>Social Media:</span>
        <div className="w-fit h-[50px] flex gap-x-[26px]">
          <div className="rounded-full w-[50px] h-[50px] flex justify-center items-center bg-[#2C373E]">
            <img src="./icon/instagram.svg" alt="instagram" />
          </div>
          <div className="rounded-full w-[50px] h-[50px] flex justify-center items-center bg-white">
            <img src="./icon/facebook.svg" alt="facebook" />
          </div>
          <div className="rounded-full w-[50px] h-[50px] flex justify-center items-center bg-white">
            <img src="./icon/youtube.svg" alt="instagram" />
          </div>
        </div>
      </div>
      <div className="w-[555px] h-[252px] flex gap-x-[48px] text-white">
        <div className="w-[253.5px] h-full flex flex-col gap-y-[24px]">
          <span className="font-bold text-xl">Produk & Layanan</span>
          <ul className="flex flex-col gap-y-[8px]">
            {
              produk.map((link) => (<Link href={link.href} key={link.key}>{link.label}</Link>))
            }
          </ul>
        </div>
        <div className="w-[253.5px] h-full flex flex-col gap-y-[24px]">
          <span className="font-bold text-xl">Tentang Kami</span>
          <ul className="flex flex-col gap-y-[8px]">
            {
              tentang.map((link) => (<Link href={link.href} key={link.key}>{link.label}</Link>))
            }
          </ul>
        </div>
      </div>
    </section>
    <section className="w-full h-[81px] bg-teal-300"></section>
    <section className="w-full h-[41px] bg-teal-300"></section>
  </footer>;
};

export default Footer;
