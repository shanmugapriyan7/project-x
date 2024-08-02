import React, { useEffect, useState } from 'react';

const YourComponent = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);

  useEffect(() => {
    const carousel = document.querySelector('.carousel');
    const arrowBtns = document.querySelectorAll('.wrapper i');
    const wrapper = document.querySelector('.wrapper');
    const firstCard = carousel.querySelector('.card');
    const firstCardWidth = firstCard.offsetWidth;
    let timeoutId;

    const dragStart = (e) => {
      setIsDragging(true);
      carousel.classList.add('dragging');
      setStartX(e.pageX);
      setStartScrollLeft(carousel.scrollLeft);
    };

    const dragging = (e) => {
      if (!isDragging) return;

      const newScrollLeft = startScrollLeft - (e.pageX - startX);

      if (
        newScrollLeft <= 0 ||
        newScrollLeft >= carousel.scrollWidth - carousel.offsetWidth
      ) {
        setIsDragging(false);
        return;
      }

      carousel.scrollLeft = newScrollLeft;
    };

    const dragStop = () => {
      setIsDragging(false);
      carousel.classList.remove('dragging');
    };

    const autoPlay = () => {
      if (window.innerWidth < 800) return;

      const totalCardWidth = carousel.scrollWidth;
      const maxScrollLeft = totalCardWidth - carousel.offsetWidth;

      if (carousel.scrollLeft >= maxScrollLeft) return;

      timeoutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth), 2500);
    };

    carousel.addEventListener('mousedown', dragStart);
    carousel.addEventListener('mousemove', dragging);
    document.addEventListener('mouseup', dragStop);
    wrapper.addEventListener('mouseenter', () => clearTimeout(timeoutId));
    wrapper.addEventListener('mouseleave', autoPlay);

    arrowBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        carousel.scrollLeft +=
          btn.id === 'left' ? -firstCardWidth : firstCardWidth;
      });
    });

    // Cleanup on component unmount
    return () => {
      carousel.removeEventListener('mousedown', dragStart);
      carousel.removeEventListener('mousemove', dragging);
      document.removeEventListener('mouseup', dragStop);
      wrapper.removeEventListener('mouseenter', () => clearTimeout(timeoutId));
      wrapper.removeEventListener('mouseleave', autoPlay);

      arrowBtns.forEach((btn) => {
        btn.removeEventListener('click', () => {
          carousel.scrollLeft +=
            btn.id === 'left' ? -firstCardWidth : firstCardWidth;
        });
      });
    };
  }, [isDragging, startX, startScrollLeft]); // Dependency array to avoid unnecessary re-renders

  return (
    <div className="wrapper">
      {/* Your JSX for rendering the carousel goes here */}
    </div>
  );
};

export default YourComponent;
