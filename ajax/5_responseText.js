// The read-only XMLHttpRequest property responseText returns the text received
//  from a server following a request being sent.

// A DOMString which contains either the textual data received using the XMLHttpRequest or
//  null if the request failed or "" if the request has not yet been sent by calling send().

// While handling an asynchronous request, the value of responseText always has
//  the current content received from the server, even if it's incomplete because
//   the data has not been completely received yet.

// You know the entire content has been received when the value of readyState
//  becomes XMLHttpRequest.DONE (4), and status becomes 200 ("OK").


var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/response', true);

// If specified, responseType must be empty string or "text"
xhr.responseType = 'text';

xhr.onload = function () {
    if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200) {
            console.log(xhr.response);
            console.log(xhr.responseText);
        }
    }
};

xhr.send(null);