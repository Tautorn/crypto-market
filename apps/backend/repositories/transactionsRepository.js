import client from "../db/database.js"

class TransactionsRepository {
   createBuy({ coin, total, price }) {
      return client.queryArray
         `INSERT INTO transactions (coin, total, price, operation, created_at) VALUES (${coin}, ${total}, ${price}, 'buy', current_timestamp)`;
   }

   createSell({ coin, total, price }) {
      return client.queryArray
         `INSERT INTO transactions (coin, total, price, operation, created_at) VALUES (${coin}, ${total}, ${price}, 'sell', current_timestamp)`;
   }

   selectAll() {
      return client.queryArray`SELECT * FROM transactions ORDER BY created_at`;
   }
}

export default new TransactionsRepository()
