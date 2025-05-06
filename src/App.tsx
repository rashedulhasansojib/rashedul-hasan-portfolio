import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Tech from "./components/Tech";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import { TransitionProvider } from "./context/TransitionContext";
import SectionTransition from "./components/SectionTransition";

const App = () => {
  const [loading, setLoading] = useState(true);

  // Simulate assets loading
  useEffect(() => {
    // Preload critical resources if needed
    const handleLoad = () => {
      // This adds a minimum delay for the loading screen
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <TransitionProvider>
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" onLoadingComplete={() => setLoading(false)} />
        ) : (
          <>
            <div className="fixed -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#7145E3_100%)]"></div>
            <div className="fixed -z-10 top-0 w-full h-full overflow-hidden opacity-20">
              <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500 rounded-full blur-[100px]"></div>
              <div className="absolute top-[20%] right-10 w-60 h-60 bg-pink-500 rounded-full blur-[100px]"></div>
              <div className="absolute bottom-0 left-20 w-72 h-72 bg-indigo-500 rounded-full blur-[100px]"></div>
            </div>

            <div className="flex flex-col min-h-screen">
              <Navbar />

              <main className="flex-1 flex flex-col items-center px-4 md:px-8 lg:px-16">
                <SectionTransition sectionId="hero" className="min-h-screen w-full flex flex-col items-center justify-center relative pt-16 pb-16 md:pb-24">
                  <Hero />
                </SectionTransition>

                <SectionTransition sectionId="about" className="min-h-screen w-full flex flex-col items-center justify-center gap-10 md:gap-16 py-16 md:py-20 relative">
                  <About />
                </SectionTransition>

                <SectionTransition sectionId="tech" className="min-h-screen w-full flex flex-col items-center justify-center gap-16 md:gap-20 lg:gap-24 py-16 md:py-20 relative">
                  <Tech />
                </SectionTransition>

                <SectionTransition sectionId="projects" className="min-h-screen w-full flex flex-col items-center justify-center gap-12 md:gap-16 py-16 md:py-20 relative z-10">
                  <Projects />
                </SectionTransition>

                <SectionTransition sectionId="contact" className="min-h-screen w-full flex flex-col items-center justify-center gap-12 md:gap-16 py-16 md:py-20 relative">
                  <Contact />
                </SectionTransition>

                <Footer />
              </main>
            </div>
          </>
        )}
      </AnimatePresence>
    </TransitionProvider>
  );
};

export default App;
