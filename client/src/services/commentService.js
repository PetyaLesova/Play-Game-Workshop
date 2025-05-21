import { request } from "../lib/request.js"

const baseUrl = 'http://localhost:3030/jsonstore/comments'

export const getAll = async()=>{
    const query = new URLSearchParams({
        where: `gameId ="${gameId}"`
    })
    const result = await request('GET', `${baseUrl}`)
    //TODO: temp solution
    return Object.values(result).filter(comment => comment.gameId === gameId)
    
}

export const create = async (gameId, username, text) =>{
    const newComment = await request('POST', baseUrl, {gameId, username, text})
    return newComment
}
