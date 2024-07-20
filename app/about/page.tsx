import { GoCodeReview as WebDeveloper } from "react-icons/go";
import { SiAdobepremierepro as PremierePro } from "react-icons/si";
import { DiPhotoshop as Photoshop } from "react-icons/di";
import { IoGameControllerOutline as Gaming } from "react-icons/io5";

import Image from "next/image";

const About = () => {
  const WhatImDoing = [
    {
      icon: <WebDeveloper className="text-4xl text-yellow-200" />,
      label: 'Frontend Web Development',
      value: 'Build and design the user interface and experience of websites and web applications.'
    },
    {
      icon: <PremierePro className="text-4xl text-yellow-200" />,
      label: 'Film Editing',
      value: 'Cuts and assembles video footage, adding effects and sound to enhance the final story.'
    },
    {
      icon: <Photoshop className="text-4xl text-yellow-200" />,
      label: 'Graphic Designing',
      value: 'Creates visual content like logos and layouts to communicate ideas effectively.'
    },
    {
      icon: <Gaming className="text-4xl text-yellow-200" />,
      label: 'Gaming',
      value: 'Plays and explores video games to enjoy immersive experiences and achieve in-game goals.'
    }
  ]

  const Testimonials = [
    {
      img: '/img/sir-ben.jpg',
      name: 'Ben Louie Casapao',
      value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nulla voluptate architecto! Nam, soluta!'
    },
    {
      img: '/img/sir-zeff.jpg',
      name: 'Zeff Somers',
      value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nostrum omnis earum dolore nisi?'
    }
  ]

  return (
    <div className='flex flex-col gap-6 justify-between items-start'>
      <div className="flex flex-col gap-3 justify-between items-start">
        <h1 className='text-3xl font-bold'>
          About Me
        </h1>
        <div className='h-1.5 w-12 bg-yellow-200'></div>
      </div>
      <div className="text-[#b2b2b2] text-justify">
        I'm an aspiring web developer passionate about creating awesome digital experiences. Proficient in HTML, CSS, JavaScript, React.js and Next.js, I thrive on solving problems and paying attention to the nitty-gritty details.
        <br />
        <br />
        I'm always eager to learn and stay updated on the latest tech trends. With a collaborative spirit and a growth mindset, I'm excited to contribute my skills to innovative projects and continue my journey in the ever-evolving world of web development.
      </div>
      <h2 className='text-xl font-bold mt-4'>
        What I'm Doing
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {/* A reusable component */}
        { WhatImDoing.map((doing) => (
          <div className="flex justify-between gap-3 p-4 rounded-lg shadow-md bg-[#171717]">
            { doing.icon }
            <div className="flex flex-col gap-2">
              <div className="font-semibold text-lg">
                { doing.label }
              </div>
              <div className="text-[#b2b2b2] text-justify text-sm">
                { doing.value }
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2 className='text-xl font-bold mt-4'>
        Testimonials
      </h2>
      <div className="grid grid-cols-3 gap-3 gap-y-6 w-full">
        {/* To be mapped */}
        { Testimonials.map((review) => (
          <div className="relative flex justify-between gap-3 p-6 pt-12 rounded-lg shadow-md bg-[#171717] mt-4">
            <div className="absolute left-6 top-[-1.5rem] h-16 w-16 flex justify-between items-end gap-4">
              <Image
                src={ review.img }
                alt="Sir Ben"
                width={500}
                height={400}
                className="w-full rounded-2xl object-cover shadow-sm"
              />
              <div className="font-semibold text-nowrap">
                { review.name }
              </div>
            </div>
            <div className="text-[#b2b2b2] text-justify text-sm">
              { review.value }
            </div>
          </div>
        )) }
      </div>
    </div>
  )
}

export default About