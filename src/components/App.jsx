import { ProfileCard } from './ProfileCard';
import user from './ProfileCard/user.json';
import { Statistics } from './Statistics';
import data from './Statistics/data.json';
import { FriendList } from './FriendList';
import friends from './FriendListItem/friends.json';
import transactions from './Transactions/transactions.json';
import { TransactionHistory } from './Transactions/TransactionHistory';

export function App() {
  return (
    <>
      <ProfileCard
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" array={data} />
      <Statistics array={data} />
      <FriendList array={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
}
