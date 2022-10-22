import { Router } from "https://deno.land/x/oak/mod.ts"

import coinsList from "./controllers/coins/coinsList.js"
import coinCreate from "./controllers/coins/coinCreate.js"

import transactionsList from "./controllers/transactions/transactionsList.js"

import walletBuy from "./controllers/wallet/walletBuy.js"
import walletSell from "./controllers/wallet/walletSell.js"
import walletList from "./controllers/wallet/walletList.js"

import accountDeposit from "./controllers/account/accountDeposit.js"
import accountWithdraw from "./controllers/account/accountWithdraw.js"
import accountBalance from "./controllers/account/accountBalance.js"



const router = new Router()

router
  .get("/coins", coinsList)
  .post("/coins", coinCreate)
  .post("/transactions", transactionsList)
  .post("/wallet/:id/buy", walletBuy)
  .post("/wallet/:id/sell", walletSell)
  .get("/wallet", walletList)
  .post("/account/deposit", accountDeposit)
  .post("/account/withdraw", accountWithdraw)
  .get("/account", accountBalance)

export default router