import client from "../db/database.js"

class CoinsRepository {
   create({ id, name, logo }) {
      return client.queryArray
         `INSERT INTO coins (id, name, logo, created_at) VALUES (${id}, ${name}, ${logo}, ${new Date()})`
   }

   selectAll() {
      return client.queryArray`SELECT * FROM coins ORDER BY id`
   }
}

export default new CoinsRepository()