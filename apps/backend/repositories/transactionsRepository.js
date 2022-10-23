import client from "../db/database.js"

class TransactionsRepository {
   create({ coin, total, price, operation }) {
      return client.queryArray
         `INSERT INTO transactions (coin, total, price, operation, created_at) VALUES (${coin}, ${total}, ${price},${operation}. ${new Date()})`;
   }

   selectAll() {
      return client.queryArray`SELECT * FROM transactions ORDER BY created_at`;
   }
}

export default new TransactionsRepository()
