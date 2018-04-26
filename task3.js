
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

/** С сайта https://github.com/GondarOleg/AngularHW2,
 если открыть консоль, положительный кейс работает с таким массивом */

checkImages(["https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif"]);

checkImages(["path1", "path2", "path3"]);