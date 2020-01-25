var xhr = new XMLHttpRequest();
var names = [];
xhr.open('GET', 'object.json', true);

// If specified, responseType must be empty string or "text"
xhr.onload = function () {
    if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200) {
            var records = JSON.parse(xhr.responseText);
            records.forEach(element => {
                names = names + '<li>' + element.name + '</li>'
            });
            names = '<ul>' + names + '</ul>'
        }
    }
};


function showNames() {
    document.getElementById('names').innerHTML = names;
}



xhr.send(null);