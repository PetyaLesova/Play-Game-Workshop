import { useEffect, useState } from "react"
import * as gameService from "../../services/gameService.js"
import SingleCardDiv from "./SingleCardDiv.jsx"

export default function GameList(){
    const [games, setGames] = useState([])
    useEffect(()=>{
       const result = gameService.getAll()
       .then(setGames)
    },[])
    console.log(games);
    

    return (
        <section id="catalog-page">
            <h1>All Games</h1>

            {games.map(game => <SingleCardDiv key={game._id} data={game}/>)}           
            

           {games.length === 0 &&  <h3 className="no-articles">No articles yet</h3>}
        </section>
    )
}