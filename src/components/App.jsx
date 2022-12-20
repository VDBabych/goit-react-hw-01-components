import user from 'data/user';
import data from 'data/data';
import friends from 'data/friends';
import transactions from 'data/transactions';

import { GlobalStyleComponent } from 'styles/GlobalStyles';
import { Container } from './Container/Container.styled';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './FriendsList/FriendsList';
import { TransactionsHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
      <Container>
        <Profile {...user} />
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
        <FriendsList friends={friends} />
        <TransactionsHistory transactions={transactions} />
        <GlobalStyleComponent />
      </Container>
  );
};
