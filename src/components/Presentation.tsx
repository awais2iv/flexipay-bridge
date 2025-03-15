
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";
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

  // Function to handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      handleNext();
    } else if (e.key === 'ArrowLeft') {
      handlePrevious();
    }
  };

  return (
    <div 
      className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <header className="bg-flexipay-primary text-white py-4 px-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-blue-700"
          >
            <Download className="h-4 w-4 mr-2" /> Export
          </Button>
        </div>
      </header>
      
      <main className="flex-1 p-4 md:p-6 flex flex-col container mx-auto">
        <div className="flex-1 py-4">
          {slides[currentSlide]}
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full shadow-sm">
            Slide {currentSlide + 1} of {slides.length}
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrevious}
              disabled={currentSlide === 0}
              className="border-flexipay-primary text-flexipay-primary hover:bg-blue-50"
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
      
      <footer className="bg-white border-t border-slate-200 py-2 text-center text-xs text-gray-500">
        FlexiPay Bridge Project • {new Date().getFullYear()}
      </footer>
    </div>
  );
};
