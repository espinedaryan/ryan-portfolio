'use client'

import { GoCodeReview as WebDeveloper } from "react-icons/go";
import { SiAdobepremierepro as PremierePro } from "react-icons/si";
import { DiPhotoshop as Photoshop } from "react-icons/di";
import { IoGameControllerOutline as Gaming, IoClose as CloseButton } from "react-icons/io5";
import { FaFacebookF as Facebook, FaAmazon as Amazon, FaApple as Apple, FaGoogle as Google, FaMicrosoft as Microsoft, } from "react-icons/fa";
import { RiNetflixFill as Netflix, RiDoubleQuotesL as DoubleQuotes } from "react-icons/ri";

import Image from "next/image";
import { useState } from "react";

const About = () => {
  interface Review {
    img: string,
    name: string;
    position: string;
    value: string;
  }

  const [selectedReview, setSelectedReview] = useState<Review>()

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
      position: 'CTO - Innovatto IT Consultancy',
      value: 'Ryan was hired to create a corporate identity. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.'
    },
    {
      img: '/img/sir-zeff.jpg',
      name: 'Zeff Somers',
      position: 'CEO/Founder - Codebility',
      value: 'Ryan was hired to create a corporate identity. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.'
    },
    {
      img: '/img/sir-ben.jpg',
      name: 'Ben Louie Casapao',
      position: 'CTO - Innovatto IT Consultancy',
      value: 'Ryan was hired to create a corporate identity. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.'
    },
    {
      img: '/img/sir-zeff.jpg',
      name: 'Zeff Somers',
      position: 'CEO/Founder - Codebility',
      value: 'Ryan was hired to create a corporate identity. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.'
    },
    {
      img: '/img/sir-ben.jpg',
      name: 'Ben Louie Casapao',
      position: 'CTO - Innovatto IT Consultancy',
      value: 'Ryan was hired to create a corporate identity. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.'
    },
    {
      img: '/img/sir-zeff.jpg',
      name: 'Zeff Somers',
      position: 'CEO/Founder - Codebility',
      value: 'Ryan was hired to create a corporate identity. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.'
    },
  ]

  const Clients = [
    {
      icon: <Facebook />,
      name: 'Facebook'
    },
    {
      icon: <Amazon />,
      name: 'Amazon'
    },
    {
      icon: <Apple />,
      name: 'Apple'
    },
    {
      icon: <Netflix />,
      name: 'Netflix'
    },
    {
      icon: <Google />,
      name: 'Google'
    },
    {
      icon: <Microsoft />,
      name: 'Microsoft'
    },
    {
      icon: <Netflix />,
      name: 'Netflix'
    },
    {
      icon: <Microsoft />,
      name: 'Microsoft'
    },
    {
      icon: <Netflix />,
      name: 'Netflix'
    },
    {
      icon: <Microsoft />,
      name: 'Microsoft'
    }
  ]

  return (
    <div className='flex flex-col gap-6 justify-between items-start w-full'>
      <div className="flex flex-col gap-3 justify-between items-start">
        <h1 className='text-3xl font-bold text-[var(--text-header)]'>
          About Me
        </h1>
        <div className='h-1.5 w-12 bg-yellow-200'></div>
      </div>
      <div className="text-[var(--text-main)] text-justify">
        I'm an aspiring web developer passionate about creating awesome digital experiences. Proficient in HTML, CSS, JavaScript, React.js and Next.js, I thrive on solving problems and paying attention to the nitty-gritty details.
        <br />
        <br />
        I'm always eager to learn and stay updated on the latest tech trends. With a collaborative spirit and a growth mindset, I'm excited to contribute my skills to innovative projects and continue my journey in the ever-evolving world of web development.
      </div>
      <h2 className='text-xl font-bold mt-4 text-[var(--text-header)]'>
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
              <div className="text-[var(--text-main)] text-justify text-sm">
                { doing.value }
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2 className='text-xl font-bold mt-4 text-[var(--text-header)]'>
        Testimonials
      </h2>
      <div className="flex justify-start items-center gap-3 w-full overflow-x-auto">
        {/* To be mapped "Testimonials" */}
        { Testimonials.map((review) => (
          <div className="relative flex flex-shrink-0 justify-between gap-3 p-6 pt-16 rounded-lg shadow-md bg-[#171717] w-full mt-6 xl:w-1/2 2xl:w-1/3 mb-10 cursor-pointer hover:opacity-80"
            onClick={() => selectedReview ? '' : setSelectedReview(review)}>
            <div className="absolute left-6 top-[-1rem] h-16 w-16 flex justify-between items-end gap-4">
              <Image
                src={ review.img }
                alt="Sir Ben"
                width={500}
                height={400}
                className="w-full rounded-2xl object-cover shadow-sm"
              />
              <div className="flex flex-col">
                <div className="font-semibold text-nowrap text-sm">
                  { review.name }
                </div>
                <div className="text-xs text-[#afafaf] text-nowrap">
                  { review.position }
                </div>
              </div>
            </div>
            <div className="text-[var(--text-main)] text-justify text-sm whitespace-pre-wrap line-clamp-2">
              { review.value }
            </div>
            {/* Modal */}
            <div className={`${selectedReview ? '' : 'hidden'} fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-screen w-screen bg-black opacity-15`}>  {/* Darken Background */}

            </div>
            <div className={`${selectedReview ? '' : 'hidden'} flex flex-col gap-3 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-2xl p-7 w-[30%] bg-[#2a2a2a]`}>
              {/* Display the clicked review */}
              <CloseButton className="absolute top-2 right-2 p-1 bg-[#1d1d1d] rounded-md text-[var(--text-main)] hover:text-white hover:bg-[#3e3e3e] text-base h-8 w-8" onClick={() => setSelectedReview(undefined)} />
              <div className="flex gap-8">
                <Image
                  src={ selectedReview?.img || '' }   // if selectedReview.img is not defined yet, then it will be assinged '' which is a string
                  alt={ selectedReview?.name || '' }  // to avoid errors, because src and alt both expects a string.
                  width={500}
                  height={400}
                  className="w-16 rounded-2xl object-cover shadow-sm"
                />
                <div className="flex flex-col gap-2">
                  <div className="text-[var(--text-main)] font-semibold text-2xl">
                    { selectedReview?.name }
                  </div>
                  <div className="text-[#afafaf] text-sm">
                    { selectedReview?.position }
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-8 overflow-y-auto">
                <div>
                  <DoubleQuotes className="text-[4rem] text-yellow-200" />
                </div>
                <div className="text-[var(--text-main)] text-justify">
                  { selectedReview?.value }
                </div>
              </div>
            </div>
          </div>
        )) }
      </div>
      <h2 className="text-xl font-bold mt-4 text-[var(--text-header)]">
        Clients
      </h2>
      <div className="flex justify-start items-center gap-6 w-full overflow-x-auto">
        {/* To be mapped "Clients" */}
        { Clients.map((client) => (
          <div className="flex justify-between items-center gap-2 w-1/8 p-6 rounded-2xl bg-[#2a2a2a] shadow-sm mb-12">
            <div className="text-4xl">
              { client.icon }
            </div>
            <div className="font-semibold text-lg">
              { client.name }
            </div>
          </div>
        )) }
      </div>
    </div>
  )
}

export default About