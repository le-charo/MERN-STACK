import React from 'react'

export default function Header() {
  return (
    <header className='bg-green-300 pr-8 pl-8 text-center ' > 
        <navbar className='flex gap-10   '  >
            <div>
                <h1 className=''>logo <span className='text-4xl font-bold text-black sm:text-3xl md:text-orange-400  lg:text-5xltext-gray-950'>com</span></h1>
            </div>
            <div>
                    
                  <div>
                    <ul className='flex gap-2'>
                            <li><a href="Home.html">home</a></li>
                            <li><a href="ride.html">Ride</a></li>
                            <li><a href="Drive.html">Drive</a></li>
                            <li >
                               <label className="dropdown">
                                  <a>About <i className="fas fa-caret-down"></i></a>
                                 </label>
                                 <input type="checkbox" name="dropdown" id="dropdown"/>

                                <div className="hidden">
                                    <ul>
                                        <li><a href="about.html">About us</a></li>
                                        <li><a href="services.html">Services</a></li>
                                        <li><a href="vehicles.html">vehicles</a></li>
                                        <li><a href="pricing.html">pricings</a></li>
                                        <li><a href="cariers.html">cariers</a></li>
                                        <li><a href="others.html">others</a></li>
                                    </ul>
                                </div>
                            </li>
                            
                     </ul>

                  </div>
                    
                </div>

                {/* <!-- second menu links --> */}

                 <div className=" ">
                   <div className="nav-menu-links2">
                     <ul className='flex gap-4'>
                        <li><a href="support.html">support</a></li>
                        <li><a href="contact.html">call us</a></li>
                        <li><a href="./signin.html">login</a>

                           <div className="hidden">
                              <button className="user-type " id="driverBtn">Driver</button>
                              <button className="user-type" id="courierBtn">Courier</button>
                              <button className="user-type" id="businessBtn">Business Owner</button>
                              <button className="user-type" id="riderBtn">Rider</button>
                          </div>
                        </li>
                        <li><a href="../html/sign-up.html" target="_blank"><button>Sign up</button></a></li>
                     </ul>
                   </div>
              </div>
           
           
        
                
            
        </navbar>
    </header>
  )
}
