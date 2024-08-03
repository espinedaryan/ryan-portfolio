import { GoBook as Book } from "react-icons/go";

const Resume = () => {
  return (
    <div className='fade-in-animation flex flex-col gap-6 justify-between items-start w-full'>
      <div className="flex flex-col gap-3 justify-between items-start">
        <h1 className='text-3xl font-bold'>
          Resume
        </h1>
        <div className='h-1.5 w-12 bg-yellow-200 rounded-3xl'></div>
      </div>
      {/* Relevant Experience */}
      <div className='ml-[45px] flex flex-col gap-8'>
        <div className="relative right-14 top-1.5 shadow-sm flex justify-start items-center gap-3">
          <div className="p-4 rounded-xl bg-[#272727]">
            <Book className="text-2xl"/>
          </div>
          <div className="text-2xl font-bold">
            Relevant Experience
          </div>
        </div>
        <div className='relative timeline-item'>
          <h2 className='font-semibold text-[#f2f2f2]'>
            Frontend Web Developer - Intern
          </h2>
          <div className='text-[#afafaf]'>
            Codebility
          </div>
          <span className='text-yellow-200 text-sm'>
            January 2024 - April 2024
          </span>
          <div className="text-[#afafaf] italic mt-1">
            Tech Stacks Used: NextJS, TailwindCSS, TypeScript, Git, GitHub
          </div>
          <div className="text-[#e6e6e6] w-2/3 text-sm mt-1 text-justify">
            Developed responsive components to ensure seamless user experiences by collaborating closely with design and development teams and translating mockups into functional web interfaces while maintaining consistency across devices and browsers.
          </div>
        </div>
        <div className='relative timeline-item'>
          <h2 className='font-semibold text-[#f2f2f2]'>
            Game Developer
          </h2>
          <div className='text-[#afafaf]'>
            Westmead International School (Thesis)
          </div>
          <span className='text-yellow-200 text-sm'>
            October 2023 - April 2024
          </span>
          <div className="text-[#afafaf] italic mt-1">
            Tech Stacks Used: HTML, CSS, JavaScript, Adobe Photoshop, Git, GitHub
          </div>
          <div className="text-[#e6e6e6] w-2/3 text-sm mt-1 text-justify">
            Contributed to the overall game design of a JavaScript learning tool by coding the game logic, developing unique characters, and integrating coding tasks within the tower defense mechanics. Focused on creating an engaging and educational experience, balanced difficulty, and ensured a bug-free game through extensive debugging and testing, while collaborating closely with the team.
          </div>
        </div>
        <div className='relative timeline-item'>
          <h2 className='font-semibold text-[#f2f2f2]'>
            Web Developer - Intern
          </h2>
          <div className='text-[#afafaf]'>
            Innovatto IT Consultancy
          </div>
          <span className='text-yellow-200 text-sm'>
            September 2023 - December 2023
          </span>
          <div className="text-[#afafaf] italic mt-1">
            Tech Stacks Used: NextJS, CSS, TypeScript, Supabase, Git, GitHub
          </div>
          <div className="text-[#e6e6e6] w-2/3 text-sm mt-1 text-justify">
            Implemented user-friendly and visually appealing frontend designs focused on usability and user experience, and collaborated with team members to integrate frontend and backend components for a cohesive and efficient system.
          </div>
        </div>
      </div>
      {/* Education */}
      <div className='ml-[45px] flex flex-col gap-8'>
        <div className="relative right-14 top-1.5 shadow-sm flex justify-start items-center gap-3">
          <div className="p-4 rounded-xl bg-[#272727]">
            <Book className="text-2xl"/>
          </div>
          <div className="text-2xl font-bold">
            Education
          </div>
        </div>
        <div className='relative timeline-item'>
          <h2 className='font-semibold text-[#f2f2f2]'>
            Westmead International School
          </h2>
          <div className='text-[#afafaf]'>
            Alangilan, Batangas City, Batangas
          </div>
          <span className='text-yellow-200 text-sm'>
            2020 - 2024
          </span>
        </div>
        <div className='relative timeline-item'>
          <h2 className='font-semibold text-[#f2f2f2]'>
            Dr. Juan A. Pastor Memorial National High School
          </h2>
          <div className='text-[#afafaf]'>
            Talaibon, Ibaan, Batangas
          </div>
          <span className='text-yellow-200 text-sm'>
            2014 - 2020
          </span>
        </div>
        <div className='relative timeline-item'>
          <h2 className='font-semibold text-[#f2f2f2]'>
            Ibaan Central School
          </h2>
          <div className='text-[#afafaf]'>
            Poblacion, Ibaan, Batangas
          </div>
          <span className='text-yellow-200 text-sm'>
            2013 - 2014
          </span>
        </div>
        <div className='relative timeline-item'>
          <h2 className='font-semibold text-[#f2f2f2]'>
            Our Lady of Grace Formation School
          </h2>
          <div className='text-[#afafaf]'>
            Poblacion, Ibaan, Batangas
          </div>
          <span className='text-yellow-200 text-sm'>
            2008 - 2013
          </span>
        </div>
      </div>
    </div>
  )
}

export default Resume