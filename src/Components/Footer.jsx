// import React from 'react'
// import Twitter from '../assets/logos/twitter.png'
// import Youtube from '../assets/logos/youtube.png'
// import Facebook from '../assets/logos/facebook.png'
// import Instagram from '../assets/logos/instagram.png'

// const Footer = () => {
    
//   return (
//     <>
//     <div className='bg-gray-900 max:w-full max:h-[250px] lg:w-[80%] md:w-[50%] sm:w-[35] text-white'>
//       <div className='bg-black/70 h-[250px] w-full p-2'>
//       <div className='flex justify-between w-[50px] h-[35px] '>
//         <img className='px-2 m-1' src={Facebook} alt="Facebook" />
//         <img className='px-2 m-1' src={Instagram} alt="Instagram" />
//         <img className='px-2 m-1' src={Twitter} alt="Twitter" />
//         <img className='px-2 m-1' src={Youtube} alt="Youtube" />
//       </div>
//       <div className='flex m-3 font-sans p-2 text-md  text-gray-500'>
//         <div className='flex-row mr-10 mb-4 '>
//           <p>Audio Description</p>
//           <p>Investor Relations</p>
//           <p>Legal Notices</p>
//         </div>
//         <div className='border border-gray-400'/>
//         <div className='flex-col ml-10 mr-6 mb-4 '>
//           <p>Help Center</p>
//           <p>Jobs</p>
//           <p>Cookie Preferences</p>
//         </div>
//         <div className='border border-gray-400'/>
//         <div className='flex-col ml-10 mr-6 mb-4 '>
//           <p>Gift Cards</p>
//           <p>Terms and Services</p>
//           <p>Corporate Information</p>
//         </div>
//         <div className='border border-gray-400'/>
//         <div className='flex-col ml-10 mr-6 mb-4 '>
//           <p>Media Centre</p>
//           <p>Privacy</p>
//           <p>Contact Us</p>
//         </div>
//       </div>
//       <div className='container my-10 text-center text-gray-400'>
//         <p className='text-sm'>
//           &copy; {new Date().getFullYear()} Your Company. All rights reserved.
//         </p>
//       </div>
//       </div>
//     </div>
//     </>
//   )
// }

// export default Footer

import React from 'react';
import Twitter from '../assets/logos/twitter.png';
import Youtube from '../assets/logos/youtube.png';
import Facebook from '../assets/logos/facebook.png';
import Instagram from '../assets/logos/instagram.png';

const Footer = () => {
  return (
    <div className='bg-gray-900 w-full text-white py-8'>
      <div className='bg-black/70 w-full px-4 py-8'>
        <div className='flex justify-center space-x-4 mb-6'>
          <img className='w-6 h-6' src={Facebook} alt="Facebook" />
          <img className='w-6 h-6' src={Instagram} alt="Instagram" />
          <img className='w-6 h-6' src={Twitter} alt="Twitter" />
          <img className='w-6 h-6' src={Youtube} alt="Youtube" />
        </div>
        <div className='flex flex-wrap justify-center space-x-10 text-center text-gray-400 text-sm'>
          <div className='mb-4 w-full md:w-auto'>
            <p>Audio Description</p>
            <p>Investor Relations</p>
            <p>Legal Notices</p>
          </div>
          <div className='border-l border-gray-400 h-12 hidden md:block'/>
          <div className='mb-4 w-full md:w-auto'>
            <p>Help Center</p>
            <p>Jobs</p>
            <p>Cookie Preferences</p>
          </div>
          <div className='border-l border-gray-400 h-12 hidden md:block'/>
          <div className='mb-4 w-full md:w-auto'>
            <p>Gift Cards</p>
            <p>Terms and Services</p>
            <p>Corporate Information</p>
          </div>
          <div className='border-l border-gray-400 h-12 hidden md:block'/>
          <div className='mb-4 w-full md:w-auto'>
            <p>Media Centre</p>
            <p>Privacy</p>
            <p>Contact Us</p>
          </div>
        </div>
        <div className='text-center text-gray-400 mt-4'>
          <p className='text-sm'>
            &copy; {new Date().getFullYear()} Netflix-Clone. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
