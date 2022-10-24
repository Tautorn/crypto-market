import { Router } from "https://deno.land/x/oak/mod.ts"

import {
  transactionsList
} from "./controllers/TransactionsController.js"

import {
  coinsTrade,
  coinsCreate,
  coinsList,
  coinsListLunar
} from "./controllers/CoinsController.js"

import {
  walletList
} from "./controllers/WalletController.js"

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
  .post("/coins/:id/trade", coinsCreate)

  .get("/transactions", transactionsList)

  .get("/wallet", walletList)

  .post("/account/deposit", accountDeposit)
  .post("/account/withdraw", accountWithdraw)
  .get("/account", accountBalance)

export default router