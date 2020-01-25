


// The XMLHttpRequest.responseXML read-only property returns a Document containing the HTML or XML 
//  by the request; or null if the request was unsuccessful,
//  has not yet been sent, or if the data can't be parsed as XML or HTML.

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(xhttp);
        }
    };
    xhttp.open("GET", "movies.xml", true);
    xhttp.send(null);
}
function myFunction(xhttp) {
    var index, item;
    var xmlDoc = xhttp.responseXML;
    var table = "<table class='table table-striped table-hover table-sm'>" +
        "<thead  class='thead-dark'><tr><th>Names</th></tr></thead>";
    var titles = xmlDoc.getElementsByTagName("Title");
    for (index = 0; index < titles.length; index++) {
        item = titles[index].childNodes[0].nodeValue;
        table += "<tr><td>" +
            item +
            "</td></tr>";
    }
    document.getElementById("movies").innerHTML = table + '</table>';
}



