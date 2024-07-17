'use client'

import { useState } from "react"
import Image from "next/image"

// react icons
import { MdEmail as Email, MdPhoneIphone as Phone, MdCalendarMonth as Calendar, MdLocationOn as Location } from "react-icons/md";


const page = () => {
  const [about, setAbout] = useState<boolean>(true)
  const [resume, setResume] = useState<boolean>(false)
  const [portfolio, setPortfolio] = useState<boolean>(false)
  const [contact, setContact] = useState<boolean>(false)

  const [isHovered, setIsHovered] = useState<boolean>(false)

  const otherInfo = [
    {
      icon: <Email className='text-yellow-200 2xl:text-xl xl:text-sm' />,
      label: 'EMAIL',
      value: 'espineda.ryanmiguel.c200571@gmail.com'
    },
    {
      icon: <Phone className='text-yellow-200 2xl:text-xl xl:text-sm' />,
      label: 'PHONE',
      value: '+639760887623'
    },
    {
      icon: <Calendar className='text-yellow-200 2xl:text-xl xl:text-sm' />,
      label: 'BIRTHDAY',
      value: 'January 31, 2002'
    },
    {
      icon: <Location className='text-yellow-200 2xl:text-xl xl:text-sm' />,
      label: 'ADDRESS',
      value: 'Tulay na Patpat, Ibaan, Batangas'
    }
  ]

  return (
    <div className="h-screen w-screen px-[3rem] py-[1.5rem] bg-[#111]">
      <div className="flex justify-between 2xl:gap-6 xl:gap-3 h-full w-full p-[3rem] overflow-auto">
        <div className="flex flex-col justify-between items-center 2xl:gap-8 xl:gap-6 sticky top-0 shadow-md border border-[#2a2a2a] rounded-3xl w-[20%] h-full bg-[#1e1e1e] 2xl:p-[2rem] xl:p-[1rem]">
          <div className="flex flex-col justify-between items-center gap-2 h-[50%] w-full">
            {/* Personal Info */}
            <div className="flex justify-center items-center h-[60%] w-[80%]">
              <Image
                src='/img/grad_pic.jpg'
                alt="applicant-photo"
                width={500}
                height={500}
                className="h-full w-full rounded-3xl object-cover object-top"
              />
            </div>
            <div className="2xl:text-2xl text-center font-extrabold text-[#e0e0e0] xl:text-xl">
              Ryan Miguel M. Espineda {/* Name of the applicant */}
            </div>
            <div className="flex justify-center items-center bg-[#2b2b2b] py-[.5rem] px-[1rem] rounded-md 2xl:text-sm text-center font-semibold xl:text-xs">
              Frontend Web Developer
            </div>
          </div>
          <div className="h-[2px] w-full flex items-center bg-[#393939]">
            {/* horizontal line */}
          </div>
          <div className="flex flex-col justify-between items-center 2xl:gap-4 h-[50%] w-full 2xl:p-2 xl:gap-0 xl:p-0" 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}>
            {otherInfo.map((info) => (
              <div className="flex justify-between gap-2 2xl:h-[20%] xl:h-[30%] w-full p-2">
                <div className="flex justify-center items-center h-full w-[20%] bg-[#201f21] border border-[#2a2a2a] rounded-lg">
                  {info.icon}
                </div>
                <div className="flex flex-col w-[80%] justify-between p-[2px]">
                  <div className="2xl:text-xs text-[#b2b2b2] xl:text-[.5rem]">
                    {info.label}
                  </div>
                  <div className={`relative overflow-ellipsis ${isHovered ? '' : 'overflow-hidden'} 2xl:text-xs xl:text-[.5rem]`}>
                    {info.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='shadow-md border border-[#2a2a2a] rounded-3xl w-[80%] min-h-[calc(100%+5rem)] bg-[#1e1e1e] p-[2rem]'>
          {/* replaceable content */}
          80%
        </div>
      </div>
    </div>
  )
}

export default page