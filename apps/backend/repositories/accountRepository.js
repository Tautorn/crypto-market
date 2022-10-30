import client from "../db/database.js"

class AccountRepository {
   selectAll() {
      return client.queryArray`SELECT balance FROM account`
   }

   updateDeposit(amount) {
      return client.queryArray`
         UPDATE account 
           SET balance = (SELECT sum(balance) FROM account) + ${amount}, updated_at = current_timestamp}`
   }

   updateWithdraw(amount) {
      return client.queryArray`
         UPDATE account 
           SET balance = (SELECT sum(balance) FROM account) - ${amount}, updated_at = current_timestamp}`
   }
}

export default new AccountRepository()
