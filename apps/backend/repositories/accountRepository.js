import client from "../db/database.js"

class AccountRepository {
   selectAll() {
      return client.queryArray`SELECT balance FROM account`
   }

   updateDeposit(amount) {
      return client.queryArray`
         update account 
         set balance = (select sum(balance) from account) + ${amount}, updated_at = ${new Date()}`
   }

   updateWithdraw(amount) {
      return client.queryArray`
         update account 
         set balance = (select sum(balance) from account) - ${amount}, updated_at = ${new Date()}`
   }
}

export default new AccountRepository()
