import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImg" src="images/famille.jpg" alt="photo"/>
                <h1 className="singlePostTitle">Les bienfaits d'un repas en famille
                    <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor"> Auteur: <b>Mirna Ndombe</b></span>
                    <span className="singlePostDate"> Il y'a 1h</span>
                </div>
                <p className="singlePostDescription">
                    <p>Les vacances sont l’occasion de se retrouver en famille et de prendre les repas ensemble. 
                    Une attitude à encourager. 
                    C’est l’un des meilleurs moyens de favoriser une alimentation « santé » et équilibrée.
                    Manger ensemble, boire, prendre du plaisir à table… Les repas en famille sont si importants 
                    qu’ils sont inscrits au patrimoine culturel immatériel de l’humanité. A raison puisque ces 
                    moments conviviaux sont excellents pour la santé. Les études conduites sur le sujet vont toutes dans le même sens.
                    Ainsi, un travail mené sur 182 836 enfants et adolescents âgés de 3 à 17 ans nous le rappelle : 
                    les personnes qui prennent régulièrement leur repas en famille auraient une meilleure alimentation que les autres et moins de risques d’obésité.
                    Chez ceux qui mangent plus de trois fois par semaine avec leur famille, le risque d’excès de 
                    poids est ainsi réduit de 12 % et le risque de troubles du comportement alimentaire de 35 %.
                    Par ailleurs, lors de ces repas les enfants consomment fruits, légumes, vitamines et grignotent 
                    ainsi moins de sucrerie, de fritures et de soda hors des repas.
                    Dernière chose, psychologique cette fois, selon une récente étude américaine,  les repas 
                    familiaux améliorent le fonctionnement familial, la communication et la résolution de problèmes.
                    En effet, ils permettent un meilleur développement de l’enfant sur les plans affectif, 
                    physique et moteur, social et moral, cognitif et langagier.
                    </p>

                    <h3>Voici 6 avantages que vous ne soupçonniez pas sur la prise de repas en famille.</h3>
                    
                    <h4>1. Les repas en famille favorisent une alimentation saine et équilibrée, et diminueraient ainsi les risques d’embonpoint et d’obésité.</h4>
                    
                    <p>Ne bénéficiant pas de l’encadrement parental, un jeune qui mange en solitaire optera plutôt pour un repas facile, 
                    rapide et moins nutritif. Les enfants et adolescents qui mangent régulièrement en famille consomment davantage de fruits 
                    et légumes, de lait et substituts, et de produits à grains entiers. Ils consomment également moins d’aliments prêts-à-manger ou frits, 
                    de boissons sucrées, de sucreries et de matières grasses.   
                    </p>
                    
                    <h4>2. Les repas en famille entraînent des comportements de vie et alimentaires plus appropriés.</h4>
                    
                    <p>En prenant le temps de s’arrêter pour manger ensemble, on favorise la prise plus fréquente d’un déjeuner, 
                    en plus de diminuer les risques de troubles alimentaires et de troubles de consommation de drogue ou d’alcool.
                    Le soutien affectif ressenti lors des repas en famille diminue le risque d’anxiété et augmente le sentiment de 
                    sécurité qui aide à mieux gérer ce type de comportement. Les repas en famille renforcent le lien affectif entre 
                    l’enfant et le parent, favorisent le support familial et la communication, ce qui est bénéfique pour réduire ce type 
                    de comportement (anxiété, dépression, consommation, etc.).
                    </p>
                    
                    <h4>3. Les repas en famille favorisent une meilleure cohésion familiale.</h4>
                    <p>Ces moments permettent de nouer de meilleures relations entre les membres de la famille, en renforçant le 
                    sentiment d’appartenance et les valeurs familiales, ainsi qu’en diminuant le stress et les tensions.
                    </p>
                    
                    <h4>4. Les repas en famille favorisent la communication</h4>
                    <p>Les repas en famille augmentent les échanges. Ils rapprochent les adolescents et leurs parents. Ces échanges 
                    sont d’autant plus précieux puisqu’il arrive souvent que les enfants établissent une distance avec leurs parents à l’adolescence.
                    </p>
                    
                    <h4>5. Les repas en famille favorisent la réussite scolaire</h4>
                    <p>À long terme, le soutien affectif ressenti lors des repas en famille diminue les risques de décrochage scolaire. 
                    Bien manger a un impact positif sur la réussite scolaire.
                    Le contexte privilégié d’interactions entre parents et adolescents lors des repas en famille favorise la réussite scolaire. 
                    Un contexte de repas agréable où le parent est à l’écoute de son enfant, sensible à ses besoins, crée un environnement protecteur 
                    qui aurait un impact positif chez le jeune et favoriserait ainsi la réussite scolaire. Une étude réalisée au Québec montre en effet des 
                    résultats plus élevés en mathématique et en français.
                    </p>
                    
                    <h4>6. Les repas en famille favorisent l’estime de soi</h4>
                    <p>Impliquer son enfant dans le choix des repas, dans leur préparation, lui demander son aide pour mettre la table tout en 
                    lui montrant notre appréciation fait aussi en sorte d’augmenter son estime de soi.
                    De plus, un climat agréable lors des repas apporte réconfort et sécurité. Ces moments de plaisir à échanger ensemble ont un impact 
                    sur l’estime personnelle de l’enfant, sa confiance, son sentiment de sécurité, sa façon de communiquer et sa créativité.
                    </p>
                </p>
                


            </div>

    
            
        </div>
    )
}
