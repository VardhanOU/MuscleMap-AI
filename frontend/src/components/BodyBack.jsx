import { backHotspots } from '../data/muscleHotspots'
import backMuscular from '../assets/anatomy/back-muscular.png'

export default function BodyBack({ selectedMuscle, onSelectMuscle }) {
  const isSelected = (muscle) => selectedMuscle === muscle

  return (
    <svg viewBox="0 0 1024 1024" className="w-full max-w-xl mx-auto drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
      {/* Base anatomical illustration with screen blend mode to drop the black background */}
      <image href={backMuscular} x="0" y="0" width="1024" height="1024" style={{ mixBlendMode: 'screen' }} />

      {/* Invisible/Highlighted overlay layers for each muscle */}
      {Object.keys(backHotspots).map(muscle => (
        <g 
          key={`back-${muscle}`}
          onClick={() => onSelectMuscle(muscle)}
          className="cursor-pointer transition-colors duration-300 hover:opacity-80"
        >
          <path 
            d={backHotspots[muscle]} 
            fill={isSelected(muscle) ? '#FF2244' : 'transparent'} 
            fillOpacity={isSelected(muscle) ? 0.6 : 0}
            stroke={isSelected(muscle) ? '#FF4466' : 'transparent'}
            strokeWidth={isSelected(muscle) ? 2 : 0}
            className={`transition-all duration-300 ${isSelected(muscle) ? 'drop-shadow-[0_0_8px_rgba(255,34,68,0.8)]' : ''}`}
          />
        </g>
      ))}
    </svg>
  )
}
