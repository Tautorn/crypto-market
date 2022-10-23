import accountRepository from "../repositories/accountRepository.js"

export const balance = async () => {
   return await accountRepository.selectAll()
}

export const withdraw = async data => {
   createOperation({ ...data, operation: 'sell'})
   return data
}

export const deposit = async data => {
   accountOperation({ ...data, operation: 'buy'})
   return data
}

const accountOperation = async data => {
   const operation = {
      coin: String(data.coin),
      total: Number(data.total),
      price: Number(data.price),
      operation: data.operation,
      created_at: new Date()
   }

   await accountRepository.create(operation)

   return operation
}