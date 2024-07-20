function download(url) {
    return new Promise((resolve, reject) => {
        console.log("Starting to download data from", url);
        setTimeout(function down() {
            console.log("Downloading completed");
            const content = "ABCDEF"; 
            resolve(content);
        }, 10000);
    });
}


// return new Promise((resolve,reject) => {
//     console.log 
// })

function writeFile(data) {
    return new Promise((resolve, reject) => {
        console.log("Started writing a file with", data);
        setTimeout(function write() {
            console.log("Completed writing the data in a file");
            const filename = "file.txt";
            resolve(filename);
        }, 5000);
    });
}

function upload(url, file) {
    return new Promise((resolve, reject) => {
        console.log("Started uploading", file, "on", url);
        setTimeout(function up() {
            console.log("Upload completed");
            const response = "SUCCESS";
            resolve(response);
        }, 2000);
    });
}

download("www.xyz.com")
    .then(content => {
        console.log("We are now going to process the downloaded data");
        return writeFile(content);
    })
    .then(filename => {
        console.log("We have downloaded and written the file, now will upload");
        return upload("www.upload.com", filename);
    })
    .then(response => {
        console.log("We have uploaded with", response);
    })
    .catch(error => {
        console.error("An error occurred:", error);
    });

    //

    // download("hello.com")
    // .then(content=> {
    //     console.log("We are now going to process the downloaded data");
    //     return writeFile(content);
    // })
    // .then(filename => {
    //     console.log("We have downloaded and written the file, now will upload");
    //     return upload("www.upload.com", filename);
    // })
    // .then(response => {
    //     console.log("We have uploaded with", response);
    // })  
    // .catch(error => {
    //     console.error("An error occurred:", error);
    // });