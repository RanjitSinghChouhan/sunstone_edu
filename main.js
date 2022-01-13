const mba = document.getElementById("mba");

function showList() {
    const arr = ['specialization', 'MBA in Finance', 'MBA in Marketing'];
    const cont = document.getElementById("container");
    cont.setAttribute('style', 'position:absolute; display: block; margin-left: 200px; z-index: 1500;')
    const ul = document.createElement('ul');
    ul.setAttribute('style', 'padding: 0; margin: 0;');
    ul.setAttribute('id', 'theList');
    for (i = 0; i < arr.length; i++) {
        const li = document.createElement('li');
        li.innerHTML = arr[i];
        li.setAttribute('style', 'position:relative; display: block;');
        ul.appendChild(li);
    }
    cont.appendChild(ul);
}

function showNothing() {
    const cont = document.getElementById("container");
    cont.innerHTML = '';
}
