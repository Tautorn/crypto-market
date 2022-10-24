import client from "../db/database.js"

class WalletRepository {
   create({ coin, amount, balance }) {
      return client.queryArray
         `INSERT INTO wallet (coin, amount, balance, updated_at)
            VALUES (${coin}, ${amount}, ${balance}, current_timestamp)`
   }

   update({ coin, amount, balance }) {
      return client.queryArray
         `UPDATE  wallet 
            SET amount = ${amount}, balance = ${balance}, updated_at = current_timestamp
          WHERE coin = ${coin}`
   }

   selectAll() {
      return client.queryArray`SELECT * FROM wallet ORDER BY created_at`
   }

   selectById(id) {
      return client.queryArray`SELECT * FROM wallet WHERE id = ${id}`
   }
}

export default new WalletRepository()
