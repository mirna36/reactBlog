import "./login.css"

export default function Login() {
    return (
        <div className="login">
            <span className="loginTitle">Connexion</span>
            <form className="loginForm">
                <input type="text" placeholder="Votre email au forma@"/>
                <input type="passeword" placeholder="mot de passe"/>
                <button className="loginButton">Connexion</button>
            </form>
            <button className="registerButton">Créer un compte</button>
        </div>
    )
}
