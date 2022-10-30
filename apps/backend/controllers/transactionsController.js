import { list, createOperation } from "../services/TransactionsService.js"

export const transactionsList = async ({ response }) => {
  const foundTransactions = await list()

  if (!foundTransactions.rows) {
    response.status = 404
    response.body = { msg: `Transactions not found` }
    return
  }

  response.body = await list()
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