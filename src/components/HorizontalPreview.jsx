import ReadMoreButton from '@/components/ReadMoreButton';
import '@/styles/components/HorizontalPreview.scss'


const HorizontalPreview = ({ variant = 'left-to-right', src, title, children, link }) => {
  return (
    <div className="horizontal-preview">
        {variant === 'left-to-right' ? (
            <>
                <div className="horizontal-preview__image">
                    <img src={src} alt='preview' />
                </div>

                <div className="horizontal-preview__content">
                    <h4 className="horizontal-preview__title">
                        {title}
                    </h4>   

                    <p className="horizontal-preview__text">
                        {children}
                    </p>

                    {link && (
                        <ReadMoreButton link={link} />
                    )}
                </div>
            </>
        ) : (
            <>
                <div className="horizontal-preview__content">
                    <h4 className="horizontal-preview__title">
                        {title}
                    </h4>   

                    <p className="horizontal-preview__text">
                        {children}
                    </p>

                    {link && (
                        <ReadMoreButton link={link} />
                    )}
                </div>

                <div className="horizontal-preview__image">
                    <img src={src} alt='preview' />
                </div>
            </>
        )}
    </div>
  )
}

export default HorizontalPreview