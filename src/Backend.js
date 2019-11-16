import axios from './AxiosCfg';


let sock;

const initWebSocket = () => {
    sock.onmessage = (event) => {
        console.log(event.data);
    }
}

const webSocketConnect = () => {
    sock = new WebSocket('ws://127.0.0.1:8000', 'json');
    console.log(sock);
    initWebSocket();
}

const sendMessageToWebsSocket = () =>{
    sock.send('Witam z reacta');
}


export const connect = webSocketConnect;
export const send = sendMessageToWebsSocket;

