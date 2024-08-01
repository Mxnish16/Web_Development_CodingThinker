function step1(){
    return new Promise((res,rej)=>{
    setTimeout(()=>{
        res('photo selected')
     },4000) 
})}

function step2(){
    return new Promise((res,rej)=>{
    setTimeout(()=>{
        res('filter applied')
     },4000) 
})}

function step3(){
    return new Promise((res,rej)=>{
    setTimeout(()=>{
        res('caption added')
     },4000) 
})}

function step4(){
    return new Promise((res,rej)=>{
    setTimeout(()=>{
        res('posted')
     },4000) 
})}

//async (by default it is resolved)
async function bestmtd(){
    let data1= await step1()
    console.log(data1);
    let data2= await step2()
    console.log(data2);
    let data3= await step3()
    console.log(data3);
    let data4= await step4()
    console.log(data4);
}

bestmtd()

