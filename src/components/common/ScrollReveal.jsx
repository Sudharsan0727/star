import { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal Component
 * Wraps elements to animate them on scroll into view.
 * 
 * Props:
 * - animation: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'fade-in' | 'zoom-in'
 * - delay: number (in ms, default 0)
 * - duration: number (in ms, default 700)
 * - threshold: number (0 to 1, default 0.15)
 * - once: boolean (default true)
 * - className: string
 */
export default function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 700,
  easing = 'cubic-bezier(0.16, 1, 0.3, 1)',
  threshold = 0.15,
  once = false,
  className = '',
  style = {},
  ...props
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(el);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [threshold, once]);

  const animationClass = `reveal-${animation}`;

  return (
    <div
      ref={ref}
      className={`reveal-base ${animationClass} ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: easing,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
