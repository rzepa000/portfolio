import React from "react";
import userData from "./data";
import { AiFillGithub } from 'react-icons/ai';
import Link from "next/link";


export default function Projects() {
  return (
    <section className="light:bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 light:bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Projects
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="light:bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
          {userData.projects.map((proj, idx) => (
            <ProjectCard
              title={proj.title}
              link={proj.link}
              repolink={proj.repolink}
              imgUrl={proj.imgUrl}
              number={`${idx + 1}`}
            />
            
          ))}
        </div>
      </div>
    </section>
  );
}


  
  
const ProjectCard = ({ title, link, repolink, imgUrl, number}) => {
  return (
    <Link href={link} passHref={true}>
    <section className="w-full block shadow-2xl">
    
      
    
      <div className="rounded relative overflow-hidden">
      
             
  <Link href={repolink} passHref={true}>
        <button  
        className="mr-5 absolute bottom-5 right-0 z-10 bg-red-500 hover:bg-gray-300 border border-black text-black font-bold py-3 px-6 rounded-md"
        >
        <AiFillGithub/>
        </button>
      </Link>
        
      
         <div className="h-72 object-cover">
          <img
            src={imgUrl}
            alt="portfolio"
            className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
          />
        </div>
        <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
          {title}
        </h1>
        <h1 className="absolute bottom-10 left-10 text-gray-500 font-bold text-xl">
          {number.length === 1 ? "0" + number : number}
        </h1>
      </div>
    
    
    </section>
    </Link>
  );
};