setTimeout(() => {
    console.log('show after 2 seconds');
}, 2000);

let cnt = 0;
const interval = setInterval(() =>{
    console.log('do it again after 1 sec');

    if(cnt == 4){
        clearInterval(interval);
    }
    else{
        cnt++;
    }
}, 1000)