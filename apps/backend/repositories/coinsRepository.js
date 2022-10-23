import client from "../db/database.js"

class CoinsRepository {
   create(data) {
      return client.queryArray
         `INSERT INTO coins (id, name, logo, created_at) VALUES (${data.id}, ${data.name}, ${data.logo},${data.create_at})`
   }

   selectAll() {
      return client.queryArray`SELECT * FROM coins ORDER BY id`
   }
}

export default new CoinsRepository()