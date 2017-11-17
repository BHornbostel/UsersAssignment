$(document).ready(function(){
    $("form").submit(function(){
        var firstname = $("#firstname").val();
        var lastname = $("#lastname").val();
        var email = $("#email").val();
        var contact = $("#contact").val();
        var markup = "<tr><td>" +firstname+ "</td><td>" + lastname + "</td><td>" + email + "</td><td>" +contact+ "</td></tr>";
        $("table").append(markup);
        return false;   
             
    });
});
