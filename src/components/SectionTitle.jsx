import React from 'react'
import '@/styles/components/SectionTitle.scss'

const SectionTitle = ({children}) => {
  return (
    <h2 className='section-title'>
        {children}
    </h2>
  )
}

export default SectionTitle