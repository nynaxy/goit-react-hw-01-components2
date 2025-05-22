
import Profile from './profile/profile';
import user from './profile/user.json';
import Statistics from './Statistics/Statistics';
import data from './Statistics/data.json';
import FriendList from './FriendList/FriendList';
import friends from './FriendList/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory'
import transactions from './TransactionHistory/transactions.json'

const App = () => {
  return (
    <div>
      <Profile
       username={user.username}
       tag={user.tag}
       location={user.location}
       avatar={user.avatar}
        stats={user.stats} />
      <Statistics title='upload stats' stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions}/>
    </div>
  )
}
export default App;