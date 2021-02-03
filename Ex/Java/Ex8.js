function texte()
{
    /*
    -rouge au passage de la souris ;
    -citron vert (lime) en réponse à un click ;
    -bleu marine (navy) en réponse à un double click.
    */

    var phrase = document.getElementById("phrase") //l'id du texte est stocké dans la variable var phrase
    //utililser la variable pour définir le texte sur les events

    phrase.addEventListener("mouseenter", () => {
        phrase.style.color="red";
        setTimeout(() => {
            phrase.style.color="black";
        }, 500)
    });


    phrase.addEventListener("click", () => {
        phrase.style.color="lime";
        setTimeout(() => {
            phrase.style.color="black";
        }, 500)
    });


    phrase.addEventListener("dblclick", () => {
        phrase.style.color="navi";
        setTimeout(() => {
            phrase.style.color="black";
        }, 1000)
    });
}