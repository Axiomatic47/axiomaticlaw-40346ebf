import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '@/components/Header';
import { StackbitProvider } from '@/components/StackbitProvider';
import Index from '@/pages/Index';
import Law from '@/pages/Law';
import Philosophy from '@/pages/Philosophy';
import Theology from '@/pages/Theology';
import DisciplinePage from '@/pages/DisciplinePage';
import SectionPage from '@/pages/SectionPage';

function App() {
  return (
    <StackbitProvider>
      <Router>
        <div className="min-h-screen bg-background">
          <Header />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/law" element={<Law />} />
            <Route path="/philosophy" element={<Philosophy />} />
            <Route path="/theology" element={<Theology />} />
            <Route path="/:disciplineId" element={<DisciplinePage />} />
            <Route path="/:disciplineId/:compositionId/:sectionId" element={<SectionPage />} />
          </Routes>
        </div>
      </Router>
    </StackbitProvider>
  );
}

export default App;