// start the server via the 'npm run server' command;

document.getElementById('button').addEventListener('click', buttonHandler);

let isDataExist = false;

function buttonHandler() {
    if (isDataExist) {
        return
    }

    const socket = new WebSocket('ws://localhost:3000');

    socket.onopen = () => {alert('Соединение установлено')};

    socket.onmessage = (event) => {
        const usersData = JSON.parse(event.data);
        const list = document.querySelector('.user-list');

        const html = usersData.map(user => {
            return  `<li class='user-item'>${user.id}) ${user.name} (${user.website})</li>`
        }).join(' ');

        list.insertAdjacentHTML("beforeend", html);
    };

    isDataExist = true;

    socket.onclose = () => {alert('Соединение прервано')};

    socket.onerror = (error) => {alert(error.message)};
};









