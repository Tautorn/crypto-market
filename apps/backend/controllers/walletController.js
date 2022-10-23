import { buy, sell, list } from "../services/walletService.js"

export const walletBuy = async ({ response }) => {
  response.body = await buy()
}

export const walletSell = async ({ response }) => {
  response.body = await sell()
}

export const walletList = async ({ response }) => {
  response.body = await list()
}
