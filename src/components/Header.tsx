import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="w-full bg-secondary/50 backdrop-blur-sm border-b border-white/10 py-4 px-6 sticky top-0 z-50">
      <div className="container max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl md:text-2xl font-serif text-white hover:text-white/80 transition-colors">
          The Axiomatic Framework for Human Experience
        </Link>
        <Link to="/">
          <Button variant="ghost" size="icon">
            <Home className="h-5 w-5" />
          </Button>
        </Link>
      </div>
    </header>
  );
}