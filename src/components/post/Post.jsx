import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src="images/famille.jpg" alt=""/>
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Famille</span>
                </div>
                <span className="postTitle">Les bienfaits des respas en famille</span>
                <hr/>
                <span className="postDate">il y a 1h</span>
                <p className="postDescription">
                Les vacances sont l’occasion de se retrouver en famille et de prendre les repas ensemble. 
                Une attitude à encourager. 
                C’est l’un des meilleurs moyens de favoriser une alimentation « santé » et équilibrée.
                Manger ensemble, boire, prendre du plaisir à table… Les repas en famille sont si importants qu’ils sont inscrits au patrimoine culturel immatériel de l’humanité. A raison puisque ces moments conviviaux sont excellents pour la santé. Les études conduites sur le sujet vont toutes dans le même sens.
                Ainsi, un travail mené sur 182 836 enfants et adolescents âgés de 3 à 17 ans nous le rappelle : les personnes qui prennent régulièrement leur repas en famille auraient une meilleure alimentation que les autres et moins de risques d’obésité.
                Chez ceux qui mangent plus de trois fois par semaine avec leur famille, le risque d’excès de poids est ainsi réduit de 12 % et le risque de troubles du comportement alimentaire de 35 %.
                Par ailleurs, lors de ces repas les enfants consomment fruits, légumes, vitamines et grignotent ainsi moins de sucrerie, de fritures et de soda hors des repas.
                Dernière chose, psychologique cette fois, selon une récente étude américaine,  les repas familiaux améliorent le fonctionnement familial, la communication et la résolution de problèmes.

                </p>
            </div>
        </div>
    )
}
