
/*
* 获取列表数据
* */
export function getListData(params={}) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2);
        }, 2000);
    });


    // return fetch('/list', {
    //     body: JSON.stringify(data),
    //     // credentials: 'same-origin', // include, same-origin, *omit
    //     headers: {
    //
    //     },
    //     method: 'GET', // *GET, POST, PUT, DELETE, etc.
    //     mode: 'cors' // no-cors, cors, *same-origin
    // });
}