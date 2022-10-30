import walletRepository from "../repositories/walletRepository.js"

export const getWallet = async id => {
   return await walletRepository.selectById(id)
}

export const list = async () => {
   return await walletRepository.selectAll()
}

export const update = async data => {
   const dataToUpdate = {
      coin: String(data.coin),
      amount: Number(data.amount),
      balance: data.balance
   }

   await walletRepository.update(dataToUpdate)

   return data
}

export const create = async data => {
   const dataToUpdate = {
      coin: String(data.coin),
      amount: Number(data.amount),
      balance: data.balance
   }

   await walletRepository.create(dataToUpdate)

   return data
}