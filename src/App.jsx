import Lenis from "lenis";
import React, { useEffect } from "react";

export const App = () => {
  useEffect(() => {
    const lenis = new Lenis();


    lenis.on('scroll', (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

  }, []);

  return (
    <div className="min-h-[500vh] bg-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Smooth Scrolling with Lenis 🚀</h1>
      <p className="mt-5 text-lg">Scroll down to see the smooth effect</p>
    </div>
  );
};
