function boucle()
{
    //cré tableau de 3 éléments
    //boucle for pour que la case i = i²
    var tableau = Array((1*1),(2*2),(3*3));
    alert(tableau);
}

function boucle2()
{
    var i;
    var long = prompt("Entrez la longeur désirer pour votre tableau");
    var tableau2 = [];
    tableau2.lenght = long;
    
    for (i=1; i<=long; i++)
    {
        tableau2[i-1] = i*i;
    }
    alert(tableau2);
}