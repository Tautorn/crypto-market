import { list } from "../services/transactionsService.js"

export const transactionsList = async ({ response }) => {
  response.body = await list()
}
