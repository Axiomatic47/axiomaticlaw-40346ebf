import { Discipline } from "@/types/content";
import lawContent from "../../content/pages/law.json";
import philosophyContent from "../../content/pages/philosophy.json";
import theologyContent from "../../content/pages/theology.json";

export const disciplines: Discipline[] = [
  lawContent as Discipline,
  philosophyContent as Discipline,
  theologyContent as Discipline
];