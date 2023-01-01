import '@/styles/components/VerticalPreview.scss';


const VericalPreview = ({img, title, children}) => {
  return (
    <li className='vertical-preview'>
        <div className='vertical-preview__image'>
            <img src={img} alt='technology' />
        </div>

        <h5 className="vertical-preview__title">
            {title}
        </h5>

        <p className="vertical-preview__text">
            {children}
        </p>
    </li>
  )
}

export default VericalPreview