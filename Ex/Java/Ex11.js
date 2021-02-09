/*
function modifParagraphe()
{
    var Titre = document.getElementById("h1");

    Titre.onclick = Changer();

};
*/


function modifParagraphe()
{
    var Titre = document.getElementById("h1");

    Titre.onclick = Titre.setAttribute("style_align", "center");
    
}