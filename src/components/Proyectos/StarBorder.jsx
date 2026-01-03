import { forwardRef } from 'react';
import './StarBorder.css';

const StarBorder = forwardRef(({
  as: Component = 'button',
  className = '',
  color = 'white',
  speed = '6s',
  thickness = 1,
  children,
  ...rest
}, ref) => {
  return (
    <Component
      ref={ref}
      className={`star-border-container ${className}`}
      style={{
        '--star-color': color,
        '--star-speed': speed,
        '--star-thickness': `${thickness}px`
      }}
      {...rest}
    >
      <div className="border-gradient-bottom"></div>
      <div className="border-gradient-top"></div>
      <div className="inner-content">{children}</div>
    </Component>
  );
});

StarBorder.displayName = 'StarBorder';

export default StarBorder;

