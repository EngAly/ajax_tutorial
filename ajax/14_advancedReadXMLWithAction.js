


// The XMLHttpRequest.responseXML read-only property returns a Document containing the HTML or XML 
//  by the request; or null if the request was unsuccessful,
//  has not yet been sent, or if the data can't be parsed as XML or HTML.

var movies;
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
    var index, title, genre, year;
    var xmlDoc = xhttp.responseXML;
    var table = "<table class='table table-striped table-hover table-sm table-bordered'>" +
        "<thead  class='thead-dark'><tr><th>titles</th><th>genre</th><th>years</th></tr></thead>";
    movies = xmlDoc.getElementsByTagName("Movie");
    for (index = 0; index < movies.length; index++) {
        title = movies[index].getElementsByTagName("Title")[0].childNodes[0].nodeValue;
        genre = movies[index].getElementsByTagName("Genre")[0].childNodes[0].nodeValue;
        year = movies[index].getElementsByTagName("Year")[0].childNodes[0].nodeValue;
        table += "<tr onclick='action(" + index + ")'>" +
            "<td>" + title + "</td>" +
            "<td>" + genre + "</td>" +
            "<td>" + year + "</td>" +
            "</tr>";
    }
    document.getElementById("movies").innerHTML = table + '</table>';
}


function action(index) {
    document.getElementById('title').innerHTML = movies[index].getElementsByTagName("Title")[0].childNodes[0].nodeValue;
    document.getElementById('genre').innerHTML = movies[index].getElementsByTagName("Genre")[0].childNodes[0].nodeValue;
    document.getElementById('year').innerHTML = movies[index].getElementsByTagName("Year")[0].childNodes[0].nodeValue;
    document.getElementById('studio').innerHTML = movies[index].getElementsByTagName("Studio")[0].childNodes[0].nodeValue;
}


