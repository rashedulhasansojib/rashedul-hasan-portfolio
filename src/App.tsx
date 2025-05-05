import Tech from "./components/Tech";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="fixed -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#7145E3_100%)]"></div>

      <div className="fixed -z-10 top-0 w-full h-full overflow-hidden opacity-20">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500 rounded-full blur-[100px]"></div>
        <div className="absolute top-[20%] right-10 w-60 h-60 bg-pink-500 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-20 w-72 h-72 bg-indigo-500 rounded-full blur-[100px]"></div>
      </div>

      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <Navbar />
        <Hero />
        <About />
        <Tech />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default App;
