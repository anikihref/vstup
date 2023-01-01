import React, { useState } from 'react'
import '@/styles/components/Accordion.scss'

const Accordion = ({title, children}) => {
  const [opened, setOpened] = useState(false);

  return (
    <button className={`accordion ${opened ? 'active' : ''}`} onClick={() => setOpened(opened => !opened)}>
      <div className="accordion__title-wrapper">
        <h4 className="accordion__title">{title}</h4>
        <div className='accordion__state'></div>
      </div>
      <p className='accordion__text'>
        {children}
      </p>
    </button>
  )
}

export default Accordion