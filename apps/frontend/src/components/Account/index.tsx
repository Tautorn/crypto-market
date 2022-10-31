import { useCallback, useEffect, useState } from "react"
import './style.css'

export const Account = () => {
  const [balance, setBalance] = useState()
  const [amount, setAmount] = useState<string>()

  const clearAmount = () => {
    setAmount('')
  }
  
  const fetchData = useCallback(async () => {
    const data = await fetch(`${process.env.REACT_APP_API_URL}/account`)
    const json = await data.json()
    
    setBalance(json.data.balance)
  }, [])

  const handleDeposit = async () => {
    await fetch(`${process.env.REACT_APP_API_URL}/account/deposit`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ amount })
    })
    .then(fetchData)
    .then(clearAmount)
  }

  const handleWithdraw = async () => {
    await fetch(`${process.env.REACT_APP_API_URL}/account/withdraw`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ amount }) 
    })
    .then(fetchData)
    .then(clearAmount)
  }

  useEffect(() => {
    fetchData()
      .catch(console.error)
  }, [fetchData])

  return (
    <div>
      <h2>Account</h2>
      <div>Total na conta: $ {balance}</div>
      <div>
        <label htmlFor="account">Operação:</label>
        <input
          name="account"
          className="account-input"
          onChange={(event) => setAmount(event.target.value)}
          value={amount || '0'}
        />
      </div>
      <div className="account-buttons">
        <button className="button button--primary" onClick={handleDeposit}>Depositar</button>
        <button className="button button--secondary" onClick={handleWithdraw} style={{ marginLeft: "15px" }}>Retirar</button>
      </div>
      <br />
    </div>
   
  )
}

export default Account

