var myWindow;

function openWin() {
    myWindow = window.open("Show&Hide.html", "info", "width=400, height=200, top=200")
    // myWindow.document.write("Welcome")
    // myWindow.document.write("<br/><button onclick='closed()'> Close </button>")
}

function closeWin() {
    if (myWindow) {
        myWindow.close()
    }
}

function checkWin() {
    if (!myWindow) {
        document.getElementById("msg").innerHTML = "myWindow has never been opened!"
    }
    else {
        if (myWindow.closed) {
            document.getElementById("msg").
            innerHTML = "myWindow has been closed!"
        }
        else {
            document.getElementById("msg").
            innerHTML = "myWindow has not been closed"
        }
    }
}