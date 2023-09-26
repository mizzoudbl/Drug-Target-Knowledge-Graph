
function URLs () {
    const url = "http://localhost:1337";
    // const url = "http://35.229.99.99/api"
    return url
}

function loginCheck(e){
    let v = localStorage.getItem(e)
    if (v == undefined) {
        console.log('not')
        window.location.href = '/authentication';
        return
    }
}


function logout(e){
    localStorage.removeItem(e);
    window.location.href = "/authentication"
}