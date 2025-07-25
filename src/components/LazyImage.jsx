// components
import {LazyLoadImage} from 'react-lazy-load-image-component';

// styles
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/blur.css';

// utils
import PropTypes from 'prop-types';

const LazyImage = ({src, alt, effect = 'blur', ...props}) => {
    return (
        <LazyLoadImage
            src={src}
            alt={alt}
            effect={effect}
            wrapperClassName={props.className || "lazy-image-wrapper"}
            {...props}
        />
    );
}

LazyImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    effect: PropTypes.oneOf(['blur', 'opacity'])
}

export default LazyImage