import { useCallback, useEffect, useState } from "react"
import { Account } from "../../components/Account"
import { CoinsProps, CoinProps, OperationProps } from './interfaces'
import { Transactions } from '../../components/Transactions'
import RefreshIconPath from '../../assets/refresh.png'

const Market = () => {
  const [coins, setCoins] = useState<CoinsProps>()
  const [trade, setTrade] = useState([{}])

  const fetchData = useCallback(async () => {
      const data = await fetch(`${process.env.REACT_APP_API_URL}/coins`)
      const json = await data.json()

      setCoins(json)
  }, [])


  useEffect(() => {
    fetchData().catch(console.error)
  }, [fetchData])

  const tradeSetController =  useCallback((id: string, total: string) => {
    setTrade((prev) => ({
      ...prev,
      [String(id)]: Number(total)
    }))
  }, [])

  const handleChangeTotal = (id: string, total: string) => {
    tradeSetController(id, total)
  }

  const handleTransaction = async (id: string, price: number, operation: OperationProps) => {
    const total = trade[id]
    const data = {
      price,
      total
    }

    await fetch(`${process.env.REACT_APP_API_URL}/transactions/${id}/${operation}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) 
    })
    .then(() => {
      tradeSetController(id, '0')
    })
  }

  const renderCoin = ({ id, name, logo, price }: CoinProps) => {
    const disabled = !trade[id]

    return (
      <tr key={`crypto-${id}`}>
        <th>
          <img src={logo} alt={`coin-${name}`} height="36px" />
        </th>
        <th>
          {name}
        </th>
        <td>{id}</td>
        <td>$ {price}</td>
        <td>
          <input
            onChange={({ target }) => handleChangeTotal(id, target.value )}
            name={`coin-${name}`}
            type="number"
            style={{ width: "50px" }}
            placeholder="0"
            min="0"
            max="100"
            value={trade[id] || '0'}
          />
        </td>
        <td>
          <button
            disabled={disabled}
            className="button button--primary"
            onClick={() => handleTransaction(id, price, OperationProps.buy)}
          >
            Comprar
          </button>
        </td>
        <td>
          <button
            disabled={disabled}
            className="button button--secondary"
            onClick={() => handleTransaction(id, price, OperationProps.sell)}
          >
            Vender
          </button>
        </td>
      </tr>
    )
  }

  return (
    <div className="container">
      <div className="col">
        <div className="content-header">
          <h2>Crypto Market</h2>
          <img className="refresh" src={RefreshIconPath} alt="atualizar" onClick={fetchData} />
        </div>
        <table>
          <thead>
            <tr>
              <th scope="col" />
              <th scope="col">Moeda</th>
              <th scope="col">Símbolo</th>
              <th scope="col">Preço</th>
              <th scope="col">Quantidade</th>
              <th scope="col">Comprar</th>
              <th scope="col">Vender</th>
            </tr>
          </thead>
          <tbody>
            {coins?.data?.map(renderCoin)}
          </tbody>
        </table>
      </div>
      <div className="col">
        <Account />
        <Transactions />
      </div>
    </div>
  )
}

export default Market
