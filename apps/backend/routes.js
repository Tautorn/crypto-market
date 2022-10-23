import { Router } from "https://deno.land/x/oak/mod.ts"

import {
  transactionsList
} from "./controllers/transactionsController.js"

import {
  coinCreate,
  coinsList,
  coinsListLunar
} from "./controllers/coinsController.js"

import {
  walletBuy,
  walletSell,
  walletList
} from "./controllers/walletController.js"

import {
  accountDeposit,
  accountBalance,
  accountWithdraw
} from "./controllers/accountController.js"


const router = new Router()

router
  .get("/coins/lunar", coinsListLunar)
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