import Link from "next/link"

const Navbar = () => {
  return (
    <div className='absolute top-0 right-0 flex justify-between items-center 2xl:h-[5rem] xl:h-[4rem] w-[30%] 2xl:p-8 xl:p-4 2xl:text-base xl:text-sm bg-[#2a2a2a] rounded-tl-none rounded-br-none rounded-3xl'>
        <Link href="/about" className="hover:text-yellow-200 duration-300 font-semibold">
            About
        </Link>
        <Link href="/resume" className="hover:text-yellow-200 duration-300 font-semibold">
            Resume
        </Link>
        <Link href="/portfolio" className="hover:text-yellow-200 duration-300 font-semibold">
            Portfolio
        </Link>
        <Link href="/contact" className="hover:text-yellow-200 duration-300 font-semibold">
            Contact
        </Link>
    </div>
  )
}

export default Navbar