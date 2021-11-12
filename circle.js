const pi=3.14;
const r=5;
const circleArea=()=>{
    return pi*r*r;
}
const circleCircumference=()=>{
    return 2*pi*r;
}
console.log(circleArea());
console.log(circleCircumference());
module.exports={circleCircumference,circleArea}