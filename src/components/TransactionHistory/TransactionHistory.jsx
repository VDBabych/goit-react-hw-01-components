import { Tab, Td, Th, THead, Tr } from './TransactionsHistory.styled';

export function TransactionsHistory({ transactions }) {
  return (
    <Tab>
      <THead>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </THead>

      <tbody>
        {transactions.map(el => (
          <Tr key={el.id}>
            <Td>{el.type}</Td>
            <Td>{el.amount}</Td>
            <Td>{el.currency}</Td>
          </Tr>
        ))}
      </tbody>
    </Tab>
  );
}
