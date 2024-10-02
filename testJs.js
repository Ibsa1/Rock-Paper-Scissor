let btn = document.querySelector('#rock');

function handleClick() {
    return returnhandleClick(btn.id);
}

btn.addEventListener('click', handleClick);

function returnhandleClick(){
    console.log('Hello');
}


location.reload();
console.log('successful');