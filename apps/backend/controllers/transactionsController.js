import { list } from "../services/TransactionsService.js"

export const transactionsList = async ({ response }) => {
  const foundTransactions = await list()

  if (!foundTransactions.rows) {
    response.status = 404
    response.body = { msg: `Transactions not found` }
    return
  }

  response.body = await list()
}
