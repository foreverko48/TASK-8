function prependInput()
{
    var nameValue = document.getElementById("userEnterText").value;
    var prependText = $("<p></p>").text(nameValue);

    if(jQuery.isEmptyObject(nameValue))
    {
        alert("You should enter something!!")
    }
    jQuery(".tasks").prepend(prependText);
    //document.getElementById("change").innerHTML = nameValue;

}