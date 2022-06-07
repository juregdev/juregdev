import { useGit } from "../../hooks/useGit";

import { LogosReact } from "../../assets/icons/ReactIcon";
import { LogosTailwindcssIcon } from "../../assets/icons/tailwind";
import { LogosTypescriptIcon } from "../../assets/icons/TypescriptIcon";

export function ProfileInitial() {
  const dataApi = useGit()
  const { bio } = dataApi

  return (
    <>
      <div className="absolute right-0 h-full w-1/2 flex flex-col gap-10 justify-center items-center ">

        <div className="flex flex-col w-full justify-center gap-10 group">
          <h1 className="w-full text-justify dark:text-dark-text text-5xl font-bold dark:group-hover:text-white transition-colors ">Filipe Barros</h1>

          <h1 className="w-full text-justify dark:text-dark-text text-5xl font-bold dark:group-hover:text-white transition-colors ">DESENVOLVEDOR FRONT END</h1>

          <h1 id="description" className="pr-[30%] w-full text-justify dark:text-white text-3xl font-bold  transition-colors ">{`${bio}`}</h1>
        </div>

        <div className="w-full flex gap-10 justify-start items-center  ">
          <div className=" flex justify-between items-center group  ">
            <LogosReact className=" w-[80px] h-[80px]  transition-all duration-500 group " />
            <span className="pl-5 overflow-hidden h-full flex items-center text-4xl font-semibold dark:text-dark-text transition-all duration-500 max-w-0 group-hover:max-w-xl" >React</span>
          </div>
          <div className=" flex justify-between items-center group  ">
            <LogosTailwindcssIcon className='h-[80px] w-[80px]' />
            <span className="pl-5 overflow-hidden h-full flex items-center text-4xl font-semibold dark:text-dark-text transition-all duration-500 max-w-0 group-hover:max-w-xl " >Tailwind</span>
          </div>
          <div className=" flex justify-between items-center group h-[80px]  ">
            <LogosTypescriptIcon className='h-[80px] w-[80px]' />
            <span className="pl-5 overflow-hidden h-full flex items-center text-4xl font-semibold dark:text-dark-text transition-all duration-500 max-w-0 group-hover:max-w-xl " >Typescript</span>
          </div>
        </div>
      </div>



    </>)
}