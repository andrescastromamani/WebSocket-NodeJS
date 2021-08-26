//Reference HTML
const connect = document.querySelector('#connected');
const disconnect = document.querySelector('#disconnected');
const message = document.querySelector('#message');
const btnSend = document.querySelector('#btnSend');

const socket = io();

socket.on('connect', () => {
    console.log('Connected to server');
    connect.style.display = '';
    disconnect.style.display = 'none';
});
socket.on('disconnect', () => {
    console.log('Disconnected from server');
    connect.style.display = 'none';
    disconnect.style.display = '';
});

btnSend.addEventListener('click', () => {
    const msg = message.value;
    const data = {
        message: msg,
        id: 'asja2156',
        date: new Date().getDate()
    }
    socket.emit('emit-message', data);
})