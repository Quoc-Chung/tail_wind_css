import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'; 
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState(""); 
  return (
     <div > 
        <header className='w-[1200px] flex gap-10'>
              <div className='flex gap-2 w-[15%] mt-1'> 
                  <img className="w-10 h-10  border-2 rounded-full" src="https://mondialbrand.com/wp-content/uploads/2024/03/anh-anime-0258.jpg"/> 
                  <a href='#' className='text-center  font-bold text-3xl text-blue-500'  >GridBeyond</a>
              </div>
              <div className='w-[60%] mt-3'>
                  <ul className='flex justify-evenly '> 
                    <li >Asset owner FTM </li>
                    <li>Energy user BTM </li>
                    <li>Technology </li>
                    <li>Insights </li>
                    <li>About us </li>
                    <li>Contact us </li>
                    <li>Booking metting </li>
                  </ul>
              </div>
              <div className='w-[15%] flex gap-2'>
                   <FontAwesomeIcon icon={faUser} className="text-blue-500 text-xl mt-3" />
                   <div className="flex relative">
                     <input 
                      type="text"
                      
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      className="border p-2 rounded-3xl h-4/5" // Thêm class Tailwind
                    />
                    <FontAwesomeIcon className='absolute right-3 bottom-[17px]' icon={faSearch}></FontAwesomeIcon>
                   </div>
                   
              </div>
        </header>
        <section className='mt-10'>
            <h2 className='text-2xl text-center'> Out case Study </h2>
            <p className='text-center'> Browse our case studies to see how we’re helping businesses like yours.</p>
            <div className='flex justify-center mt-8 gap-4'>
                <div className='mt-5 relative bg-gray-100 p-2'> 
                    <img  className="w-[400px] h-[250px] " src='https://gridbeyond.com/app/uploads/2022/03/alvance.png'/> 
                    <button className='absolute top-51 left-4 bg-white px-4 py-1  rounded-4xl'> Details </button>
                    <h2 className='text-start py-5 font-bold text-blue-600'>ALVANCE Aluminium Lochaber </h2>
                    <p className='text-start'>"This is a fantaic partnership and one which both benefits the National Grid and enables SIMEC Energy's assets to provide ..."</p>
                    <button className="flex justify-content-start my-3 text-blue-600 "> View Case Study</button>
                </div>
          
                <div className='mt-5 relative bg-gray-100 p-2'> 
                    <img  className="w-[400px] h-[250px] " src='https://gridbeyond.com/app/uploads/2022/03/alvance.png'/> 
                    <button className='absolute top-51 left-4 bg-white px-4 py-1  rounded-4xl'> Details </button>
                    <h2 className='text-start py-5 font-bold text-blue-600'>ALVANCE Aluminium Lochaber </h2>
                    <p className='text-start'>"This is a fantaic partnership and one which both benefits the National Grid and enables SIMEC Energy's assets to provide ..."</p>
                    <button className="flex justify-content-start my-3 text-blue-600 "> View Case Study</button>
                </div>
          
                <div className='mt-5 relative bg-gray-100 p-2'> 
                    <img  className="w-[400px] h-[250px] " src='https://gridbeyond.com/app/uploads/2022/03/alvance.png'/> 
                    <button className='absolute top-51 left-4 bg-white px-4 py-1  rounded-4xl'> Details </button>
                    <h2 className='text-start py-5 font-bold text-blue-600'>ALVANCE Aluminium Lochaber </h2>
                    <p className='text-start'>"This is a fantaic partnership and one which both benefits the National Grid and enables SIMEC Energy's assets to provide ..."</p>
                    <button className="flex justify-content-start my-3 text-blue-600 "> View Case Study</button>
                </div>         
            </div>
          
        </section>
        <footer>

        </footer>
     </div>
  );
}

export default App;

