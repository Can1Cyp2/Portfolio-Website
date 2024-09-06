import React, { useEffect, useRef } from "react";
import "./BlobCounting.css"; // Import Blob Counting-specific styles

const BlobCounting: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const moveBlob = (el: HTMLElement) => {
    // Get the current position of the blob
    let posX = parseFloat(el.style.left || "0");
    let posY = parseFloat(el.style.top || "0");

    // Generate random movement deltas with even slower movement
    let deltaX = Math.random() * 0.3 - 0.15; // Slower horizontal movement
    let deltaY = Math.random() * 0.3 - 0.15; // Slower vertical movement

    const updatePosition = () => {
      // Update position with bouncing logic
      posX += deltaX;
      posY += deltaY;

      // Prevent the blob from crossing into the right 50% of the screen (where the text is)
      if (posX < 0 || posX > 45) {
        // Limit the right boundary to 45vw
        deltaX = -deltaX; // Reverse direction horizontally if out of bounds
      }
      if (posY < 0 || posY > 100) {
        deltaY = -deltaY; // Reverse direction vertically if out of bounds
      }

      // Set new position
      el.style.left = `${posX}vw`;
      el.style.top = `${posY}vh`;

      // Call update again for continuous movement
      requestAnimationFrame(updatePosition);
    };

    // Start the movement
    updatePosition();
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (section) {
      const elements = section.querySelectorAll(".blob");
      elements.forEach((el: Element) => {
        const blob = el as HTMLElement;
        // Initialize each blob with a random position and movement
        blob.style.left = `${Math.random() * 45}vw`; // Random initial position within 0-45% of screen width
        blob.style.top = `${Math.random() * 100}vh`; // Random initial position within 0-100% of screen height
        moveBlob(blob); // Start moving the blob
      });
    }
  }, []);

  return (
    <div className="blob-counting-container" ref={sectionRef}>
      <div className="blob-counting-content">
        <h1>Blob Counting (Recursion)</h1>
        <p>
          This C++ program, created during my early high school years while
          learning recursion, asks the user for the number of rows and columns
          to generate a grid filled with 'blobs' (*). The user is then prompted
          to select a position on the grid, and the program checks that position
          for a blob. If a blob is found, it recursively counts all connected
          blobs in that area, otherwise, it returns 0. This project was a
          foundational exercise in understanding recursion and basic grid
          traversal algorithms in C++.
        </p>
      </div>

      {/* Moving Blobs on the left side */}
      <div className="moving-blobs">
        <span className="blob"></span>
        <span className="blob"></span>
        <span className="blob"></span>
        <span className="blob"></span>
        <span className="blob"></span>
      </div>
    </div>
  );
};

export default BlobCounting;
