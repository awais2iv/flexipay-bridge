
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, ReactNode } from "react";

type PresentationProps = {
  slides: ReactNode[];
  title: string;
};

export const Presentation = ({ slides, title }: PresentationProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-100 to-blue-100">
      <header className="bg-flexipay-primary text-white py-4 px-6 shadow-md">
        <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
      </header>
      
      <main className="flex-1 p-4 md:p-6 flex flex-col">
        <div className="flex-1 py-4">
          {slides[currentSlide]}
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm text-gray-500">
            Slide {currentSlide + 1} of {slides.length}
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrevious}
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="h-4 w-4 mr-1" /> Previous
            </Button>
            <Button
              size="sm"
              onClick={handleNext}
              disabled={currentSlide === slides.length - 1}
              className="bg-flexipay-primary hover:bg-flexipay-primary/90"
            >
              Next <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};
