import { create, list, listLunar, trade } from "../services/CoinsService.js"
import {
  create as walletCreate, 
  update as walletUpdate
} from "../services/WalletService"

export const coinsCreate = async ({ request, response }) => {
  console.log(request)

  const { id, name, logo } = await request.body().value;

  response.body = await create( { id, name, logo })
}

export const coinsList = async ({ response }) => {
  response.body = await list()
}

export const coinsListLunar = async ({ response }) => {
  response.body = await listLunar()
}

export const coinsTrade = async ({ request, params, response }) => {
  const { id, name, logo } = await request.body().value;

  response.body = await trade()
}
