import React from "react";
import userData from "./data";
import { AiFillGithub } from 'react-icons/ai';
import Link from "next/link";

  export default function Gitbutton(repolink) {
    return (
      
        <div>
          <Link href={repolink} passHref={true}>
          <button  
          className="mr-5 absolute bottom-5 right-0 z-10 bg-red-500 hover:bg-gray-300 border border-black text-black font-bold py-3 px-6 rounded-md"
          >
          <AiFillGithub/>
          </button>
        </Link>
        </div>
      
    );
  }