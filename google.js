console.log('Google Mirror JS');
console.log('Powered by Yunwu');


const key = "GF3DA";

document.addEventListener("DOMContentLoaded", function(event) {
    if(document.cookie.replace(/(?:(?:^|.*;\s*)key\s*\=\s*([^;]*).*$)|^.*$/, "$1") != key) {
        console.log("Check failed");
        event.preventDefault();
        document.write("<h1>403</h1>");
    } else {
        console.log("Check passed");
    }
})
