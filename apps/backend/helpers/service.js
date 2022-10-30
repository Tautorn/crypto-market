export const transformeResponse = (response) => {
  return response.rows.map(coin => {
    return response.rowDescription.columns.reduce((acc,el, i) => {
       acc[el.name] = coin[i]
       return acc
    },{})
  })
}