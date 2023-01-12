import PropTypes from 'prop-types'
import { TransactionHistoryTable, TransactionHistoryTableBody, TransactionHistoryTableBodyRow, TransactionHistoryTableBodyRowData, TransactionHistoryTableHeader, TransactionHistoryTableHeaderRow, TransactionHistoryTableHeaderRowData } from './TransactionsHistory.styled'

export default function TransactionHistory({ items }) {
  
return <TransactionHistoryTable>
  <TransactionHistoryTableHeader>
    <TransactionHistoryTableHeaderRow>
      <TransactionHistoryTableHeaderRowData>Type</TransactionHistoryTableHeaderRowData>
      <TransactionHistoryTableHeaderRowData>Amount</TransactionHistoryTableHeaderRowData>
      <TransactionHistoryTableHeaderRowData>Currency</TransactionHistoryTableHeaderRowData>
    </TransactionHistoryTableHeaderRow>
  </TransactionHistoryTableHeader>

  <TransactionHistoryTableBody>
      {items.map(({ id, type, amount, currency }) => (
        <TransactionHistoryTableBodyRow key={id}>
          <TransactionHistoryTableBodyRowData>{type}</TransactionHistoryTableBodyRowData>
          <TransactionHistoryTableBodyRowData>{amount}</TransactionHistoryTableBodyRowData>
          <TransactionHistoryTableBodyRowData>{currency}</TransactionHistoryTableBodyRowData>
        </TransactionHistoryTableBodyRow>
      )
    
      )}  
  </TransactionHistoryTableBody>
</TransactionHistoryTable>
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
      }),
  ),
}
