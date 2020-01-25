var xhr = new XMLHttpRequest();
xhr.open('GET', 'object.json', true);

// If specified, responseType must be empty string or "text"

xhr.onload = function () {
    if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200) {
            console.log(JSON.parse(xhr.responseText));
        }
    }
};

xhr.send(null);