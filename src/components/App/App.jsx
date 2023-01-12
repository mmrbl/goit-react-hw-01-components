import friends from '../Friends/friends';
import FriendList from '../Friends/FriendsList';
import user from '../Profile/user';
import Usercard from '../Profile/Usercard';
import data from '../Statistics/data';
import StatisticItem from '../Statistics/StatisticItem';
import Statistics from '../Statistics/Statistics';
import TransactionHistory from "../Transactions/TransactionHistory";
import transactions from "../Transactions/transactions";
import { Section } from './App.styled.jsx';

export default function App() {
  return <Section>
    
  <Usercard
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats} />
    
    <Statistics title="Upload stats">
      <StatisticItem stats={data} />
    </Statistics>
    {/* <Statistics >
      <StatisticItem stats={data} />
    </Statistics> */}
  

    <FriendList friends={friends} /> 
    
   
    <TransactionHistory items={transactions}/>
  </Section>
  
};
