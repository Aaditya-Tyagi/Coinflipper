function choice(arr){
    let randomchoice=Math.floor(Math.random()*arr.length);
    return arr[randomchoice];
}
export {choice}