import { useReveal } from '../hooks/useReveal';
import './Reveal.css';

/**
 * Reveal — wraps content and animates it in when scrolled into view.
 * direction: 'up' | 'left' | 'right' | 'zoom'
 * delay:     ms to wait after entering the viewport
 */
export default function Reveal({ children, delay = 0, direction = 'up', className = '', as: Tag = 'div', ...rest }) {
  const { ref, visible } = useReveal();

  const dirClass =
    direction === 'left'
      ? 'reveal--left'
      : direction === 'right'
        ? 'reveal--right'
        : direction === 'zoom'
          ? 'reveal--zoom'
          : 'reveal--up';

  return (
    <Tag
      ref={ref}
      className={`reveal ${dirClass} ${visible ? 'reveal--visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
