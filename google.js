console.log('Google Mirror JS');
console.log('Powered by Yunwu');


const key = "GF3DA";

window.onload = function(event) {
    if(document.cookie.replace(/(?:(?:^|.*;\s*)key\s*\=\s*([^;]*).*$)|^.*$/, "$1") != key) {
        event.preventDefault();
        document.write("<h1>403</h1>");
    } else {
        console.log("Check passed");
    }
}
