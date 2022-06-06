import { ToggleSwitch } from "../Toggle/ToggleSwitch";


export function Header() {


  return (
    <>
      <header className='fixed w-full flex justify-center h-16 z-50'>
        <nav className=' w-full max-w-2xl flex justify-around items-center text-2xl  text-gray-500 dark:text-dark-text '>
          <button className='flex justify-center items-center overflow-hidden relative h-full py-2 hover:text-black dark:hover:text-white font-semibold transition after:border-b-2 dark:after:border-dark-text after:border-black after:w-full after:absolute after:bottom-0 after:left-[100%] after:duration-300 before:duration-300 hover:after:left-0  after:transition-[left] before:border-b-2 dark:before:border-dark-text before:border-black before:w-full before:absolute before:bottom-0 before:left-[-100%] hover:before:left-0  before:transition-[left]'>Home</button>

          <button className='flex justify-center items-center overflow-hidden relative h-full py-2 hover:text-black dark:hover:text-white font-semibold transition after:border-b-2 dark:after:border-dark-text after:border-black after:w-full after:absolute after:bottom-0 after:left-[100%] after:duration-300 before:duration-300 hover:after:left-0  after:transition-[left] before:border-b-2 dark:before:border-dark-text before:border-black before:w-full before:absolute before:bottom-0 before:left-[-100%] hover:before:left-0  before:transition-[left]'>About me</button>

          <button className='flex justify-center items-center overflow-hidden relative h-full py-2 hover:text-black dark:hover:text-white font-semibold transition after:border-b-2 dark:after:border-dark-text after:border-black after:w-full after:absolute after:bottom-0 after:left-[100%] after:duration-300 before:duration-300 hover:after:left-0  after:transition-[left] before:border-b-2 dark:before:border-dark-text before:border-black before:w-full before:absolute before:bottom-0 before:left-[-100%] hover:before:left-0  before:transition-[left]'>Projects</button>
          <div className='absolute right-6'>
            <ToggleSwitch />
          </div>
        </nav>
      </header>
    </>
  )
}