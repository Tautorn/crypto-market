export interface CoinProps {
  id: string
  name: string
  logo: string
  price: number
}

export interface CoinsProps {
  data: [CoinProps]
}

export enum OperationProps {
  buy = 'buy',
  sell = 'sell'
}