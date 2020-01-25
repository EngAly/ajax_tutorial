const xhr = new XMLHttpRequest(),
    method = "GET",
    url = "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/507";


// note that
// Asynchronous - True or False?
// by sending asynchronously, the JavaScript does not have to wait for the server response,
//  but can instead:
//    execute other scripts while waiting for server response
// deal with the response after the response is ready
// Synchronous XMLHttpRequest (async = false) is not recommended
xhr.open(method, url, true);
xhr.onreadystatechange = function () {
    // XMLHttpRequest.DONE  => its code 4
    // xhr.status === 200  resource is founded
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        console.log(xhr.responseText);
    }
};
xhr.send();


// XMLHttpRequest.onreadystatechange = callback;
// Values
// callback is the function to be executed when the readyState changes.