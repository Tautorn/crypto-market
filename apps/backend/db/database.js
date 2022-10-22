import { Client } from "https://deno.land/x/postgres/mod.ts"

class Database {
  constructor() {
    this.connect()
  }

  async connect() {
   this.client = new Client({
      user: "postgres",
      database: "crypto_market",
      hostname: "127.0.0.1",
      password: "admin",
      port: 5432
    })

    await this.client.connect()
  }
}

export default new Database().client