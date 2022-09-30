const prenderLed=()=>{
    fetch('http://192.168.0.5/LED=ON',{
        referrerPolicy: "unsafe_url" 
    })
    .then(x=>console.log(x))
    .catch(error=>console.log(error))
}


const apagarLed = ()=>{
    fetch('http://192.168.0.5/LED=OFF',{
        referrerPolicy: "unsafe_url" 
    })
    .then(x=>console.log(x))
    .catch(error=>console.log(error))
}