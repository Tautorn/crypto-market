import { list, createOperation } from "../services/TransactionsService.js"

export const transactionsList = async ({ response }) => {
  const foundTransactions = await list()

  response.body = foundTransactions
}

export const transactionSell = async ({ request, params, response }) => {
  const { id } = params
  const { total, price } = await request.body().value

  response.body = await createOperation({ coin: id, total, price, operation: "sell" })
}

export const transactionBuy = async ({ request, params, response }) => {
  const { id } = params
  const { total, price } = await request.body().value

  response.body = await createOperation({ coin: id, total, price, operation: "buy" })
}