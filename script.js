console.log("Phishora loaded");

function checkURL() {
    const url = document.getElementById("urlInput").value;
    document.getElementById("resultBox").innerText = "Scanning: " + url;
}
