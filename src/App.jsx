
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Các icon mạng xã hội từ brands
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

// Các icon khác từ solid (user, clock, utensils, play...)
import { faCirclePlay, faUser, faClock, faUtensils } from '@fortawesome/free-solid-svg-icons';


function App() {
  return (
        <div className="w-[1200px] mx-auto bg-gray-300">
          <header className="flex justify-between items-center py-4">
               <div className='w-[20%]'>
                  <h2 className="text-xl font-bold italic ml-[20px]">Foodieland.</h2>
               </div>
               <div className='w-[50%] '>
                    <ul className='flex gap-10 justify-center items-center
                     '>
                      <li className='text-[14px] '>Home</li>
                      <li  className='text-[14px] '>Recipes</li>
                      <li  className='text-[14px] '>Blog</li>
                      <li  className='text-[14px] '>Contact</li>
                      <li  className='text-[14px] '>About us</li>
                    </ul>
               </div>
               <div className='w-[20%] flex justify-center gap-5'>
                    <FontAwesomeIcon  className="text-2xl" icon={faFacebook}></FontAwesomeIcon>
                    <FontAwesomeIcon  className="text-2xl" icon={faTwitter}></FontAwesomeIcon>
                    <FontAwesomeIcon className="text-2xl" icon={faInstagram}></FontAwesomeIcon>
               </div>
          </header>
          <section className='m-8 relative'>
               <div  className='flex mt-10 border-none bg-blue-100 p-3 rounded-4xl h-[500px]'>
                    <div className='w-[40%] mx-2'>
                         
                        <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 mb-4 mt-2.5">
                          <FontAwesomeIcon icon={faUser} />
                          Hot Recipes
                        </button>
                        <h2 className='text-6xl font-bold mb-4'>Spicy delicious     
                         chicken wings</h2>
                        <p className='text-[14px] text-gray-500 '>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim. </p>
                        <div className='flex gap-3 mt-10'>
                           <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-2xl hover:bg-orange-600 text-[14px] text-gray-500">
                            <FontAwesomeIcon icon={faClock} />
                            30 minutes 
                          </button>
                            <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-2xl hover:bg-orange-600 text-[14px] text-gray-500">
                            <FontAwesomeIcon icon={faUtensils} />
                             Chicked 
                          </button>
                           
                             
                        </div>

                        <div className='flex mt-20 gap-20 '> 
                            <div className='flex gap-4'> 
                               <img src="https://mondialbrand.com/wp-content/uploads/2024/03/anh-anime-0258.jpg" className='w-[30px] h-[30px] rounded-full'  />
                               <div>
                                    <h3 className='text-[14px] text-gray-500'>Join Smith</h3>
                                    <p className='text-[14px] text-gray-500'>25 Match 2025</p>
                               </div>
                            </div>
                            <div className='mt-2 flex gap-4 relative'>
                               <button> View Recipes </button>
                               <FontAwesomeIcon className="absolute left-28 top-1.5" icon={faCirclePlay}></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>
                    <div className='w-[55%]'>
                      <img className='h-[480px] ' src="https://img.freepik.com/free-photo/baked-chicken-wings-asian-style-tomatoes-sauce-plate_2829-10653.jpg"/>
                    </div>

                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa5K2zAyQu2NChMj7dOt3oSyVtCvII9Ww0R1XmD96HeKdATWuAZ1afCM2Z274YZ9oEi-0&usqp=CAU" 
                        className="w-[100px] h-[100px] absolute rounded-full left-110 top-10"/> 
                    </div>   
               </div>
              
          </section>
          <section className="mt-20">
              <header className="flex justify-start mx-8">
                   <h2 className="mr-195 text-4xl font-bold ml-3px"> Categorys</h2>
                   <select className=" px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>View all Category</option>
                    <option>Breakfast</option>
                    <option>Lunch</option>
                    <option>Dinner</option>
                    <option>Dessert</option>
                  </select>

              </header>
              <div className="grid grid-cols-6 gap-7 mx-8 my-10">
                  <div className="bg-gray-100 flex flex-col justify-center items-center py-6 px-3 rounded-4xl">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrGjFdt0W26C-giZeGR-i0-mshWsQo5Da1CQ&s" className="w-[100px] h-[120px] mb-4" /> 
                      <h3> Breakfast</h3>
                  </div>
                   <div className="bg-gray-100 flex flex-col justify-center items-center py-6 px-3 rounded-4xl">
                      <img  className="w-[100px] h-[100px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_0MHZQtAsJnfnEskOScWfZMIX7g2NRqTT6YEzhD2bd3Iw_rj7servmqyFnF0UvxqW7jk&usqp=CAU" /> 
                      <h3> Vegan</h3>
                  </div>
                   <div className="bg-gray-100 flex flex-col justify-center items-center py-6 px-3 rounded-4xl">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUjrhb0Cj1MWsB9EHMvZkmAi4Z5E7aGSkWZBAMBcSu8P7YkNo16RnEmG2rG5ZYcDLIbB8&usqp=CAU" className="w-[100px] h-[120px] mb-4" /> 
                      <h3> Meat </h3>
                  </div>
                    <div className="bg-gray-100 flex flex-col justify-center items-center py-6 px-3 rounded-4xl">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwdnwB6LPHbilZJypomo5bhaJRUECEnodS5w&s" className="w-[100px] h-[120px] mb-4" /> 
                      <h3> Dessert</h3>
                  </div>
                    <div className="bg-gray-100 flex flex-col justify-center items-center py-6 px-3 rounded-4xl">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyxRMPwft2f2uMS2nrHFlNTy4mKhXS0P6dlQ&s" className="w-[100px] h-[120px] mb-4" /> 
                      <h3> Lanch</h3>
                  </div>
                    <div className="bg-gray-100 flex flex-col justify-center items-center py-6 px-3 rounded-4xl">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUDgRGkN3wI9k2KKP2r9U9HcpESihdRWIOTg&s" className="w-[100px] h-[120px] mb-4"/> 
                      <h3> Chocolate</h3>
                  </div>
              </div>
           
          </section>

          <foooter >
                 <div className="h-[500px]">

                 </div>
          </foooter>
      </div>
  );
}

export default App;

