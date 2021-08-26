//Reference HTML
const connect = document.querySelector('#connected');
const disconnect = document.querySelector('#disconnected');

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