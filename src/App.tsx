import './index.css';
import { useScrollFade } from './hooks/useScrollFade';
import { LightboxProvider } from './components/Lightbox';
import Hero            from './components/Hero';
import About           from './components/About';
import Work            from './components/Work';
import DesignShowcase  from './components/DesignShowcase';
import Process         from './components/Process';
import Contact         from './components/Contact';

export default function App() {
  useScrollFade();

  return (
    <LightboxProvider>
      {/* Fixed gradient mesh background */}
      <div className="gradient-mesh" />

      <main style={{ width: '100%', position: 'relative' }}>
        <Hero />
        <div className="glow-divider" />
        <About />
        <div className="glow-divider" />
        <Work />
        <div className="glow-divider" />
        <DesignShowcase />
        <div className="glow-divider" />
        <Process />
        <div className="glow-divider" />
        <Contact />
      </main>
    </LightboxProvider>
  );
}
