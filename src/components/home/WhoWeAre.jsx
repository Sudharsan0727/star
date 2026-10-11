import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import unionBg from '../../assets/Union.png';
import ScrollReveal from '../common/ScrollReveal';

// The project does not use a runtime prop-types package; these values are supplied by the local stats list below.
// eslint-disable-next-line react/prop-types
function AnimatedStat({ value, label, delay = 0 }) {
  const statRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const statElement = statRef.current;
    if (!statElement) return undefined;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(value);
      return undefined;
    }

    let animationFrame;
    let delayTimer;

    const resetCounter = () => {
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(delayTimer);
      setCount(0);
    };

    const animateCounter = () => {
      resetCounter();
      delayTimer = window.setTimeout(() => {
        const startTime = window.performance.now();
        const duration = 1200;

        const tick = (currentTime) => {
          const progress = Math.min((currentTime - startTime) / duration, 1);
          const easedProgress = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(value * easedProgress));

          if (progress < 1) {
            animationFrame = window.requestAnimationFrame(tick);
          }
        };

        animationFrame = window.requestAnimationFrame(tick);
      }, delay);
    };

    if (!('IntersectionObserver' in window)) {
      setCount(value);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCounter();
        } else {
          resetCounter();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(statElement);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(delayTimer);
    };
  }, [delay, value]);

  return (
    <div ref={statRef} className="space-y-2">
      <div className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
        {count}<span className="text-[#FFB800] font-semibold">+</span>
      </div>
      <div className="text-xs sm:text-sm font-semibold tracking-wider text-blue-100 uppercase">
        {label}
      </div>
    </div>
  );
}

export default function WhoWeAre({ onOpenContact }) {
  const stats = [
    { value: 40, label: "RESEARCH EXPERTS" },
    { value: 20, label: "SCIENTIFIC DOMAINS" },
    { value: 150, label: "JOURNAL PUBLICATIONS" },
  ];

  return (
    <section id="about" className="py-24 my-8 bg-white relative overflow-hidden font-sans border-t border-slate-100">

      {/* World Map Dotted Background Graphic (Union.png) */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[460px] pointer-events-none opacity-100 z-0 flex items-center justify-center p-4">
        <img
          src={unionBg}
          alt="World Map Graphic"
          className="w-full h-full object-contain object-center"
        />
      </div>

      {/* Upper Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column */}
          <ScrollReveal animation="fade-left" className="lg:col-span-5 space-y-4">
            <div className="text-xs font-bold text-[#0052CC] uppercase tracking-widest">
              WHO WE ARE
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-slate-900 leading-snug sm:leading-[1.25]">
              Driven by Trust,<br />
              Powered by<br />
              Experience.
            </h2>
            <div className="pt-2">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-bold text-white bg-[#0052CC] hover:bg-[#003B94] shadow-md shadow-blue-900/20 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </ScrollReveal>

          {/* Right Column */}
          <ScrollReveal animation="fade-right" className="lg:col-span-7 space-y-6 text-base text-slate-600 leading-relaxed font-medium">
            <p>
              We are a multidisciplinary research consultancy comprising experienced researchers, Ph.D.
              scholars, scientists, and academicians with expertise across science and engineering
              disciplines.
            </p>
            <p>
              Headquartered in the capital city of Tamil Nadu, India, we provide
              comprehensive research solutions to students, faculty members, industries, and research
              organizations worldwide.
            </p>
          </ScrollReveal>

        </div>
      </div>

      {/* Full Width Vibrant Blue Stats Bar (with Yellow '+' Signs) */}
      <div className="w-full bg-gradient-to-r from-[#0052CC] via-[#0047BA] to-[#003B94] py-14 text-white shadow-inner relative z-10 my-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {stats.map((stat, idx) => (
              <ScrollReveal key={idx} animation="zoom-in" delay={idx * 100} className="space-y-2">
                <AnimatedStat {...stat} delay={idx * 150} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}

