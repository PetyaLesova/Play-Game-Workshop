import {Link} from 'react-router-dom'

export default function Header () {
    return (
        <header>

        {/* // Navigation  */}
        <h1><Link className="home" to="/">GamesPlay</Link></h1>
        <nav>
            <Link to="/games">All games</Link>

            {/* // Logged-in users  */}
            <div id="user">
                <Link to="/games/create">Create Game</Link>
                <Link to="/logout">Logout</Link>
            </div>

            {/* // Guest users  */}
            <div id="guest">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </nav>
    </header>
    )
    // return (
    //     <header>
    //     {/* // Navigation  */}
    //     <h1><a className="home" href="/">GamesPlay</a></h1>
    //     <nav>
    //         <a href="/games">All games</a>
    //         {/* // Logged-in users  */}
    //         <div id="user">
    //             <a href="#">Create Game</a>
    //             <a href="#">Logout</a>
    //         </div>
    //         {/* // Guest users  */}
    //         <div id="guest">
    //             <a href="#">Login</a>
    //             <a href="#">Register</a>
    //         </div>
    //     </nav>
    // </header>
   // )
}