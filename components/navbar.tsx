import { navLinks } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./button"
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    return (
        <nav className="h-[50px] md:h-[122px] w-full flex items-center justify-between px-3 lg:px-16">
            <Link href={'/'}>
                <Image src={'./logo/logo.svg'} height={42} width={147} alt="logo" />
            </Link>
            <ul className="hidden md:flex gap-x-3 lg:gap-x-5 text-[16px]">
                {
                    navLinks.map((link) => (<Link href={link.href} key={link.key} className="font-semibold cursor-pointer">{link.label}</Link>))
                }
            </ul>
            <div className="hidden md:flex h-full items-center gap-x-2">
                <Button className="px-3 py-[7px] lg:px-4 lg:py-[10px]" type="button" variant="btn_white" title="Daftar" />
                <Button className="px-3 py-[7px] lg:px-4 lg:py-[10px]" type="button" variant="btn_red" title="Masuk" />
            </div>
            <div className="h-full md:hidden flex justify-center items-center">
                <MenuIcon />
            </div>
        </nav>
    )
}

export default Navbar