import walletRepository from "../repositories/walletRepository.js"

export const getWallet = async id => {
   return await walletRepository.selectById(id)
}

export const list = async () => {
   return await walletRepository.selectAll()
}

export const update = async data => {
   const data = {
      coin: String(data.coin),
      amount: Number(data.amount),
      balance: data.balance
   }

   await walletRepository.update(data)

   return data
}

export const create = async data => {
   const data = {
      coin: String(data.coin),
      amount: Number(data.amount),
      balance: data.balance
   }

   await walletRepository.create(data)

   return data
}