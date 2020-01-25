var xhr = new XMLHttpRequest;
xhr.open('GET', 'index.html');


xhr.onreadystatechange = function () {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
        console.log(xhr);
    }
};

xhr.send();