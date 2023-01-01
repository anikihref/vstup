import '@/styles/components/ReadMoreButton.scss' 

const ReadMoreButton = ({link}) => {
  return (
    <button className='read-more'>
      <a className='read-more__link' href={link} target='_blank'>
          Дізнатись більше
      </a>
    </button>
  )
}

export default ReadMoreButton