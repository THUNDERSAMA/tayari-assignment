
"use client"
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import Image from 'next/image';
import { useState } from 'react';
export default function Home() {
  const [changeBookmark, setChangeBookmark] = useState(true);
  const [showsoln, setShowsoln] = useState(false);
  const changeIcon = changeBookmark === true ? false : true;
  const grid1="grid grid-cols-1 gap-4  h-screen";
  const grid2="grid grid-cols-2 gap-4  h-screen";
  return (
    <div className="container mx-auto h-full">
     
      <div className={showsoln ?grid2:grid1}>
        <div className='shadow-xl'>
  <div className="pl-4 pt-6 pr-4">
    <div className="flex flex-col">
<div className="flex flex-row">
<p className="font-bold">Question 1</p>
<span className="icon"
                 onClick={() => {
                    setChangeBookmark(changeIcon);
                 }}
              >
                 {changeBookmark ? <BookmarkBorderIcon className='ml-2'/> : <BookmarkIcon className='ml-2'/>
}
              </span>

</div>
<div className="text-wrap">
  <p>New Yorkers are facing the winter chill with less warmth this year as the city's most revered soup stand unexpectedly shutters, following a series of events that have left the community puzzled.</p>
</div>
<div className="flex flex-row">
  <Image src="data:image/png;base64,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" alt='question image' width="0" height="0"
       sizes="100vw"
       className="w-auto h-auto"></Image>
</div>
{/* option select */}


<ul className="grid w-full gap-6 md:grid-cols-2 mt-12">
  <li>
  <input type="checkbox" id="a" value="" className="hidden peer" required />
  <label htmlFor="a" className="inline-flex items-center justify-between w-full p-2 text-black border-2 shadow-xl rounded-lg cursor-pointer   peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-black peer-checked:text-black hover:bg-gray-300 dark:text-black ">       
       <div className="block">
                <div className="w-full text-sm">A JavaScript library for building user interfaces.</div>
            </div>
        </label>
  </li>
  <li> <input type="checkbox" id="b" value="" className="hidden peer" required />
  <label htmlFor="b" className="inline-flex items-center justify-between w-full p-2 text-black border-2 shadow-xl rounded-lg cursor-pointer   peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-black peer-checked:text-black hover:bg-gray-300 dark:text-black ">       
       <div className="block">
                <div className="w-full text-sm">A JavaScript library for building user interfaces.</div>
            </div>
        </label></li>
  <li > <input type="checkbox" id="c" value="" className="hidden peer" required />
  <label htmlFor="c" className="inline-flex items-center justify-between w-full p-2 text-black border-2 shadow-xl rounded-lg cursor-pointer   peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-black peer-checked:text-black hover:bg-gray-300 dark:text-black ">       
       <div className="block">
                <div className="w-full text-sm">A JavaScript library for building user interfaces.</div>
            </div>
        </label></li>
  <li> 
    <input type="checkbox" id="d" value="" className="hidden peer" required />
  <label htmlFor="d" className="inline-flex items-center justify-between w-full p-2 text-black border-2 shadow-xl rounded-lg cursor-pointer   peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-black peer-checked:text-black hover:bg-gray-300 dark:text-black ">       
       <div className="block">
                <div className="w-full text-sm">A JavaScript library for building user interfaces.</div>
            </div>
        </label>
        </li>
</ul>
{/* radio option */}
<ul className="grid w-full gap-6 md:grid-cols-2 mt-12">
    <li>
        <input type="radio" id="ca" name="hosting" value="hosting-small" className="hidden peer" required />
        <label htmlFor="ca" className="inline-flex items-center justify-between w-full p-2 text-black border-2 shadow-xl rounded-lg cursor-pointer   peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-black peer-checked:text-black hover:bg-gray-300 dark:text-black">                           
            <div className="block">
                <div className="w-full">Good for small websites</div>
            </div>
            
        </label>
    </li>
    <li>
        <input type="radio" id="cb" name="hosting" value="hosting-small" className="hidden peer" required />
        <label htmlFor="cb" className="inline-flex items-center justify-between w-full p-2 text-black border-2 shadow-xl rounded-lg cursor-pointer   peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-black peer-checked:text-black hover:bg-gray-300 dark:text-black">                           
            <div className="block">
              
                <div className="w-full">Good for small websites</div>
            </div>
          
        </label>
    </li>
    <li>
        <input type="radio" id="cc" name="hosting" value="hosting-small" className="hidden peer" required />
        <label htmlFor="cc" className="inline-flex items-center justify-between w-full p-2 text-black border-2 shadow-xl rounded-lg cursor-pointer   peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-black peer-checked:text-black hover:bg-gray-300 dark:text-black">                           
            <div className="block">
                
                <div className="w-full">Good for small websites</div>
            </div>
           
        </label>
    </li>
    <li>
        <input type="radio" id="cd" name="hosting" value="hosting-small" className="hidden peer" required />
        <label htmlFor="cd" className="inline-flex items-center justify-between w-full p-2 text-black border-2 shadow-xl rounded-lg cursor-pointer   peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-black peer-checked:text-black hover:bg-gray-300 dark:text-black">                           
            <div className="block">
               
                <div className="w-full">Good for small websites</div>
            </div>
           
        </label>
    </li>
    </ul>
<div className="flex justify-between mt-12">
  <div>
  <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 flex flex-row gap-2"><svg className="w-5 h-5 ms-3 rtl:rotate-180" transform='rotate(180)' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg> previous </button>

  </div>
  <div className='flex flex-row gap-px'>
  <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 " 
  onClick={() => {
                    setShowsoln(!showsoln);
                 }}>Check solution</button>

    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit answer</button>
  </div>
  <div>
    <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 flex flex-row ">skip  <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg></button>
</div>
</div>
    </div>
  </div>
  </div>
  
  {showsoln ? 
  <div className='shadow-xl'> 
     <div className="pl-4 pt-6 pr-4">
     <div className="flex flex-col">
<div className="flex flex-row">
<p className="font-semibold">Answer</p>
</div>
<div className="flex flex-row mt-6">
<div className="bg-cyan-300 pt-1 pb-1 pl-4 pr-4 rounded-md">
<p className="font-semibold">Answer</p>
</div>
</div>
<div className="flex flex-row mt-24">
 <Image src="data:image/png;base64,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"
  alt='question image' width="0" height="0"
       sizes="100vw"
       style={{ width: '100%', height: 'auto' }}></Image>
</div>
</div>
</div>
</div> : null}
</div>
        
      

     

      
    </div>
  );
}
