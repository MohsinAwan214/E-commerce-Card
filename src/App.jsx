
import './App.css'
import gamepadimage from './assets/game.png'
import socalIcon from './assets/Frame 575.png'
import { IoStarSharp } from "react-icons/io5";

function App() {
  

  return (
    <div className=' h-[350px] w-[270px]  truncate relative'>
     <div className='whiteSmoke rounded h-[250px] w-[270px] relative flex justify-center items-center '>
      <img className='absolute right-3 top-4' src={socalIcon} alt="" />         
      <div className='discount rounded h-[26px] w-[55px] flex justify-center items-center absolute left-3 top-3 text-[12px] '>-40%</div>   
      <div className="flex justify-center items-center  h-[180px] w-[190px]">
      <div className="flex justify-center items-center h-[152px] w-[172px] align-middle">
      <img className='' src={gamepadimage} alt="" />
      </div>
      </div>
    </div>
<div className='h-[84px] w-[201px]  mt-4 '>
<h1 className=' font-medium leading-6 h-6 w-[201]'>HAVIT HV-G92 Gamepad</h1>
<p className='pt-1 h-6 w-[85px]  ' >
  <span className='price mr-3 font-medium	'>$120</span>
  <del>
  <span className='del font-medium'>$160</span>
  </del>
</p>
<div className=" pt-2 flex h-5 w-[140px]">
  <IoStarSharp className='h-5 w-5 rounded-xl'/>
  <IoStarSharp  className='h-5 w-5 rounded-xl'/>
  <IoStarSharp  className='h-5 w-5 rounded-xl'/>
  <IoStarSharp  className='h-5 w-5 rounded-xl'/>
  <IoStarSharp  className='h-5 w-5 rounded-xl'/>
  <span className='lead font-semibold text-[20px] leading-5'>
    <span>(88)</span>
    </span>
</div>
</div>

    </div>
  )
}

export default App
