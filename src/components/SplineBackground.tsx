import Spline from '@splinetool/react-spline/next';
import { 
  SPLINE_PRESETS, 
  SPLINE_POSITIONS, 
  SPLINE_SIZES, 
  SPLINE_CONTAINERS,
  SPLINE_SCALES,
  type SplinePreset,
  type SplinePosition,
  type SplineSize,
  type SplineContainer,
  type SplineScale
} from '@/lib/spline-styles';

interface SplineBackgroundProps {
  scene?: string;
  className?: string;
  style?: React.CSSProperties;
  preset?: SplinePreset;
  position?: SplinePosition;
  size?: SplineSize;
  container?: SplineContainer;
  scale?: SplineScale;
  customPosition?: React.CSSProperties;
}

export default function SplineBackground({ 
  scene = "/scene.splinecode", 
  className = "",
  style,
  preset = 'BACKGROUND',
  position,
  size,
  container,
  scale,
  customPosition
}: SplineBackgroundProps) {
  // Usar preset como base y permitir overrides
  const config = SPLINE_PRESETS[preset];
  
  const finalContainer = container ? SPLINE_CONTAINERS[container] : config.container;
  const finalSize = size ? SPLINE_SIZES[size] : config.size;
  const finalPosition = position ? SPLINE_POSITIONS[position] : config.position;
  const finalScale = scale ? SPLINE_SCALES[scale] : config.scale;
  
  // Combinar estilos: preset + overrides + custom
  const combinedStyle = {
    ...finalPosition,
    transform: `${finalPosition.transform || ''} ${finalScale}`.trim(),
    ...customPosition,
    ...style
  };

  return (
    <div className={finalContainer}>
      <div 
        className={`absolute ${finalSize} ${className}`}
        style={combinedStyle}
      >
        <Spline scene={scene} />
      </div>
    </div>
  );
}
