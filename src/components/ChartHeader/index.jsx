// styling
import styles from './style.module.scss';

// components
import NumLabel from '@ui/NumLabel';
import PeriodButton, {Button} from '@ui/PeriodButton';

// hooks
import {useWindowSize} from 'react-use';

// utils
import {commaFormatter} from '@utils/helpers';
import PropTypes from 'prop-types';

const ChartHeader = ({data, period, setPeriod, type, setType}) => {
    const {width} = useWindowSize();
    const isCompact = width < 375 || (width >= 1440 && width < 1600);

    return (
        <div>
            <div className="d-flex align-items-end justify-content-between">
                <div className="d-flex flex-column g-8">
                    <h2 className="lh-1">{data.label}</h2>
                    <span className="text-large h2">{commaFormatter(data.price)}</span>
                </div>
                <div className="d-flex flex-column align-items-end g-8">
                    <NumLabel value={data.change} variant="pill"/>
                    <table className={styles.table}>
                        <tbody>
                        <tr>
                            <td className={`${styles.table_property} text-light`}>24 High</td>
                            <td className={`${styles.table_value} text-header`}>{commaFormatter(data.high)}</td>
                        </tr>
                        <tr>
                            <td className={`${styles.table_property} text-light`}>24 Low</td>
                            <td className={`${styles.table_value} text-header`}>{commaFormatter(data.low)}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={styles.wrapper}>
                <button className={styles.button}
                        onClick={() => setType(type === 'mixed' ? 'line' : 'mixed')}
                        aria-label="Change chart type">
                    <IconMixed
                        className={`${styles.button_icon} ${styles.button_candle} ${type === 'mixed' ? styles.button_active : ''}`}/>
                    <IconGraph className={`${styles.button_icon} ${type === 'line' ? styles.button_active : ''}`}/>
                </button>
                <div className={styles.list}>
                    <PeriodButton value="m15" text="15m" selected={period} onClick={setPeriod}/>
                    <PeriodButton value="h1" text="1h" selected={period} onClick={setPeriod}/>
                    <PeriodButton value="h4" text="4h" selected={period} onClick={setPeriod}/>
                    {
                        !isCompact &&
                        <>
                            <PeriodButton value="h12" text="12h" selected={period} onClick={setPeriod}/>
                            <PeriodButton value="day" text="1D" selected={period} onClick={setPeriod}/>
                        </>
                    }
                    <Button>
                        more <i className="icon icon-caret-down"/>
                    </Button>
                </div>
            </div>
        </div>
    )
}

ChartHeader.propTypes = {
    data: PropTypes.object.isRequired,
    period: PropTypes.string.isRequired,
    setPeriod: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    setType: PropTypes.func.isRequired
}

export default ChartHeader