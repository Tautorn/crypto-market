import { balance, withdraw, deposit } from "../services/accountService"

export const accountBalance = async ({ response }) => {
  response.body = await balance()
}

export const accountWithdraw = async ({ response }) => {
  response.body = await deposit()
}

export const accountDeposit = async ({ response }) => {
  response.body = await withdraw()
}
