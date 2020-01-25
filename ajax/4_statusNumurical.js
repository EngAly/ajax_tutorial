// The read-only XMLHttpRequest.status property returns the numerical HTTP status code of
//  the XMLHttpRequest's response.

// Before the request completes, the value of status is 0. Browsers also report a status of 0
//  in case of XMLHttpRequest errors.

var xhr = new XMLHttpRequest();
console.log('UNSENT: ', xhr.status);

xhr.open('GET', 'index.html');
console.log('OPENED: ', xhr.status);

xhr.onprogress = function () {
    console.log('LOADING: ', xhr.status);
};

xhr.onload = function () {
    console.log('DONE: ', xhr.status);
};

xhr.send();

/**
 * Outputs the following:
 *
 * UNSENT: 0
 * OPENED: 0
 * LOADING: 200
 * DONE: 200
 */