function getPlayerById(playerBtn, playerName) {
    let ol = document.getElementById('player-list');
    const listLength = ol.childNodes.length;
    if (listLength > 5) {
        alert('can not add more than five players');
        return;
    }
    let value = document.getElementById(playerName).innerText;
    let newTag = document.createElement('li');
    newTag.classList.add('my-3');
    newTag.innerText = value;
    ol.appendChild(newTag);
    const btnDis = document.getElementById(playerBtn);
    console.log(listLength);
    if (listLength - 1 <= 5) {

        btnDis.disabled = true;
        btnDis.style.backgroundColor = 'grey';
    } else {
        btnDis.disabled = false;
    }
}

function getInputValueById(inputField) {
    const element = document.getElementById(inputField);
    const valueInString = element.value;
    const value = parseInt(valueInString);
    return value;
}