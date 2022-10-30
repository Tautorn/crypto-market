import CoinsRepository from "../repositories/CoinsRepository.js"

export const listLunar = async () => {
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
      logo: String(data.logo)
   }

   await CoinsRepository.create(newCoin)

   return newCoin
}

export const list = async () => {
   let response = await CoinsRepository.selectAll()

   response = response.rows.map(coin => {
      return response.rowDescription.columns.reduce((acc,el, i) => {
         acc[el.name] = coin[i]
         acc['price'] = Math.floor(Math.random() * 10000)
         return acc
      },{})
   })

   return {
      data: response
   }
}
