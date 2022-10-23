import { create, list } from "../services/coinsService.js"

export const coinCreate = async ({ response }) => {
  response.body = await create()
}

export const coinsList = async ({ response }) => {
  response.body = await list()
}