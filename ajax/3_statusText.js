// The read - only XMLHttpRequest.statusText property returns a DOMString containing the response's
// status message as returned by the HTTP server.
// Unlike XMLHTTPRequest.status which indicates a numerical status code,
//     this property contains the text of the response status, such as "OK" or "Not Found".
// If the request's readyState is in UNSENT or OPENED state, the value of statusText will
// be an empty string.

// If the server response doesn't explicitly specify a status text,
// statusText will assume the default value "OK".


var xhr = new XMLHttpRequest();
console.log('0 UNSENT', xhr.statusText);

xhr.open('GET', 'index.html', true);
console.log('1 OPENED', xhr.statusText);

xhr.onprogress = function () {
    console.log('3 LOADING', xhr.statusText);
};

xhr.onload = function () {
    console.log('4 DONE', xhr.statusText);
};

xhr.send(null);

/**
 * Outputs the following:
 *
 * 0 UNSENT
 * 1 OPENED
 * 3 LOADING OK
 * 4 DONE OK
 */