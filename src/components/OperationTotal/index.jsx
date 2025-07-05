// styling
import styles from './style.module.scss';

// utils
import PropTypes from 'prop-types';

const OperationTotal = ({value = 0, fee = 0.1, currency = 'USD'}) => {
    const total = value ? value * (1 + fee / 100) : 0;

    return (
        <div className={styles.container}>
            <div className="d-flex justify-content-between border-bottom pb-8">
                <span className="text-light">Fee:</span>
                <span className="text-header">{fee}%</span>
            </div>
            <div className="d-flex justify-content-between">
                <span className="text-light">Amount received:</span>
                <span className="text-header">{total} {currency}</span>
            </div>
        </div>
    )
}

OperationTotal.propTypes = {
    value: PropTypes.number,
    fee: PropTypes.number,
    currency: PropTypes.string,
}

export default OperationTotal