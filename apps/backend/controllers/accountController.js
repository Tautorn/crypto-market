import { balance, withdraw, deposit } from "../services/accountService.js"

export const accountBalance = async ({ response }) => {
  response.body = await balance()
}

export const accountWithdraw = async ({ response, request }) => {
  const { amount } = await request.body().value
  response.body = await withdraw(amount)
}

export const accountDeposit = async ({ response, request }) => {
  const { amount } = await request.body().value
  response.body = await deposit(amount)
}
