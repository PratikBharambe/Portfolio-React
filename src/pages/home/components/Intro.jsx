// import React from 'react'

// function Intro() {
//   return (
//     <>
//         <div className='mt-[120px]'>
//             <div className="items-center m-auto pt-16 justify-between p-4 h-16 w-[90%] text-[1.5rem]">
//                 <div className='text-[#28be2d] m-2'>Hello, My Name is</div>
//                 <div className='font-tangerine text-8xl pt-4 pb-4'>Pratik <span className='text-[#30fb37]'>Bharambe</span></div>
//                 <div className='m-2'> I'm Full Stack Developer</div>
//             </div>
//         </div>
//     </>
//   )
// }

// export default Intro

import React from 'react';

function Intro() {
  return (
    <div className="mt-[120px] sm:mt-[100px]">
      <div className="items-center m-auto pt-8 sm:pt-16 justify-between p-4 h-16 w-[90%] text-[1.5rem] sm:text-[1.8rem]">
        <div className="text-[#28be2d] m-2 text-center sm:text-left">Hello, My Name is</div>
        <div className="font-tangerine text-6xl sm:text-8xl pt-4 pb-4 text-center sm:text-left">
          Pratik <span className="text-[#30fb37]">Bharambe</span>
        </div>
        <div className="m-2 text-center sm:text-left">I'm a Full Stack Developer</div>
      </div>
    </div>
  );
}

export default Intro;
