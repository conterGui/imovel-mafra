import React, { useState, useRef, useCallback } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { propertyConfig } from "@/config/property";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ComparisonSliderProps {
  before: string;
  after: string;
  label: string;
  beforeLabel: string;
  afterLabel: string;
}

const ComparisonSlider: React.FC<ComparisonSliderProps> = ({
  before,
  after,
  label,
  beforeLabel,
  afterLabel,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current || !isDragging.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div className="space-y-4">
      {label && <h3 className="heading-secondary text-center">{label}</h3>}

      <div
        ref={containerRef}
        className="relative aspect-video cursor-ew-resize select-none overflow-hidden rounded-lg"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        onTouchMove={handleTouchMove}
      >
        {/* After image (full width, below) */}
        <img
          src={after}
          alt="After"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* Before image (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={before}
            alt="Before"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              width: `${100 / (sliderPosition / 100)}%`,
              maxWidth: "none",
            }}
            draggable={false}
          />
        </div>

        {/* Slider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-primary shadow-lg"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        >
          {/* Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
            <div className="flex gap-0.5">
              <div className="w-0.5 h-4 bg-charcoal/60" />
              <div className="w-0.5 h-4 bg-charcoal/60" />
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute bottom-4 left-4 bg-charcoal/80 text-warm-white text-sm px-3 py-1.5 backdrop-blur-sm rounded uppercase tracking-wider">
          {beforeLabel}
        </div>
        <div className="absolute bottom-4 right-4 bg-primary text-charcoal text-sm px-3 py-1.5 backdrop-blur-sm rounded uppercase tracking-wider font-semibold">
          {afterLabel}
        </div>
      </div>
    </div>
  );
};

const BeforeAfterSection: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();
  const comparisons = propertyConfig.beforeAfter;
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!comparisons || comparisons.length === 0) return null;

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? comparisons.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === comparisons.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="before-after"
      ref={ref as React.RefObject<HTMLElement>}
      className="section-padding bg-background"
    >
      <div className="container-wide">
        {/* Gold accent line */}
        <div className="w-12 h-0.5 bg-primary mb-8" />

        <h2
          className={`heading-primary mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {t.beforeAfter.title}
        </h2>

        {/* Carousel */}
        <div
          className={`relative transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Main comparison slider */}
          <div className="max-w-4xl mx-auto">
            <ComparisonSlider
              before={comparisons[currentIndex].before}
              after={comparisons[currentIndex].after}
              label={t.beforeAfter.rooms[comparisons[currentIndex].label]} // ✅ tradução aqui
              beforeLabel={t.beforeAfter.before}
              afterLabel={t.beforeAfter.after}
            />
          </div>

          {/* Navigation arrows */}
          {comparisons.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:translate-x-0 w-12 h-12 bg-charcoal hover:bg-primary text-warm-white hover:text-charcoal rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-0 w-12 h-12 bg-charcoal hover:bg-primary text-warm-white hover:text-charcoal rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Próximo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Dots indicator */}
          {comparisons.length > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {comparisons.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary w-6"
                      : "bg-charcoal/30 hover:bg-charcoal/50"
                  }`}
                  aria-label={`Ir para ${comparisons[index].label}`}
                />
              ))}
            </div>
          )}

          {/* Thumbnails preview */}
          {comparisons.length > 1 && (
            <div className="flex justify-center gap-3 mt-6 overflow-x-auto pb-2">
              {comparisons.map((comparison, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`flex-shrink-0 transition-all duration-300 ${
                    index === currentIndex
                      ? "ring-2 ring-primary ring-offset-2"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={comparison.after}
                    alt={comparison.label}
                    className="w-20 h-14 md:w-24 md:h-16 object-cover rounded-lg"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
