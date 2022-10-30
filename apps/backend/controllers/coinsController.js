import { create, list, listLunar } from "../services/CoinsService.js"

export const coinsCreate = async ({ request, response }) => {
  const { id, name, logo } = await request.body().value

  response.body = await create( { id, name, logo })
}

export const coinsList = async ({ response }) => {
  response.body = await list()
}

export const coinsListLunar = async ({ response }) => {
  response.body = await listLunar()
}

