

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200) {
            document.getElementById('tests').innerHTML = 'tutorial using get method<br/>'+this.responseText;
        }
    }
};

xhr.open('GET', 'php/getName.php?name=ali ahmed mohamed&age=26', true);


xhr.send(null);