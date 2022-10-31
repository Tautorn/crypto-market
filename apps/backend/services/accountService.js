import accountRepository from "../repositories/accountRepository.js"
import { transformeResponse } from "../helpers/service.js"

export const balance = async () => {
   let response =  await accountRepository.selectOne()

   response = transformeResponse(response)

   return {
      data: response[0]
   }
}

export const deposit = async (amount) => {
   await accountRepository.updateDeposit(amount)
   
   return {
      msg: `Deposit value $ ${amount} has been completed`
   }
}

export const withdraw = async (amount) => {
   await accountRepository.updateWithdraw(amount)
   
   return {
      msg: `Withdraw value $${amount} has been completed`
   }
}