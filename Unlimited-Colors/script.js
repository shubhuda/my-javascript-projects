const generateRandomColor = () => {
    const hex = '0123456789ABCDEF';
    let hexCode = '#';
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random()*16);    
        hexCode += hex[randomIndex];
    }
    console.log('hexcoee',hexCode)
    return hexCode;
}

let intervalId;

const startChangingColor = () => {  
    if (!intervalId) {
        intervalId = setInterval(()=>{
            document.getElementById('main-container').style.backgroundColor = generateRandomColor();
        },1000)
    }
}
const stopChangingColor = () => {
    clearInterval(intervalId);
    intervalId = null;
}
document.getElementById('start').addEventListener('click', startChangingColor);
document.getElementById('stop').addEventListener('click', stopChangingColor);