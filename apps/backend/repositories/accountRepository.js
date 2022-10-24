import client from "../db/database.js"

class AccountRepository {
   selectAll() {
      return client.queryArray`SELECT * FROM account ORDER BY id`
   }

   update(balance) {
      return client.queryArray`UPDATE account SET balance = ${balance}, updated_at = ${new Date()}`
   }
}

export default new AccountRepository()
