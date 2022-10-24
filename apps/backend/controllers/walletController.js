import { list } from "../services/walletService.js"

export const walletList = async ({ response }) => {
  response.body = await list()
}
