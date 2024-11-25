import React, { useState, useEffect } from "react";
import Events_RecapCard from "./Events_RecapCard";
import { fetchRecentEvents, Event } from "../../api/api";

interface Card {
  orgName: string;
  eventName: string;
  url: string;
  bgColor: string;
}

const Events_Carousel: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [cards, setCards] = useState<Card[]>([]);

  const colors = [
    "bg-sunshine",
    "bg-sorbet",
    "bg-tangerine",
    "bg-palmleaf",
    "bg-pool",
  ];

  // Fetch recent events on component mount
  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await fetchRecentEvents();
        setEvents(data); // Set the events state

        // Map events to Card format with random bgColor
        const mappedCards: Card[] = data.map((event) => ({
          orgName: event.orgName ?? "Unknown Organization", // Fallback for null/undefined orgName
          eventName: event.eventTitle,
          url: "facebook.com",
          bgColor: colors[Math.floor(Math.random() * colors.length)], // Randomly assign a color
        }));

        setCards(mappedCards); // Set the cards state
      } catch (error) {
        console.error("Error loading events:", error);
      }
    };

    loadEvents();
  }, []); // Empty dependency array to run only once on mount

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 3;

  const handleScroll = (direction: "left" | "right") => {
    setCurrentIndex((prevIndex) => {
      if (direction === "left") {
        return prevIndex === 0 ? cards.length - cardsPerView : prevIndex - 1;
      } else {
        return prevIndex === cards.length - cardsPerView ? 0 : prevIndex + 1;
      }
    });
  };

  // Get visible cards based on the current index
  const visibleCards = cards.slice(currentIndex, currentIndex + cardsPerView);

  // Handle wrapping if slice exceeds the total cards
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
