import './App.css'
import logo1 from './assets/images/logo1.png';
import nen from './assets/images/nen.png';
import {faUser, faCartShopping, faHeart, faSearch} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
      <div className='mw-1200 mx-auto bg-gray-100'> 
        <header className='flex w-[100%] h-[70px] justify-between '>
           <div className='flex items-center'>
               <img src={logo1} className='w-[60px] h-[60px]  rounded-full'></img>
               <h2 className='text-3xl font-bold'> Furniro </h2>
           </div>
           <div className='flex items-center justify-center'>
                 <ul className='flex gap-14 '>
                      <li>Home</li>
                      <li>Shop</li>
                      <li>About</li>
                      <li>Contact</li>
                 </ul>
           </div>
           <div className='flex gap-5 items-center mr-10'> 
              <FontAwesomeIcon icon={faUser} className='icon' />  
              <FontAwesomeIcon icon={faSearch} className='icon' />      
              <FontAwesomeIcon icon={faCartShopping} className='icon' />
              <FontAwesomeIcon icon={faHeart} className='icon' />
           </div>
        </header> 
        <section className='w-[100%] h-[500px] relative'>
            <img src={nen}  className='w-full h-[500px] object-cover'/>
            <div className="flex flex-col justify-start items-start gap-1 px-5 py-15 absolute top-25 right-9 bg-[#fff3e3] w-[45%] h-[300px] ">
                 <h3> New Arrival </h3>
                 <div className='flex flex-col justify-start items-start gap-0.4'>
                         <h1 className='text-4xl font-bold text-[#b98e2f]'>Discover Our </h1>
                        <h1 className='text-4xl font-bold text-[#b98e2f]'>New Collection </h1>
                 </div>
                 <p className="text-justify leading-relaxed text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id commodi impedit velit excepturi dolores accusantium 
                nisi cumque aspernatur.
              </p>
              <button className='bg-[#b98e2f] border-none px-6 py-1.5 mt-2 mb-10'> BUY NOW </button>
            </div>
        </section>    
        <section className='w-[100%] h-[500px] bg-white mt-10'>
              <h1 className="text-center text-4xl font-bold"> Browse The Range </h1>
              <p className="text-center text-[16px] mb-10 "> Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
              <div class="grid grid-cols-3 gap-5"> 
                   <div> 
                        <img src="https://plus.unsplash.com/premium_photo-1661962407725-b56c434a9dc5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2ltcGxlJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D" alt="Furniture" 
                        className='w-full h-[200px] object-cover' />       
                        <h2> Living Room </h2>
                   </div>
                    <div> 
                        <img src="https://plus.unsplash.com/premium_photo-1661962407725-b56c434a9dc5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2ltcGxlJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D" alt="Furniture" 
                        className=' w-full h-[200px] object-cover' />       
                        <h2> Bed Room </h2>
                   </div>
                    <div> 
                        <img src="https://plus.unsplash.com/premium_photo-1661962407725-b56c434a9dc5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2ltcGxlJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D" alt="Furniture" 
                        className='w-full h-[200px] object-cover' />       
                        <h2> Living Room </h2>
                   </div>
              </div>
        </section>
      </div>
  );
}

export default App;

