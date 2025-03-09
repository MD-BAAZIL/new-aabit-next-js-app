// 'use client';

// import { useEffect, useRef } from 'react';
// import Typed from 'typed.js';

// const TypedText = () => {
//   const typedElement = useRef(null);

//   useEffect(() => {
//     const typed = new Typed(typedElement.current, {
//       strings: ["Frontend Developer", "BCA", "Web Developer"],
//       typeSpeed: 100,
//       backSpeed: 100,
//       backDelay: 1000,
//       loop: true,
//     });

//     return () => typed.destroy();
//   }, []);

//   return <span ref={typedElement} className="text-xl font-bold" />;
// };

// const Operations = () => {
//   const sub = (x, y) => x - y;
//   const multiple = (a, b) => a * b;

//   return (
//     <div>
//       <h2>Subtraction Result: {sub(20, 30)}</h2>
//       <h2>Multiplication Result: {multiple(40, 70)}</h2>
//     </div>
//   );
// };

// export default function Home() {
//   return (
//     <div className="p-5">
//       <TypedText />
//       <Operations />
//     </div>
//   );
// }







"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Home() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["MOHAMED BAAZIL", "SOFTWARE DEVELOPER", "Btech cse"],
      typeSpeed: 100,
      backSpeed: 1000,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy(); // Cleanup to prevent memory leaks
    };
  }, []);

  // Utility functions
const sub = (x: number, y: number): number => x * y;
  const multiple = (a: number, b: number) => a - b;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold">Welcome to My Portfolio</h1>
      <div><span ref={typedRef} className="text-xl text-blue-400 mt-2"></span></div>
      <style>
        {`
          .typed-cursor {
            font-size: 1.5rem; 
            font-weight: ;  
            color: #00ffff; 
          }
        `}
        </style>
    </div>
  );
}

