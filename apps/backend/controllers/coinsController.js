import { create, list, listLunar } from "../services/CoinsService.js"
import { createOperation as transactionsCreateOperation } from "../services/TransactionsService.js"
import {
  create as walletCreate, 
  update as walletUpdate
} from "../services/WalletService.js"

export const coinsCreate = async ({ request, response }) => {
  console.log(request)

  const { id, name, logo } = await request.body().value

  response.body = await create( { id, name, logo })
}

export const coinsList = async ({ response }) => {
  response.body = await list()
}

export const coinsListLunar = async ({ response }) => {
  response.body = await listLunar()
}

export const coinsSell = async ({ request, params, response }) => {
  const { id } = params
  const { amount, price } = await request.body().value

  response.body = coinsOperationTrade({ id, operation: "sell", amount, price  })

  // response.body = await trade({ id, currentPrice, amount, operation })
}


export const coinsBuy = async ({ request, params, response }) => {
  const { id } = params
  const { amount, price } = await request.body().value

  response.body = coinsOperationTrade({ id, operation: "buy", amount, price  })

  // response.body = await trade({ id, currentPrice, amount, operation })
}

const coinsOperationTrade = async ({ id, amount, currentPrice, operation }) => {
  const dataOperation = {
    coin: id,
    total: amount,
    price: currentPrice,
    operation
  }

  return await transactionsCreateOperation(dataOperation)

  // response.body = await trade({ id, currentPrice, amount, operation })
}