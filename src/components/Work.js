import React, { useEffect, useState } from 'react';

import image1 from '../assets/image1.avif'
import image2 from '../assets/image2.jpeg'
import image3 from '../assets/image3.avif'
import image4 from '../assets/image4.avif'

function Work(){
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [backgroundImage, setBackgroundImage] = useState(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
          setCursorPos({ x: e.pageX - 50, y: e.pageY - 50 });
        };
    
        document.addEventListener("mousemove", handleMouseMove);
    
        return () => {
          // Clean up the event listeners
          document.removeEventListener("mousemove", handleMouseMove);
        };
      }, []);
    
    return (
        <div className="Work" id="work">
            <h2>SELECTED WORK</h2>
            <div className="project-list">
                <div className="project">
                    <div className="project-name"  onMouseEnter={() => setBackgroundImage(image1)}
            onMouseLeave={() => setBackgroundImage(null)}> 1. PARADISE MADNESS</div>
                </div>
                <div className="project-line"></div>
                <div className="project">
                    <div className="project-name"  onMouseEnter={() => setBackgroundImage(image2)}
            onMouseLeave={() => setBackgroundImage(null)}>2. SUMMERTIME SADNESS</div>
                </div>
                <div className="project-line"></div>
                <div className="project">
                    <div className="project-name"  onMouseEnter={() => setBackgroundImage(image3)}
            onMouseLeave={() => setBackgroundImage(null)}>3. DARK PARADISE</div>
                </div>
                <div className="project-line"></div>
                <div className="project">
                    <div className="project-name"  onMouseEnter={() => setBackgroundImage(image4)}
            onMouseLeave={() => setBackgroundImage(null)}>4. WANDERLUST</div>
                </div>
            </div>
            <div
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
          backgroundImage: `url(${backgroundImage})`,
        }}
        className="cursor-follow"
      ></div>
        </div>
    )
}

export default Work;