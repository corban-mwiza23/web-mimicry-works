
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
    title: "Dubai Engineering Excellence",
    description: "Providing innovative solutions for Dubai's most complex engineering challenges",
    ctaText: "Our Services",
    ctaLink: "#services"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
    title: "Dubai's Global Partners",
    description: "Working with industry leaders to deliver exceptional results across Dubai's skyline",
    ctaText: "Our Projects",
    ctaLink: "#projects"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2",
    title: "Cutting-Edge Dubai Technology",
    description: "Leveraging advanced technology to transform Dubai's architectural landscape",
    ctaText: "Learn More",
    ctaLink: "#about"
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState("next");
  const slideTimerRef = useRef<number | null>(null);
  
  const nextSlide = () => {
    if (animating) return;
    
    setAnimating(true);
    setSlideDirection("next");
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    
    setTimeout(() => {
      setAnimating(false);
    }, 600); // Match this with the CSS transition duration
  };
  
  const prevSlide = () => {
    if (animating) return;
    
    setAnimating(true);
    setSlideDirection("prev");
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    
    setTimeout(() => {
      setAnimating(false);
    }, 600); // Match this with the CSS transition duration
  };
  
  const goToSlide = (index: number) => {
    if (animating || index === currentSlide) return;
    
    setAnimating(true);
    setSlideDirection(index > currentSlide ? "next" : "prev");
    setCurrentSlide(index);
    
    setTimeout(() => {
      setAnimating(false);
    }, 600);
  };
  
  // Auto-advance slides
  useEffect(() => {
    slideTimerRef.current = window.setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => {
      if (slideTimerRef.current) {
        clearInterval(slideTimerRef.current);
      }
    };
  }, []);
  
  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-600 ease-in-out ${
              index === currentSlide 
                ? "opacity-100 transform translate-y-0" 
                : slideDirection === "next"
                  ? "opacity-0 transform translate-y-full pointer-events-none"
                  : "opacity-0 transform -translate-y-full pointer-events-none"
            }`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="container mx-auto px-4 text-center">
                <h2 className={`text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-300 ${
                  index === currentSlide ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
                }`}>
                  {slide.title}
                </h2>
                <p className={`text-xl text-white max-w-2xl mx-auto mb-8 transition-all duration-300 delay-100 ${
                  index === currentSlide ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
                }`}>
                  {slide.description}
                </p>
                <div className={`transition-all duration-300 delay-200 ${
                  index === currentSlide ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
                }`}>
                  <Button size="lg" asChild>
                    <a href={slide.ctaLink}>{slide.ctaText}</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 rounded-full h-10 w-10"
        onClick={prevSlide}
        disabled={animating}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 rounded-full h-10 w-10"
        onClick={nextSlide}
        disabled={animating}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50"
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
