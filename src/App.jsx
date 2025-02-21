import Lenis from "lenis";
import React, { useEffect } from "react";
import Test from "./Animation/Test";

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
    <div className="w-full h-screen bg-purple-300">
      <Test />
    </div>
  );
};
