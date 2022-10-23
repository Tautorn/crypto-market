import coinRepository from "../repositories/coinRepository.js";

export const list = async () => {
   const data = await fetch(`https://lunarcrush.com/api3/coins/list`, {
      method: 'GET',
      mode: 'cors',
      headers: {
         'Authorization': 'Bearer 1mtmnwd254vuwtlyc4thlcqqscl9hoxfhwstkw60d'
      }
   })
   
   const json = await data.json()

   const filteredCoins = json.data.slice(0, 10)

   const simulatedCoins = filteredCoins.map(coin => ({
      ...coin,
      price: Math.floor(Math.random() * 10000)
   }))

   return {
      data: simulatedCoins
   }
}

export const create = async data => {
   const newCoin = {
      id: String(data.id),
      name: String(data.name),
      logo: String(data.logo),
      created_at: new Date()
   };

   await coinRepository.create(newCoin)

   return newCoin.id
}