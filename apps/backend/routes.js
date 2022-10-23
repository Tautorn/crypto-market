import { Router } from "https://deno.land/x/oak/mod.ts"

import {
  transactionsList
} from "./controllers/TransactionsController.js"

import {
  coinCreate,
  coinsList,
  coinsListLunar
} from "./controllers/CoinsController.js"

import {
  walletBuy,
  walletSell,
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
  .post("/coins", coinCreate)
  .get("/transactions", transactionsList)
  .post("/wallet/:id/buy", walletBuy)
  .post("/wallet/:id/sell", walletSell)
  .get("/wallet", walletList)
  .post("/account/deposit", accountDeposit)
  .post("/account/withdraw", accountWithdraw)
  .get("/account", accountBalance)

export default router