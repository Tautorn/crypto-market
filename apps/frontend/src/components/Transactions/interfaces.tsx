export interface TransactionProps {
  id: string
  coin: string
  total: number
  price: number
  operation: string
  created_at: string
}

export interface TransactionsProps {
  data?: [TransactionProps]
}