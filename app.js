//Ajax - Callback - Http request

class Request {
    constructor() {
        this.xhr = new XMLHttpRequest();

    }

    //Get request with callback

    get(url, callback) {
        this.xhr.open("GET", url);//Open connection

        this.xhr.onload = () => {
            if (this.xhr.status === 200) {
                callback(null, this.xhr.responseText);
            } else {
                callback("GET Request: Something went wrong !", null);
            }
        }

        this.xhr.send();
    }

    post(url, data, callback) {
        this.xhr.open("POST", url);
        this.xhr.setRequestHeader("Content-type", "application/json"); //JSON data type selected

        this.xhr.onload = () => {
            if (this.xhr.status === 201) {
                //Success
                callback(null, this.xhr.responseText);
            } else {
                //error
                callback("POST Request: Something went wrong ", null);
            }

        }
        this.xhr.send(JSON.stringify(data));


    }

    put(url, data, callback) {
        this.xhr.open("PUT", url);
        this.xhr.setRequestHeader("Content-type", "application/json"); //JSON data type selected

        this.xhr.onload = () => {
            if (this.xhr.status === 200) {
                //Success
                callback(null, this.xhr.responseText);
            } else {
                //error
                callback("PUT Request: Something went wrong ", null);
            }

        }
        this.xhr.send(JSON.stringify(data));


    }

    delete(url, callback) {
        this.xhr.open("DELETE", url);//Open connection

        this.xhr.onload = () => {
            if (this.xhr.status === 200) {
                callback(null, "Data deleted !");
            } else {
                callback("DELETE Request: Something went wrong !", null);
            }
        }

        this.xhr.send();
    }
}

const request = new Request();

// request.get("https://jsonplaceholder.typicode.com/albums", function (err, response) {
//     if (err === null) {
//         console.log(response);
//     } else {
//         console.log(err);
//     }
// });


/*request.get("https://jsonplaceholder.typicode.com/albums", function (err, response) {
    if (err === null) {
        console.log(response);
    } else {
        console.log(err);
    }
});*/

// request.post("https://jsonplaceholder.typicode.com/albums",{userId:2,title:"Vizontele"},function (err,album) {
//
//     if (err===null){
//         console.log(album);
//     }else{
//         console.log(err);
//     }
// });


// request.put("https://jsonplaceholder.typicode.com/albums/10",{userId:23,title:"Vizontele Tuuba"},function (err,album) {
//
//     if (err===null){
//         console.log(album);
//     }else{
//         console.log(err);
//     }
// });

request.delete("https://jsonplaceholder.typicode.com/albums/10", function (err, response) {
    if (err === null) {
        console.log(response);
    } else {
        console.log(err);
    }
});