$(document).ready(function() {
    /*Dès qu'on clique sur show, on applique montrer au texte*/
    $("#show").click(function() {
        $("#texte").show();
    });

    /*Dès qu'on clique sur hide, on applique masquer au texte*/
    $("#hide").click(function() {
        $("#texte").hide();
    });
});