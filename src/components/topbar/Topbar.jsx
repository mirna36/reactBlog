import "./topbar.css"


export default function Topbar() {
    return (
        <div className="top">
            <div className="topLeft">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
            <i className="topIcon fab fa-instagram-square"></i>
            <i className="topIcon fab fa-pinterest-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">APROPOS</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">POSTER</li>
                    <li className="topListItem">DECONNEXION</li>
                    
                </ul>
            </div>
            <div className="topRight">
                <img className="topImage" src="images/profile.jpg" alt='picture'/>
                <i class="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
