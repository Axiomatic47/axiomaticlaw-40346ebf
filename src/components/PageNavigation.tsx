import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const pageOrder = ["/", "/law", "/philosophy", "/theology"];
const pageNames = {
  "/": "Home",
  "/law": "Law",
  "/philosophy": "Philosophy",
  "/theology": "Theology",
};

export function PageNavigation() {
  const location = useLocation();
  const currentIndex = pageOrder.indexOf(location.pathname);
  const prevPage = currentIndex > 0 ? pageOrder[currentIndex - 1] : null;
  const nextPage = currentIndex < pageOrder.length - 1 ? pageOrder[currentIndex + 1] : null;

  return (
    <div className="flex justify-between items-center w-full max-w-4xl mx-auto py-4 px-6">
      {prevPage ? (
        <Link to={prevPage}>
          <Button variant="outline" className="flex items-center gap-2">
            <ChevronLeft className="h-4 w-4" />
            {pageNames[prevPage as keyof typeof pageNames]}
          </Button>
        </Link>
      ) : (
        <div /> {/* Empty div for spacing */}
      )}
      {nextPage ? (
        <Link to={nextPage}>
          <Button variant="outline" className="flex items-center gap-2">
            {pageNames[nextPage as keyof typeof pageNames]}
            <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
      ) : (
        <div /> {/* Empty div for spacing */}
      )}
    </div>
  );
}