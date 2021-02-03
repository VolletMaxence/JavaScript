function soustrait(X)
{
    //prend arg X et fait X-2
    //Si négatif, renvoie "Nombre Négatif"

    var soustrait = X-2;

    return soustrait;
}

function affiche(X)
{

    var resultat = soustrait(X);
    
    if(resultat < 0)
    {
        alert("Nombre négatif!")
    } else
    {
        alert(resultat);
    }
}