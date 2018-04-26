
function checkImage(pathToFile) {
    var img = new Image();
    return new Promise((resolve, reject) => {
        img.onload = () => {
            resolve("Файл есть!");
        };
        img.onerror = () => {
            reject("Файла нет!");
        };
        img.src = pathToFile;
    });
}

function checkImages(imagesPaths) {
    for (imagePath of imagesPaths){
        checkImage(imagePath).then(msg => alert(msg), error => alert(error));;
    }
}

checkImages(["path1", "path2", "path3"]);