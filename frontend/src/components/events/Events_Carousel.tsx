import React, { useRef, useState } from "react";
import Events_RecapCard from "./Events_RecapCard";

interface Card {
  orgName: string;
  eventName: string;
  url: string;
  bgColor: string;
}

interface CarouselProps {
  cards: Card[];
}

const Events_Carousel: React.FC<CarouselProps> = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = cards.length;
  const cardsPerView = 3;

  const handleScroll = (direction: "left" | "right") => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? totalCards - cardsPerView : prevIndex - 1
      );
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === totalCards - cardsPerView ? 0 : prevIndex + 1
      );
    }
  };

  // Get the visible cards based on the current index
  const visibleCards = cards.slice(currentIndex, currentIndex + cardsPerView);

  // Handle wrapping around if the slice exceeds the total cards
  if (visibleCards.length < cardsPerView) {
    visibleCards.push(...cards.slice(0, cardsPerView - visibleCards.length));
  }

  return (
    <div className="py-12 px-28 relative">
      <div className="overflow-hidden">
        <div className="flex space-x-8 transition-transform duration-300 ease-in-out">
          {visibleCards.map((card, index) => (
            <Events_RecapCard
              key={index}
              orgName={card.orgName}
              eventName={card.eventName}
              url={card.url}
              bgColor={card.bgColor}
            />
          ))}
        </div>
      </div>
      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-6 transform -translate-y-1/2 text-5xl text-black"
        onClick={() => handleScroll("left")}
      >
        ←
      </button>
      <button
        className="absolute top-1/2 right-6 transform -translate-y-1/2 text-5xl text-black"
        onClick={() => handleScroll("right")}
      >
        →
      </button>
    </div>
  );
};

export default Events_Carousel;
