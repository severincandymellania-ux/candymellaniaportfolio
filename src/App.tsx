import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Experience />
                <Projects />
                <Education />
                <Skills />
                <Contact />
            </main>
        </>
    )
}

export default App
