import Hero from './components/hero';
import Education from "./components/education";
import BreakPoint1 from "./components/breakpoint1";
import ProfessionalExp from './components/professionalExp';
import NewsPaper from './components/newsPaper';
import Contact from './components/contact';

export default function Home() {
  return (
    <main>
      <Hero/>
      <Education />
      <BreakPoint1 />
      <ProfessionalExp />
      <NewsPaper />
      <Contact />
    </main>
  );
}
