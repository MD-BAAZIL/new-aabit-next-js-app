// // ScrollBoxes.js
'use client'
// import { useEffect, useState } from 'react';

// const ScrollBoxes = () => {
//     const [scrollPosition, setScrollPosition] = useState(0);

//     useEffect(() => {
//         const handleScroll = () => {
//             setScrollPosition(window.scrollY);
//         };

//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     return (
//         <div style={{ height: '200vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//             <div style={{
//                 transform: `translateX(${scrollPosition * 0.5}px)`,
//                 width: '100px',
//                 height: '100px',
//                 backgroundColor: 'lightblue',
//                 margin: '20px',
//                 transition: 'transform 0.1s'
//             }}>Box 1</div>
//             <div style={{
//                 transform: `translateX(${scrollPosition * 0.3}px)`,
//                 width: '100px',
//                 height: '100px',
//                 backgroundColor: 'lightgreen',
//                 margin: '20px',
//                 transition: 'transform 0.1s'
//             }}>Box 2</div>
//             <div style={{
//                 transform: `translateX(${scrollPosition * 0.1}px)`,
//                 width: '100px',
//                 height: '100px',
//                 backgroundColor: 'lightcoral',
//                 margin: '20px',
//                 transition: 'transform 0.1s'
//             }}>Box 3</div>
//         </div>
//     );
// };

// export default ScrollBoxes;



// components/ScrollEffect.js
// import { useEffect, useState } from 'react';

// const ScrollEffect = () => {
//     const [scrollPosition, setScrollPosition] = useState(0);

//     useEffect(() => {
//         const handleScroll = () => {
//             setScrollPosition(window.scrollY);
//         };

//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     return (
//         <div style={{ height: '200vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//             <div style={{
//                 transform: `translateX(-${scrollPosition * 0.5}px)`, // Move left based on scroll
//                 width: '100px',
//                 height: '100px',
//                 backgroundColor: 'lightblue',
//                 margin: '20px',
//                 transition: 'transform 0.1s'
//             }}>Card 1</div>
//             <div style={{
//                 transform: `translateX(-${scrollPosition * 0.3}px)`, // Move left based on scroll
//                 width: '100px',
//                 height: '100px',
//                 backgroundColor: 'lightgreen',
//                 margin: '20px',
//                 transition: 'transform 0.1s'
//             }}>Card 2</div>
//             <div style={{
//                 transform: `translateX(-${scrollPosition * 0.1}px)`, // Move left based on scroll
//                 width: '100px',
//                 height: '100px',
//                 backgroundColor: 'lightcoral',
//                 margin: '20px',
//                 transition: 'transform 0.1s'
//             }}>Card 3</div>
//             <div style={{
//                 height: '100vh', // Next section
//                 backgroundColor: 'lightgray',
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//             }}>
//             </div>
//         </div>
//     );
// };

// export default ScrollEffect;

import { z } from 'zod';
import { useEffect, useRef, useState } from 'react';

const ScrollEffect = () => {
    const [isAnimating, setIsAnimating] = useState(true);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Disable scrolling initially
        document.body.style.overflow = 'hidden';

        // After 3 seconds, enable scrolling
        setTimeout(() => {
            setIsAnimating(false);
            document.body.style.overflow = 'auto';
        }, 5000);
    }, []);

    return (
        <div ref={containerRef} style={{ height: '200vh' }}>
            {/* Animated Cards */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                overflow: 'hidden',
                position: 'relative'
            }}>
                {['lightblue', 'lightgreen', 'lightcoral'].map((color, index) => (
                    <div key={index} style={{
                        width: '100px',
                        height: '100px',
                        backgroundColor: color,
                        margin: '20px',
                        transform: isAnimating ? `translateX(${(index + 1) * 50}px)` : 'translateX(0)',
                        transition: 'transform 2s ease-in-out'
                    }}>
                        Card {index + 1}
                    </div>
                ))}
            </div>

            {/* Scrollable Content After Animation */}
            <div style={{
                height: '100vh',
                backgroundColor: 'lightgray',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                Scrollable Content Below
            </div>
        </div>
    );
};

export default ScrollEffect;
