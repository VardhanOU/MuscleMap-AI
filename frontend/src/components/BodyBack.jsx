const BodyBack = ({ selectedMuscle, onSelectMuscle }) => {
  const handleClick = (muscle) => {
    onSelectMuscle(muscle === selectedMuscle ? null : muscle)
  }

  const isSelected = (muscle) => selectedMuscle === muscle
  const stroke = (muscle) => isSelected(muscle) ? '#FF4444' : '#666'
  const fill = (muscle) => isSelected(muscle) ? '#FF6B6B' : '#888'
  const sw = (muscle) => isSelected(muscle) ? 3 : 2

  return (
    <svg viewBox="0 0 200 400" className="w-full max-w-xs mx-auto" xmlns="http://www.w3.org/2000/svg">
      <g onClick={() => handleClick('traps')} className="cursor-pointer">
        <circle cx="100" cy="40" r="25" stroke={stroke('traps')} strokeWidth={sw('traps')} fill="none" />
        <path d="M75 55 Q100 45 125 55" fill={fill('traps')} stroke={stroke('traps')} strokeWidth={sw('traps')} />
      </g>
      
      <g onClick={() => handleClick('shoulders')} className="cursor-pointer">
        <circle cx="60" cy="75" r="15" fill={fill('shoulders')} stroke={stroke('shoulders')} strokeWidth={sw('shoulders')} />
        <circle cx="140" cy="75" r="15" fill={fill('shoulders')} stroke={stroke('shoulders')} strokeWidth={sw('shoulders')} />
      </g>
      
      <g onClick={() => handleClick('back')} className="cursor-pointer">
        <path d="M70 90 L130 90 L125 160 L75 160 Z" fill={fill('back')} stroke={stroke('back')} strokeWidth={sw('back')} rx="5" />
        <line x1="85" y1="95" x2="80" y2="155" stroke={stroke('back')} strokeWidth="1" />
        <line x1="100" y1="95" x2="100" y2="155" stroke={stroke('back')} strokeWidth="1" />
        <line x1="115" y1="95" x2="120" y2="155" stroke={stroke('back')} strokeWidth="1" />
      </g>
      
      <g onClick={() => handleClick('triceps')} className="cursor-pointer">
        <ellipse cx="45" cy="115" rx="8" ry="20" fill={fill('triceps')} stroke={stroke('triceps')} strokeWidth={sw('triceps')} />
        <ellipse cx="155" cy="115" rx="8" ry="20" fill={fill('triceps')} stroke={stroke('triceps')} strokeWidth={sw('triceps')} />
      </g>
      
      <g onClick={() => handleClick('forearms')} className="cursor-pointer">
        <rect x="30" y="140" width="10" height="35" rx="3" fill={fill('forearms')} stroke={stroke('forearms')} strokeWidth={sw('forearms')} />
        <rect x="160" y="140" width="10" height="35" rx="3" fill={fill('forearms')} stroke={stroke('forearms')} strokeWidth={sw('forearms')} />
      </g>
      
      <g onClick={() => handleClick('glutes')} className="cursor-pointer">
        <ellipse cx="80" cy="190" rx="20" ry="15" fill={fill('glutes')} stroke={stroke('glutes')} strokeWidth={sw('glutes')} />
        <ellipse cx="120" cy="190" rx="20" ry="15" fill={fill('glutes')} stroke={stroke('glutes')} strokeWidth={sw('glutes')} />
      </g>
      
      <g onClick={() => handleClick('hamstrings')} className="cursor-pointer">
        <ellipse cx="80" cy="230" rx="16" ry="35" fill={fill('hamstrings')} stroke={stroke('hamstrings')} strokeWidth={sw('hamstrings')} />
        <ellipse cx="120" cy="230" rx="16" ry="35" fill={fill('hamstrings')} stroke={stroke('hamstrings')} strokeWidth={sw('hamstrings')} />
      </g>
      
      <g onClick={() => handleClick('calves')} className="cursor-pointer">
        <ellipse cx="80" cy="310" rx="12" ry="30" fill={fill('calves')} stroke={stroke('calves')} strokeWidth={sw('calves')} />
        <ellipse cx="120" cy="310" rx="12" ry="30" fill={fill('calves')} stroke={stroke('calves')} strokeWidth={sw('calves')} />
      </g>

      <line x1="100" y1="65" x2="100" y2="120" stroke="#555" strokeWidth="4" />
      <line x1="55" y1="85" x2="35" y2="140" stroke="#555" strokeWidth="4" />
      <line x1="145" y1="85" x2="165" y2="140" stroke="#555" strokeWidth="4" />
      <line x1="35" y1="175" x2="25" y2="200" stroke="#555" strokeWidth="3" />
      <line x1="165" y1="175" x2="175" y2="200" stroke="#555" strokeWidth="3" />
      <line x1="75" y1="180" x2="75" y2="270" stroke="#555" strokeWidth="5" />
      <line x1="125" y1="180" x2="125" y2="270" stroke="#555" strokeWidth="5" />
      <line x1="75" y1="275" x2="75" y2="350" stroke="#555" strokeWidth="4" />
      <line x1="125" y1="275" x2="125" y2="350" stroke="#555" strokeWidth="4" />
    </svg>
  )
}

export default BodyBack
