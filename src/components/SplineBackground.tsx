import Spline from '@splinetool/react-spline/next';

interface SplineBackgroundProps {
  scene?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function SplineBackground({ 
  scene = "/scene.splinecode", 
  className = "",
  style = {
    top: '-25%',
    right: '-25%',
    transform: 'translate(50px, -50px)'
  }
}: SplineBackgroundProps) {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div 
        className={`absolute w-[150%] h-[150%] ${className}`}
        style={style}
      >
        <Spline scene={scene} />
      </div>
    </div>
  );
}
