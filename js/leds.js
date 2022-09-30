const prenderLed=()=>{
    fetch('http://192.168.0.5/LED=ON')
    .then(x=>console.log(x))
    .catch(error=>console.log(error))
}


const apagarLed = ()=>{
    fetch('http://192.168.0.5/LED=OFF')
    .then(x=>console.log(x))
    .catch(error=>console.log(error))
}