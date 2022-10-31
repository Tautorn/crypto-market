import TransactionsRepository from "../repositories/TransactionsRepository.js"
import { transformeResponse } from "../helpers/service.js"

export const list = async () => {
   let response = await TransactionsRepository.selectAll()

   response = transformeResponse(response)

   return {
      data: response
   }
}

export const createOperation = async ({ coin, total, price, operation }) => {
   const dataOperation = {
      coin: String(coin),
      total: Number(total),
      price: Number(price)
   }

   if (operation === 'buy') {
      await TransactionsRepository.createBuy(dataOperation)
   }

   if (operation === 'sell') {
      await TransactionsRepository.createSell(dataOperation)
   }

   return {
      data: {
         ...dataOperation,
         operation
      }
   }
}