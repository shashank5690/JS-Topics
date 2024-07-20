function download(url){
    console.log("starting to download data from",url);
    setTimeout(function down(){  
        console.log("download completed");
        const content = "ABCDEF";
        resolve(content);
    },10000);
}

function writeFile(data){
    console.log("Started writing the file with data",data);
    setTimeout(function write(){
        console.log ("Completed writing the data in file");
        const filename = "file.js";
        resolve(filename);
    },5000);
}

function upload (url,file){
    console.log("Started uploading",file,"on",url);
    setTimeout(function up()  {
        const response = "SUCCESS";
        resolve(response);
    }, 2000);
}

async function display(){
    const content  = await download ("www.movieflix.com");
    console.log ("we are going to process the donwload the data");
    const filename  =  await writeFile(content);
    console.log ("we have downloaded and written the file, now will upload");
    const response =  await upload("www.uploadme.com", filename);
    console.log ("we have uploaded with", response);
}

display()

// download("www.xyz.com");

// it is wrong as we are not returning the promise object from the download function, write function and upload function.and 
// resolving it 
