import client from "../db/database.js"

class CoinsRepository {
   create({ id, name, logo }) {
      return client.queryArray
         `INSERT INTO coins (id, name, logo, created_at) VALUES (${id}, ${name}, ${logo}, current_timestamp)`
   }

   selectAll() {
      return client.queryArray`SELECT id, name, logo, created_at FROM coins ORDER BY id`
   }
}

export default new CoinsRepository()