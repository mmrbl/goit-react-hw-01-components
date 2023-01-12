import styled from "@emotion/styled";

export const TransactionHistoryTable = styled.table`
text-align: center;
width: calc(1200px / 2);
box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
`

export const TransactionHistoryTableHeader = styled.thead`
`

export const TransactionHistoryTableHeaderRow = styled.tr`
background-color: #00bcd5;
`

export const TransactionHistoryTableHeaderRowData = styled.th`
color: White;
font-size: 24px;
font-weight: 700;
padding: 5px 15px
`

export const TransactionHistoryTableBody = styled.tbody``

export const TransactionHistoryTableBodyRow = styled.tr`
&:nth-child(odd){
  background-color: #ecf1f3;
}`

export const TransactionHistoryTableBodyRowData = styled.td`
font-size: 14px;
font-weight: 500;
color: #6e6f72;
padding: 5px 0;

`