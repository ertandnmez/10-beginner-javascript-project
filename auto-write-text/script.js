const text = 'My viewers on Twich are the best!!'

let index = 0;

writeText = () => {
    document.body.innerText = text.slice(0, index);
    index++;
    if (index > text.length) {
        index = 0;
    }
}
setInterval(writeText,100);