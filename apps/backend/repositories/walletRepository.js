import client from "../db/database.js"

class WalletRepository {
   create(data) {
      return client.queryArray
         `INSERT INTO wallet (coin, total, price, operation, created_at) VALUES (${data.coin}, ${data.total}, ${data.price},${data.operation},${data.created_at})`
   }

   selectAll() {
      return client.queryArray`SELECT * FROM wallet ORDER BY created_at`
   }
}

export default new WalletRepository()
