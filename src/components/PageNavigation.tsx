import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useLocation, useParams } from "react-router-dom";
import { disciplines } from "@/data/content";

export function PageNavigation() {
  const location = useLocation();
  const { disciplineId, compositionId, sectionId } = useParams();

  const discipline = disciplines.find(d => d.id === disciplineId);
  const composition = discipline?.compositions.find(c => c.id === compositionId);

  let prevLink = null;
  let nextLink = null;
  let prevText = "";
  let nextText = "";

  if (sectionId && composition) {
    // Navigation between sections
    const sectionIndex = composition.sections.findIndex(s => s.id === sectionId);
    if (sectionIndex > 0) {
      const prevSection = composition.sections[sectionIndex - 1];
      prevLink = `/${disciplineId}/${compositionId}/${prevSection.id}`;
      prevText = prevSection.title;
    }
    if (sectionIndex < composition.sections.length - 1) {
      const nextSection = composition.sections[sectionIndex + 1];
      nextLink = `/${disciplineId}/${compositionId}/${nextSection.id}`;
      nextText = nextSection.title;
    }
  } else if (compositionId && discipline) {
    // Navigation between compositions
    const compositionIndex = discipline.compositions.findIndex(c => c.id === compositionId);
    if (compositionIndex > 0) {
      const prevComposition = discipline.compositions[compositionIndex - 1];
      prevLink = `/${disciplineId}/${prevComposition.id}`;
      prevText = prevComposition.title;
    }
    if (compositionIndex < discipline.compositions.length - 1) {
      const nextComposition = discipline.compositions[compositionIndex + 1];
      nextLink = `/${disciplineId}/${nextComposition.id}`;
      nextText = nextComposition.title;
    }
  } else if (disciplineId) {
    // Navigation between disciplines
    const disciplineIndex = disciplines.findIndex(d => d.id === disciplineId);
    if (disciplineIndex > 0) {
      const prevDiscipline = disciplines[disciplineIndex - 1];
      prevLink = `/${prevDiscipline.id}`;
      prevText = prevDiscipline.title;
    }
    if (disciplineIndex < disciplines.length - 1) {
      const nextDiscipline = disciplines[disciplineIndex + 1];
      nextLink = `/${nextDiscipline.id}`;
      nextText = nextDiscipline.title;
    }
  }

  return (
    <div className="flex justify-between items-center w-full max-w-4xl mx-auto py-4 px-6">
      {prevLink ? (
        <Link to={prevLink}>
          <Button variant="outline" className="flex items-center gap-2">
            <ChevronLeft className="h-4 w-4" />
            {prevText}
          </Button>
        </Link>
      ) : (
        // Empty div for spacing
        <div />
      )}
      {nextLink ? (
        <Link to={nextLink}>
          <Button variant="outline" className="flex items-center gap-2">
            {nextText}
            <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
      ) : (
        // Empty div for spacing
        <div />
      )}
    </div>
  );
}