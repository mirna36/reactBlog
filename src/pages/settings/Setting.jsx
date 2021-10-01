import "./setting.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Setting() {
    return (
        <div className="settings">
            <div className="settingWrapper">
                <div className="settingTitle">
                    <span className="settingUpdateTitle">Modifier compte</span>
                    <span className="settingDeleteTitle">supprimer compte</span>
                </div>
                <form className="settingForm">
                    <label>Image Profile</label>
                    <div className="settingProfilePicture">
                        <img src="images/profile.jpg" alt='picture'/>
                        <label htmlFor="fileInput" className="settingPPDownlaod">Télécharger Image
                        <i class="fas fa-download"></i>
                            
                        </label>
                    </div>
                        <input type="file" id="fileInput" style={{display:"none"}}/>
                        <input type="text" placeholder="Votre nom"/>
                        <input type="text" placeholder="Votre prénom"/>
                        <input type="text" placeholder="Votre email au forma@"/>
                        <input type="passeword" placeholder="mot de passe"/>
                        <button className="settingSubmit">Valider</button>
                    

                </form>
            </div>
            <Sidebar/>
            
        </div>
    )
}
