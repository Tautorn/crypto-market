import { Router } from "https://deno.land/x/oak/mod.ts"

import {
  transactionSell,
  transactionBuy,
  transactionsList
} from "./controllers/TransactionsController.js"

import {
  coinsCreate,
  coinsList,
  coinsListLunar
} from "./controllers/CoinsController.js"

import {
  accountDeposit,
  accountBalance,
  accountWithdraw
} from "./controllers/AccountController.js"


const router = new Router()

router
  .get("/coins/lunar", coinsListLunar)
  .get("/coins", coinsList)
  .post("/coins", coinsCreate)  
  .post("/transactions/:id/buy", transactionBuy)
  .post("/transactions/:id/sell", transactionSell)
  .get("/transactions", transactionsList)
  .post("/account/deposit", accountDeposit)
  .post("/account/withdraw", accountWithdraw)
  .get("/account", accountBalance)

export default router