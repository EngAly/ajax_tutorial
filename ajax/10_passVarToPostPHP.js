

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200) {
            document.getElementById('tests').innerHTML = 'tutorial using post method<br/>' + this.responseText;
        }
    }
};

xhr.open('POST', 'php/postName.php', true);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.send('name=ali ahmed mohamed&age=26');