const url = 'https://jsonplaceholder.typicode.com/users';

const btn = document.getElementById('btn');
btn.addEventListener('click', load);

let isDataExist = false;

async function load() {
    if (isDataExist) {
        return
    }

    try {
        const response = await fetch(url);
        const data = await response.json();

        isDataExist = true
        
        const list = document.getElementById('list');
        const html = data.map(item => {
            return `<li>${item.name} (${item.email}) ${item.phone}</li>`
        }).join(' ');
        
        list.insertAdjacentHTML("afterbegin", html);
    } catch (err) {
        alert(err);
    }
}