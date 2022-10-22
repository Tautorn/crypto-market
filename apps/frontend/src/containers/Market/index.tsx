import { useEffect, useState } from "react"
import { Wallket } from "../../components/Wallet"
import { CoinsProps, CoinProps } from './interfaces'
import './market.css'

const Market = () => {
  const [coins, setCoins] = useState<CoinsProps>()
  const [total, setTotal] = useState<number>(0)


  useEffect(() => {

    const fetchData = async () => {
      console.log(process.env)
      const data = await fetch(`${process.env.REACT_APP_API_URL}/coins`, {
        method: 'GET' 
      })
      const json = await data.json()
      setCoins(json)
    }

    fetchData()
      .catch(console.error)

  }, [])

  const renderCoin = ({ id, name, symbol, logo, price }: CoinProps) => {
    return (
      <tr key={`crypto-${id}`}>
        <th scope="row">
          <img src={logo} alt={`coin-${name}`} height="36px" /> {name}
        </th>
        <td>{symbol}</td>
        <td>$ {price}</td>
        <td><button>Comprar</button></td>
        <td><button className="button--sell">Vender</button></td>
        <td>
          <input name="total" type="number" style={{width: "50px"}} placeholder="0" min="0" max="100" />
        </td>
        <td>
          {total}
        </td>
      </tr>
    )
  }

  return (
    <div className="container">
      <div className="col">
        <h2>Crypto Market</h2>
        <table>
          <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">Símbolo</th>
              <th scope="col">Preço</th>
              <th scope="col"><a>Comprar</a></th>
              <th scope="col"><a>Vender</a></th>
              <th scope="col"><a>Quantidade</a></th>
              <th scope="col"><a>Total</a></th>
            </tr>
          </thead>
          <tbody>
            {coins?.data?.map(renderCoin)}
          </tbody>
        </table>
      </div>
      <div className="col">
        <Wallket />
      </div>
    </div>
  )
}

export default Market
