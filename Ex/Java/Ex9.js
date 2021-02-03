function paragraphe()
{


    var para = document.getElementById("para") //l'id du texte est stocké dans la variable var para
    //utililser la variable pour définir les events

    para.addEventListener("click", () => {
        para.style.textalign="center";
        para.style.width=
        setTimeout("dbclick", () => {
            para.style.textalign="left";
        },)
    });

}