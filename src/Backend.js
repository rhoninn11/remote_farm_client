import axios from './AxiosCfg';

let callbackList = []

const updateSinusValue = () => {

    axios.get('/api').then(result => {
        // console.log(result.data.value);

        // console.log(callbackList)
        if (callbackList.length < 6) {
            console.log(callbackList.length)
            callbackList.forEach((element, index, array) => {
                element(result.data.value);
            });
        }
    }).catch(error => {
        console.log(error);
    }).finally(() => { });
}

const addCallbackToQueue = (callB) => {
    if (callbackList.includes(callB)) {
        console.log('już jest');
    } else {

        callbackList.push(callB)
    }
}

setInterval(updateSinusValue, 200);

export default addCallbackToQueue