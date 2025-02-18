import Lenis from "lenis";
import React, { useEffect } from "react";

export const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      // infinite: true,
    });

    // lenis.on('scroll', (e) => {
    //   console.log(e);
    // });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="min-h-[500vh] bg-gray-900 text-white flex flex-col items-center justify-center">
      <div className="w-full h-screen bg-red-500"></div>
      <div className="w-full h-screen bg-blue-500"></div>
      <div className="w-full h-screen bg-green-500"></div>
      <div className="w-full h-screen bg-yellow-500"></div>
      <div className="w-full h-screen bg-purple-500"></div>
    </div>
  );
};
