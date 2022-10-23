import walletRepository from "../repositories/walletRepository.js"

export const list = async () => {
   return await walletRepository.selectAll()
}

export const buy = async data => {
   const operation = {
      coin: String(data.coin),
      amount: Number(data.amount),
      balance: data.balance,
      updated_at: new Date()
   }

   await walletRepository.create(operation)

   return operation
}

export const sell = async data => {
   const operation = {
      coin: String(data.coin),
      amount: Number(data.amount),
      balance: data.balance,
      updated_at: new Date()
   }

   await walletRepository.create(operation)

   return operation
}