import { getCoins } from "../services/coins.service.js"

export default async ({ response }) => {
  response.body = await getCoins()
}