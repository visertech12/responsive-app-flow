// components
import CollapsedText from '@components/CollapsedText';

// hooks
import useMeasure from 'react-use-measure';

const FooterText = ({text}) => {
    const [ref, {width}] = useMeasure();
    const placeholder = `
        Justo donec enim diam vulputate ut pharetra. Ut placerat orci nulla pellen. Nulla pellentesque dignissim enim sit.
    `;

    return (
        <div className="text-light" ref={ref}>
            <CollapsedText width={width} text={text ? text : placeholder} withButton={false}/>
        </div>
    )
}

export default FooterText