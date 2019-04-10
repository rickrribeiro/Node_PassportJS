
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
      console.log( xhttp.responseText)
    }
};

function reqq(){
    xhttp.open("GET", "http://localhost:3001/char", true);
    xhttp.send();
}