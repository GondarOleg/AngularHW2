//import {sequence} from 'task1';

function* sequence(start_param, step_param) {
    [start = 0, step = 1] = [start_param, step_param];
    while(true)
    {
        yield start += step;
    }

}

function generateMass(size, start, step) {
    [size_=3] = [size];
    x=[];
    let generator = sequence(start, step);
    for (i=0;i<size_;i++){
        x.push(generator.next().value);
    }
    return x;
}

console.log(generateMass());