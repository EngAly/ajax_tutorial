// Value	State	Description
// 0	UNSENT	Client has been created. open() not called yet.
// 1	OPENED	open() has been called.
// 2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
// 3	LOADING	Downloading; responseText holds partial data.
// 4	DONE	The operation is complete.

// UNSENT
// The XMLHttpRequest client has been created, but the open() method hasn't been called yet.

// OPENED
// open() method has been invoked. During this state, the request headers can be set using the setRequestHeader()
//   method and the send() method can be called which will initiate the fetch.

// HEADERS_RECEIVED
// send() has been called and the response headers have been received.

// LOADING
// Response's body is being received. If responseType is "text" or empty string, responseText will have the partial text response as it loads.

// DONE
// The fetch operation is complete. This could mean that either the data transfer has been completed successfully or failed.


var xhr = new XMLHttpRequest();
console.log('UNSENT', xhr.readyState); // readyState will be 0

xhr.open('GET', 'index.html', true);
console.log('OPENED', xhr.readyState); // readyState will be 1

xhr.onprogress = function () {
    console.log('LOADING', xhr.readyState); // readyState will be 3
};

xhr.onload = function () {
    console.log('DONE', xhr.readyState); // readyState will be 4
    // note this refer to xhr
    if (this.status === 200) {
        console.log(xhr.responseText);
    }
};

xhr.send(null);