import React, { useState, useEffect } from "react";
import Organizations_WhatsAheadCard, {
  WhatsAheadCardProps,
} from "./Organizations_WhatsAheadCard";
import { fetchFutureEventsOrgId } from "../../api/api";

interface Organizations_WhatsAheadCarouselProps {
  org_id: string; // The organization ID to fetch event data
}

const Organizations_WhatsAheadCarousel: React.FC<
  Organizations_WhatsAheadCarouselProps
> = ({ org_id }) => {
  const [cardsData, setCardsData] = useState<WhatsAheadCardProps[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data when component mounts
  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const organizationData = await fetchFutureEventsOrgId(parseInt(org_id));
        if (organizationData && organizationData.future_events) {
          // Map fetched data to WhatsAheadCardProps format
          const formattedData = organizationData.future_events.map((event) => ({
            eventName: event.eventTitle,
            month: event.month,
            day: event.day,
            year: event.year,
            location: event.venue,
          }));
          setCardsData(formattedData);
        } else {
          setCardsData([]); // No events found
        }
      } catch (err) {
        setError("Failed to load future events. Please try again later.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, [org_id]);

  const handleScroll = (direction: "left" | "right") => {
    setCurrentIndex((prevIndex) => {
      if (direction === "left") {
        return prevIndex === 0 ? cardsData.length - 1 : prevIndex - 1;
      } else {
        return prevIndex === cardsData.length - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  if (isLoading) {
    return <p>Loading...</p>; // Loading state
  }

  if (error) {
    return <p>{error}</p>; // Error state
  }

  if (cardsData.length === 0) {
    return <p>No upcoming events available.</p>; // Empty state
  }

  return (
    <div className="relative w-full flex justify-center items-center py-12">
      {/* Navigation Buttons */}
      <button
        className="absolute left-4 text-3xl text-gray-700"
        onClick={() => handleScroll("left")}
      >
        ←
      </button>
      <div className="w-[90%] max-w-4xl">
        <Organizations_WhatsAheadCard {...cardsData[currentIndex]} />
      </div>
      <button
        className="absolute right-4 text-3xl text-gray-700"
        onClick={() => handleScroll("right")}
      >
        →
      </button>
    </div>
  );
};

export default Organizations_WhatsAheadCarousel;
