### `1) Why AJAX`
>* Read data from a web server - after the page has loaded.
>* Update a web page without reloading the page.
>* Send data to a web server - in the background.
>* AJAX is not a programming language.
>* AJAX is a technique for accessing web servers from a web page.
>* AJAX stands for Asynchronous JavaScript And XML.

### `2) Primary Concern`
>* AJAX - The XMLHttpRequest Object.
>* The keystone of AJAX is the XMLHttpRequest object.
>* The XMLHttpRequest object can be used to exchange data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.
>* Create an XMLHttpRequest Object 
> ~~~
> var xhttp = new XMLHttpRequest();
>~~~

### `3) Ajax Life Cycle`
readyState  
0: request not initialized  
1: server connection established  
2: request received  
3: processing request  
4: request finished and response is ready  

### `4) Good Notes`
problems Access Across Domains  
* For security reasons, modern browsers do not allow access across domains.  
* This means that both the web page and the XML file it tries to load must be located on the same server.  
* The examples on W3Schools all open XML files located on the W3Schools domain.  
* If you want to use the example above on one of your web pages, the XML files you load must be located on your server.

### `5) Search (Tasks)`
---
* difference between GET and POST Methods.  
 **abbreviated**  
  GET is simpler and faster than POST, and can be used in most cases.  
  If you want to send information with the GET method, add the information to the URL.  
  However, always use POST requests when:  
  A cached file is not an option (update a file or database on the server).  
  Sending a large amount of data to the server (POST has no size limitations).  
  Sending user input (which can contain unknown characters), POST is more robust and secure than GET.  
---
* Content-type
  * application/x-www-form-urlencoded
  * multipart/form-data
---
* Callback Function  
   **abbreviated**   
      A callback function is a function passed as a parameter to another function.
---
* CORS Policy (Cross-origin resource sharing)  
**abbreviated**  
 is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.
 
### `6) Ajax Tricks`
>~~~
>* xhttp.open("GET", "ajax_test.asp", true);
>~~~
>The file can be any kind of file, like .txt and .xml, or server scripting files like .asp and .php **(which can perform actions on the server before sending the response back)**.

### `7) Audience`
for every developer want to learn ajax and distinct about others from operating with the web page and how to update a web page without reloading the page and reduce the traffic in the network via getting only part from the page and load file as JSON, XML and other types.

### `8) Prerequisite`
* Localhost to host your project (favorite **XAMPP**).  
* Editor (favorite **code visual studio**).  
* browser, choose what you like.  

### `9) Gifts `
there some files that have advanced code you can use it direct to your project.

#### References
* HTTP response status codes
https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
* jQuery API
https://api.jquery.com/

