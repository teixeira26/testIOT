const prenderLed=()=>{
    fetch('http://192.168.0.5/LED=ON',{
        referrerPolicy: "unsafe-url" 
    })
    .then(x=>console.log(x))
    .catch(error=>console.log(error))
}


const apagarLed = ()=>{
    fetch('http://192.168.0.5/LED=OFF',{
        referrerPolicy: "unsafe-url" 
    })
    .then(x=>console.log(x))
    .catch(error=>console.log(error))
}