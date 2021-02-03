function jourdelaSemaine() 
{
    var date = new Date();
    
    var ladate = date.getDay()

    switch(ladate)
    {
        case 0:
            alert("On est Dimanche")
            break;

        case 1:
            alert("On est Lundi")
            break;

        case 2:
            alert("On est Mardi")
            break;

        case 3:
            alert("On est Mercredi")
            break;

        case 4:
            alert("On est Jeudi")
            break;

        case 5:
            alert("On est Vendredi")
            break;

        case 6:
            alert("On est Samedi")
            break;
    } 
}