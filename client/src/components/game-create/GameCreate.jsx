import * as gameService from '../../services/gameService.js'
import { useNavigate } from 'react-router-dom'

export default function GameCreate(){
    const navigate = useNavigate()

    const createGameSubmitHandler = async(e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const gameData = Object.fromEntries(formData)  //title, category, maxLevel, imageUrl, summary
        console.log(gameData);

        await gameService.create(gameData)
         navigate('/games')
        
        // try {
        //     await gameService.create(gameData)
        //     navigate('/games')
        // } catch (error) {
        //     console.log(error);
        // }

    }
    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={createGameSubmitHandler}>
                <div className="container">

                    <h1>Create Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" placeholder="Enter game title..."/>

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" placeholder="Enter game category..."/>

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1"/>

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..."/>

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary"></textarea>
                    <input className="btn submit" type="submit" value="Create Game"/>
                </div>
            </form>
        </section>
    )
}