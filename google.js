console.log('Google Mirror JS');
console.log('Powered by Yunwu');


const key = "GF3DA";


function verify() {
    if(document.cookie.replace(/(?:(?:^|.*;\s*)key\s*\=\s*([^;]*).*$)|^.*$/, "$1") != key) {
        document.body.innerHTML = "<h1>403 Forbidden</h1>" 
        return;
    }
}



verify();
