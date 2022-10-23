import TransactionsRepository from "../repositories/TransactionsRepository.js"

export const list = async () => {
   return await TransactionsRepository.selectAll()
}

export const sell = async data => {
   createOperation({ ...data, operation: 'sell'})
   return data
}

export const buy = async data => {
   createOperation({ ...data, operation: 'buy'})
   return data
}

const createOperation = async data => {
   const operation = {
      coin: String(data.coin),
      total: Number(data.total),
      price: Number(data.price),
      operation: data.operation,
      created_at: new Date()
   }

   await TransactionsRepository.create(operation)

   return operation
}