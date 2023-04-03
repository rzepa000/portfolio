import React from "react";
import { RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import userData from "./data";

export default function Hero() {
  const colors = ["#13e5c7", "#0cb79f", "#0b9783","#096155"];
  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">
      {/* Text container */}

      <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={colors[0]}>
            <h1 className="text-4xl md:text-8xl font-bold light:text-gray-700 dark:text-gray-200 my-2">
              Jakub
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[1]}>
            <h1 className="text-4xl md:text-8xl font-bold light:text-gray-700 dark:text-gray-200 my-2">
            Rzepinski
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[2]}>
            <h1 className="text-4xl md:text-8xl font-bold light:text-gray-700 dark:text-gray-200 my-2">
            Web
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[3]}>
            <h1 className="text-4xl md:text-8xl font-bold light:text-gray-700 dark:text-gray-200 my-2">
            Developer
            </h1>
          </RainbowHighlight>
          
        </RoughNotationGroup>
      </div>
      {/* Image container */}
      <div className="hidden lg:block relative md:w-1/2 -mr-20 ">
        <div className="w-3/4 ">
          
            <img src={userData.avatarUrl} alt="avatar" className="bg-gradient-to-b from-teal-500 rounded-full relative mt-10"/>
          
         
        </div>
      </div>
    </div>
  );
}