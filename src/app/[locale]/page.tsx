import Hero from './components/hero';
import Education from "./components/education";
import BreakPoint1 from "./components/breakpoint1";
import ProfessionalExp from './components/professionalExp';
import NewsPaper from './components/newsPaper';

export default function Home() {
  return (
    <main>
      <Hero/>
      <Education />
      <BreakPoint1 />
      <ProfessionalExp />
      <NewsPaper />
    </main>
  );
}
