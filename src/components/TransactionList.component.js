import { DataTable } from "."

export default function TransactionList({ transactions }) {
  return <DataTable items={transactions} />
}
