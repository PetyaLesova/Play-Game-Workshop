const baseUrl = 'http://localhost:3000/jsonstore'

export const create =async (gameData) => {
    const response = fetch(`${baseUrl}/games`,{
        method: 'POST',
        headers: {
            'Content-Type':'A ppliction/json'
        },
        body: JSON.stringify(gameData)
    })
    const result = await response.json()
    return result
}