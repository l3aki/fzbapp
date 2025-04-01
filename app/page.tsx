import Navigation from './components/Navigation';
import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects';
import Stats from './components/Stats';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <FeaturedProjects />
      <Stats />
      <Footer />
    </main>
  );
}