import React from 'react'

import { Link } from 'react-router-dom';


const SectionHome1 = () => {

  return (
    <>
 <section className="relative mt-8 px-4 md:px-8 font-sans">
  <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-3">

    {/* Left big image */}
    <Link to={"/women"} className="relative w-full md:w-[70%] rounded-2xl overflow-hidden max-h-[600px]">
      <img
        src="https://ik.imagekit.io/wwa3eee1kw/young-people-standing-looking-different-direction.jpg"
        alt="Main Visual"
        className="w-full h-full object-cover rounded-2xl"
      />

      {/* Text Overlay */}
     {/* Centered Text Overlay */}
<div className="absolute inset-0 z-10 flex items-center justify-center">
  <div className="text-white text-center px-6 md:px-10">
    <p className="text-2xl sm:text-5xl md:text-6xl font-semibold leading-tight md:leading-[3.2rem]">
      Color Of  Summer  Outfit
    </p>
    <button className="mt-4 sm:px-6 sm:py-2 py-2 px-4 bg-[#E5C870] text-[#02066F] rounded-full shadow-lg text-sm md:text-base">
      Shop the Look →
    </button>
  </div>
</div>


      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0 rounded-2xl" />
    </Link>

    {/* Right stacked cards */}
    <div className="flex sm:flex-col  flex-row sm:gap-3 gap-2 w-full md:w-[30%]">
      {/* Card 1 */}
     {/* Card 1 (background image) */}
<Link
  to="/men"
  className="relative  rounded-2xl sm:w-full w-[40%] h-[240px] sm:h-[260px] text-white bg-no-repeat bg-cover bg-center md:bg-right"
  style={{
    backgroundImage:
      "url(https://ik.imagekit.io/wwa3eee1kw/pohotojgot.jpg?updatedAt=1755978312092)"
  }}
  aria-label="Naturally Styled"
>
  {/* Bottom gradient for contrast */}
  <div className="absolute inset-0 bg-gradient-to-t from-[#1B2559]/80 via-[#1B2559]/30 to-transparent" />

  {/* Bottom text */}
  <div className="absolute inset-0 z-10 flex items-end">
    <p className="w-full px-4 sm:px-6 pb-4 sm:pb-6 text-2xl sm:text-5xl font-semibold leading-6 sm:leading-[2.75rem] drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
      Naturally<br />Styled
    </p>
  </div>
</Link>



      {/* Card 2 */}
    <Link
  to="/men"
  className="relative overflow-hidden rounded-2xl h-[240px] w-[60%] sm:w-full sm:h-[325px] text-white bg-[#1B2559] bg-no-repeat bg-cover bg-center md:bg-right"
  style={{ backgroundImage: `url(https://ik.imagekit.io/wwa3eee1kw/woman-with-shopping-bags-studio-yellow-background-isolated.jpg)` }}
  aria-label="Casual Comfort"
>
  {/* Bottom fade for contrast */}
  <div className="absolute inset-0 bg-gradient-to-t from-[#1B2559]/85 via-[#1B2559]/40 to-transparent" />

  {/* Text block pinned bottom-left */}
  <div className="absolute inset-0 flex items-end">
    <h2 className="z-10 px-4 sm:px-6 pb-4 sm:pb-6 text-3xl sm:text-5xl font-semibold leading-[1.15]">
      Casual <br /> Comfort
    </h2>
  </div>
</Link>


    </div>
  </div>

  {/* Scroll Down Button */}
  <div className=" absolute md:bottom-[-36px] sm:right-12  right-4 mt-2 md:transform md:-translate-x-1/2 flex justify-center">
    <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl text-black font-semibold text-sm border shadow hover:shadow-md transition duration-300">
      Scroll Down
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.187l3.71-3.96a.75.75 0 111.08 1.04l-4.25 4.54a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  </div>
</section>





</>
  )
}

export default SectionHome1