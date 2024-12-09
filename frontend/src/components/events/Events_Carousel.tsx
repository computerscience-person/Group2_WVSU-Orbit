import React, { useState, useEffect } from "react";
import Events_RecapCard from "./Events_RecapCard";
import {
  fetchRecentEvents,
  fetchSixRecentEventsOrgId,
  Event,
} from "../../api/api";
import img1 from "../../assets/photos/cyb_pastevent_1.jpg";
import img2 from "../../assets/photos/cyb_pastevent_2.jpg";
import img3 from "../../assets/photos/cyb_pastevent_3.jpg";
import img4 from "../../assets/photos/cyb1.jpg";
import img5 from "../../assets/photos/cyb2.jpg";
import img6 from "../../assets/photos/cyb3.jpg";
import img7 from "../../assets/photos/cyb4.jpg";
import img8 from "../../assets/photos/cyb5.jpg";
import img9 from "../../assets/photos/cyb6.jpg";
import img10 from "../../assets/photos/cyb7.jpg";
import img11 from "../../assets/photos/cyb8.jpg";
import img12 from "../../assets/photos/cyb9.jpg";
import img13 from "../../assets/photos/cyb10.jpg";
import img14 from "../../assets/photos/cyb11.jpg";
import img15 from "../../assets/photos/cyb12.jpg";

interface Card {
  orgName: string;
  eventName: string;
  url: string;
  bgColor: string;
  logoUrl: string;
}

interface EventsCarouselProps {
  orgId?: number | null; // Optional orgId prop
}

const Events_Carousel: React.FC<EventsCarouselProps> = ({ orgId = null }) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [cards, setCards] = useState<Card[]>([]);

  const colors = [
    "bg-sunshine",
    "bg-sorbet",
    "bg-tangerine",
    "bg-palmleaf",
    "bg-pool",
  ];

  const eventImages = [img1, img2, img3, img4, img5, img6, img7, img8,
    img9, img10, img11, img12, img13, img14, img15];
 
  // Fetch recent events or org-specific events on component mount or orgId change
  useEffect(() => {
    const loadEvents = async () => {
      try {
        let data;
        if (orgId) {
          data = await fetchSixRecentEventsOrgId(orgId);
        } else {
          data = await fetchRecentEvents();
        }

        setEvents(data); // Set the events state

        // Map events to Card format with random bgColor
        const mappedCards: Card[] = data.map((event) => ({
          orgName: event.orgName ?? "Unknown Organization", // Fallback for null/undefined orgName
          eventName: event.eventTitle,
          logoUrl: event.organization.logoUrl,
          url: "facebook.com",
          bgColor: colors[Math.floor(Math.random() * colors.length)],
          backgroundImage: eventImages[Math.floor(Math.random() * eventImages.length)]}));

        setCards(mappedCards); // Set the cards state
      } catch (error) {
        console.error("Error loading events:", error);
      }
    };

    loadEvents();
  }, [orgId]); // Run effect on mount or when orgId changes

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
    <div className="w-full h-[85vh] flex justify-center py-12 px-28 relative">
      <div>
        <div className="flex space-x-8">
          {visibleCards.map((card, index) => (
            <Events_RecapCard
              key={index}
              orgName={card.orgName}
              eventName={card.eventName}
              url={card.url}
              bgColor={card.bgColor}
              logoUrl={card.logoUrl}
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
