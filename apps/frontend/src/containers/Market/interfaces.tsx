export interface CoinProps {
  id: string
  name: string
  symbol: string
  logo: string
  price: number
}

export interface CoinsProps {
  data: [CoinProps]
}