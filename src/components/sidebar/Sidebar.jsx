import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sideBarTitle">APROPOS DE MOI</span>
                <img className="sideBarTitleImg" src="images/about.jpg" alt="photo"/>
                <p>
                    Pour moi <strong>la santé </strong> est « un état de complet bien-être physique, 
                    mental et social, et ne consiste pas seulement en une 
                    absence de maladie ou d'infirmité ».
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sideBarTitle">CATÉGORIES</span>
                <ul className="sideBarList">
                    <li className="sideBarListItem">Famille</li>
                    <li className="sideBarListItem">Allimentation</li>
                    <li className="sideBarListItem">Nature</li>
                    <li className="sideBarListItem">Animaux</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sideBarTitle">SUIVEZ NOUS!</span>
                <div className="sideBarSocial">
                    <i className="sideBarIcon fab fa-facebook-square"></i>
                    <i className="sideBarIcon fab fa-twitter-square"></i>
                    <i className="sideBarIcon fab fa-instagram-square"></i>
                    <i className="sideBarIcon fab fa-pinterest-square"></i>
                </div>
                
            </div>
        </div>
    )
}
