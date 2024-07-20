function gameLoaded(){
 console.log('gameLoaded');
 
 if (window.webkit != undefined) {
        if (window.webkit.messageHandlers != undefined) {
            window.webkit.messageHandlers.gameLoaded.postMessage(0);
        }
    }
    if (window.appInterface != undefined) {
        window.appInterface.postMessage("gameLoaded")
    }
}
//===========================
function gameFinish(){
console.log('gameFinish');
if (window.webkit != undefined) {
        if (window.webkit.messageHandlers != undefined) {
            webkit.messageHandlers.finish.postMessage(0);
        }
    }
    if (window.appInterface != undefined) {
        window.appInterface.postMessage("gameFinish")
    }
}
//===========================
function levelFinish(){
console.log('levelFinish');
if (window.webkit != undefined) {
        if (window.webkit.messageHandlers != undefined) {
            webkit.messageHandlers.levelFinish.postMessage(0);
        }
    }
    if (window.appInterface != undefined) {
        window.appInterface.postMessage("levelFinish")
    }
}
//================================
function toArabicNumber(n) { const farsiDigits = ['۰', '۱', '۲', '۳', '٤', '٥', '٦', '۷', '۸', '۹'];
    return n
        .toString()
        .replace(/\d/g, x => farsiDigits[x]);
}