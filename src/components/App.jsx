import { ProfileCard } from './Profile-card';
import user from './Profile-card/user.json';
import { Statistics } from './Statistics';
import data from './Statistics/data.json';
import { FriendList } from './FriendList';
import { FriendistItem } from './FriendListItem/';
import friends from './FriendListItem/friends.json';

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
    </>
  );
}
// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
