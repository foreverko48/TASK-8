function prependInput()
{
    var nameValue = document.getElementById("userEnterText").value;
    var prependText = $("<p></p>").text(nameValue);

    if(jQuery.isEmptyObject(nameValue))
    {
        alert("You should enter something!!")
    }
    jQuery(".tasks").prepend(prependText);
    
    //First way to do it(I don't think it is a good idea so a did what is above)
    //jQuery(".tasks").prepend('<p id= "change">');
    //document.getElementById("change").innerHTML = nameValue;

}