function myFunction(event) {

    if (event.shiftKey || event.altKey || event.ctrlKey) {
        var x = event.which || event.keyCode;
        alert("The Unicode value is: " + x);
    }

}