import { AboutSection } from './component/about-section.component';
import { Avatar } from './component/avatar-section.component';
import { Navbar } from './component/NavBar/navbar.component';
import { SkillSection } from './component/skills-section.component';

function App() {
  const divStyle =
    'box-border bg-gradient-to-br from-gradientFrom to-gradientTo h-auto min-h-screen flex-1';
  return (
    <div id="home" className={divStyle}>
      <Navbar />
      <Avatar />
      <AboutSection />
      <SkillSection />
    </div>
  );
}

export default App;
