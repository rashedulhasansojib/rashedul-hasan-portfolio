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
import { ThemeProvider } from "./context/ThemeContext";
import SectionTransition from "./components/SectionTransition";
import { useTheme } from "./context/ThemeContext";

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
    <ThemeProvider>
      <AppContent loading={loading} onLoadingComplete={() => setLoading(false)} />
    </ThemeProvider>
  );
};

const AppContent = ({ loading, onLoadingComplete }: { loading: boolean, onLoadingComplete: () => void }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <TransitionProvider>
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" onLoadingComplete={onLoadingComplete} />
        ) : (
          <>
            {/* Dark mode gradient background */}
            {isDark && (
              <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
            )}

            {/* Light mode background */}
            {!isDark && (
              <div className="absolute top-0 -z-10 h-full w-full bg-gradient-to-br from-white via-blue-50 to-indigo-50">
                <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-40 blur-[80px]"></div>
                <div className="absolute top-1/2 left-20 h-[300px] w-[300px] -translate-y-[30%] rounded-full bg-[rgba(120,180,255,0.4)] opacity-40 blur-[80px]"></div>
                <div className="absolute bottom-20 right-32 h-[250px] w-[250px] rounded-full bg-[rgba(255,130,180,0.3)] opacity-30 blur-[80px]"></div>
              </div>
            )}

            {/* Background orbs */}
            <div className={`fixed -z-10 top-0 w-full h-full overflow-hidden ${isDark ? 'opacity-20' : 'opacity-10'}`}>
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
