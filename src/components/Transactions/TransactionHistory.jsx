import { TransactionsItem } from 'components/Transactions-item';
import { PropTypes } from 'prop-types';
import css from './TransactionHistory.module.css';
export function TransactionHistory({ items }) {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(el => (
          <TransactionsItem key={el.id} type={el.type} amount={el.amount} currency={el.currency} />
        ))}
      </tbody>
    </table>
  );
}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
