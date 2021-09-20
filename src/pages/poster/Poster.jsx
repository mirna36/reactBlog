import "./poster.css"

export default function Poster() {
    return (
        <div className="poster">
            <img className="posterImg" src="images/nature.jpg" alt="image"/>
            <form className="posterForm">
                <div className="posterFormGroup">
                    <label htmlFor="fileInput"> <i className="posterIcon fas fa-images"> Télécharger une image</i></label>
                    <input type="file" id="fileInput" style={{display:"none"}}></input>
                    <input type="text" placeholder="Titre" className="posterInput" autoFocus={true}></input>
                </div>
                <div className="posterFormGroup">
                    <textarea className="posterInput writeText" placeholder="Ecrivez votre article ici..." type="text"></textarea>
                </div>
                <button className="writeSubmit">Poster</button>

            </form>
            
        </div>
    )
}
