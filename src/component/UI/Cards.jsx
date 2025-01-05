
import "./Card.css"
export const Card=({movieData})=>{
    const {Poster,imdbID}=movieData;
    return(
       
            <li className="hero-container">
                <div className="main-container">
                    <div className="poster-container">
                        <img src={Poster} className="poster" alt="imdbID"/>
                    </div>
                    <div className="tiket-container">
                        <div className="ticket_content">
                            {/* <NavLink to={`/movie/${imdbID}`}> */}
                                <button className="ticket_buy-btn">
                                    watch now
                                </button>
                            {/* </NavLink> */}
                        </div>
                    </div>
                </div>
            </li>
        
    )
}