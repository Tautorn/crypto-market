import TransactionsRepository from "../repositories/TransactionsRepository.js"

export const list = async () => {
   const response = await TransactionsRepository.selectAll()
   
   if (response.rows.length > 0) {
      response = response.rows.map(value => {
         return response.rowDescription.columns.reduce((acc,el, i) => {
            acc[el.name] = value[i]
            return acc
         },{})
      })
   }

   return {
      data: response
   }
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