import walletRepository from "../repositories/walletRepository.js"

export const list = async () => {
   return await walletRepository.selectAll()
}

export const sell = async data => {
   createOperation({ ...data, operation: 'sell'})
   return data
}

export const buy = async data => {
   createOperation({ ...data, operation: 'buy'})
   return data
}

export const createOperation = async data => {
   const operation = {
      coin: String(data.coin),
      total: Number(data.total),
      price: Number(data.price),
      operation: data.operation,
      created_at: new Date()
   }

   await walletRepository.create(operation)

   return operation
}