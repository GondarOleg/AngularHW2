


function* sequence(start_param, step_param) {
    [start = 0, step = 1] = [start_param, step_param];
    while(true)
    {
    yield start += step;
    }

}

function checkGenerator(timesToLog, sequence){
    if(generator instanceof sequence){
    for(i = 0; i<timesToLog; i++){
        console.log(generator.next().value);
    }
    }else{
        alert("Неправильный фоторой параметр!!!");
    }
}

let g1 = sequence();

checkGenerator(5, g1);

let g2 = sequence(2, 5);

let g3 = checkGenerator(5, g2);

checkGenerator(5, g3);