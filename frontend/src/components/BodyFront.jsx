const BodyFront = ({ selectedMuscle, onSelectMuscle }) => {
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
      </g>
      
      <g onClick={() => handleClick('shoulders')} className="cursor-pointer">
        <circle cx="60" cy="75" r="15" fill={fill('shoulders')} stroke={stroke('shoulders')} strokeWidth={sw('shoulders')} />
        <circle cx="140" cy="75" r="15" fill={fill('shoulders')} stroke={stroke('shoulders')} strokeWidth={sw('shoulders')} />
      </g>
      
      <g onClick={() => handleClick('chest')} className="cursor-pointer">
        <ellipse cx="100" cy="100" rx="38" ry="18" fill={fill('chest')} stroke={stroke('chest')} strokeWidth={sw('chest')} />
      </g>
      
      <g onClick={() => handleClick('biceps')} className="cursor-pointer">
        <ellipse cx="45" cy="115" rx="8" ry="20" fill={fill('biceps')} stroke={stroke('biceps')} strokeWidth={sw('biceps')} />
        <ellipse cx="155" cy="115" rx="8" ry="20" fill={fill('biceps')} stroke={stroke('biceps')} strokeWidth={sw('biceps')} />
      </g>
      
      <g onClick={() => handleClick('abs')} className="cursor-pointer">
        <rect x="85" y="120" width="30" height="60" rx="5" fill={fill('abs')} stroke={stroke('abs')} strokeWidth={sw('abs')} />
        <line x1="85" y1="140" x2="115" y2="140" stroke={stroke('abs')} strokeWidth="1" />
        <line x1="85" y1="160" x2="115" y2="160" stroke={stroke('abs')} strokeWidth="1" />
        <line x1="100" y1="120" x2="100" y2="180" stroke={stroke('abs')} strokeWidth="1" />
      </g>
      
      <g onClick={() => handleClick('forearms')} className="cursor-pointer">
        <rect x="30" y="140" width="10" height="35" rx="3" fill={fill('forearms')} stroke={stroke('forearms')} strokeWidth={sw('forearms')} />
        <rect x="160" y="140" width="10" height="35" rx="3" fill={fill('forearms')} stroke={stroke('forearms')} strokeWidth={sw('forearms')} />
      </g>
      
      <g onClick={() => handleClick('quads')} className="cursor-pointer">
        <ellipse cx="80" cy="230" rx="18" ry="35" fill={fill('quads')} stroke={stroke('quads')} strokeWidth={sw('quads')} />
        <ellipse cx="120" cy="230" rx="18" ry="35" fill={fill('quads')} stroke={stroke('quads')} strokeWidth={sw('quads')} />
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

export default BodyFront
