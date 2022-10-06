import * as fs from "node:fs";

const data = "Hello Vittorio!";

const controller = new AbortController();
const { signal } = controller;

fs.writeFile("file-to-write.txt", data, { encoding: "utf8", signal}, error => {
    if (error){
        console.error(error)
        return
    } 
    
    console.log("File has been saved!")
});


// Qui abbiamo il metodo per far partire l'abort del writeFile in caso di necessità
// controller.abort()