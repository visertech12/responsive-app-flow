// components
import {Responsive, WidthProvider} from 'react-grid-layout';
import {withSize} from 'react-sizeme';

// layouts
import layouts from '../layouts';

// hooks
import {useThemeProvider} from '@contexts/themeContext';
import {useWindowSize} from 'react-use';

// utils
import PropTypes from 'prop-types';

const ResponsiveGridLayout = withSize({refreshMode: 'debounce'})(WidthProvider(Responsive));

const AppGrid = ({widgets, id}) => {
    const {fontScale} = useThemeProvider();
    const {width} = useWindowSize();
    const breakpoints = {
        xxs: width < 375,
        xs: width >= 375 && width < 414,
        sm: width >= 414 && width < 768,
        md: width >= 768 && width < 1280,
        lg: width >= 1280 && width < 1440,
        xl: width >= 1440
    }

    return (
        <ResponsiveGridLayout
            className="layout"
            layouts={layouts[id]}
            breakpoints={breakpoints}
            cols={{xl: 4, lg: 3, md: 2, sm: 1, xs: 1, xxs: 1}}
            rowHeight={fontScale === 1 ? 205 : 205 + (fontScale * 3)}
            isDraggable={false}
            isResizable={false}
            margin={[16, 40]}
            useCSSTransforms={false}
        >
            {
                Object.keys(widgets).map(widget => (
                    <div key={widget}>
                        {widgets[widget]}
                    </div>
                ))
            }
        </ResponsiveGridLayout>
    )
}

AppGrid.propTypes = {
    widgets: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired
}

export default AppGrid