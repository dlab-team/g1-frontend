import error404Webp from '../../assets/images/images-404/error404.Webp'
import error404Png from '../../assets/images/images-404/error404.png'
import PropTypes from 'prop-types'

const Image404 = ({className}) => {
    
  return (
    <div className={`block w-[16.7rem] mb-4 desktop:w-[47rem] desktop:mt-[9.5rem] ${className}`}>
        <picture>
          <source srcSet={error404Webp} type="image/webp"/>
          <source srcSet={error404Png} type="image/png" />
          <img src={error404Png} alt="Imagen de error 404 Not Found Page" />
        </picture>
    </div>
  )
}

Image404.propTypes = {
  className: PropTypes.string
}

export default Image404