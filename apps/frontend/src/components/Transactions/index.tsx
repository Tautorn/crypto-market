import { useCallback, useEffect, useState } from "react"
import { TransactionsProps, TransactionProps } from './interfaces'
import RefreshIconPath from '../../assets/refresh.png'
import './style.css'

export const Transactions = () => {
  const [transactions, setTransactions] = useState<TransactionsProps>()
  
  const fetchData = useCallback(async () => {
      const data = await fetch(`${process.env.REACT_APP_API_URL}/transactions`)
      const json = await data.json()
      
      setTransactions(json)
  }, [])

  useEffect(() => {
    fetchData()
      .catch(console.error)
  }, [fetchData])

  const renderTransactions = ({ id, coin, total, price, operation, created_at }: TransactionProps) => {
    const operationText = operation === 'buy' ? 'compra' : 'venda'
    const operationClass = operation === 'buy' ? 'operation--buy' : 'operation--sell'

    return (
      <tr key={`transaction-${id}`}>
        <td>{coin}</td>
        <td>{total}</td>
        <td>$ {price}</td>
        <td className={operationClass}>
          {operationText}
        </td>
        <td>{created_at}</td>
      </tr>
    )
  }

  return (
    <div>
      <div className="content-header">
        <h2>Transações</h2>
        <img className="refresh" src={RefreshIconPath} alt="atualizar" onClick={fetchData} />
      </div>
      <table className="table-transactions">
          <thead>
            <tr>
              <th scope="col">Moeda</th>
              <th scope="col">Quantidade</th>
              <th scope="col">Preço</th>
              <th scope="col">Operação</th>
              <th scope="col">Data</th>
            </tr>
          </thead>
          <tbody>
            {transactions?.data?.map(renderTransactions)}
          </tbody>
        </table>
    </div>
   
  )
}

export default Transactions

