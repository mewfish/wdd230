const copyrightyear = document.getElementById("copyrightyear");
copyrightyear.textContent = new Date().getFullYear();
document.getElementById("updated").innerHTML = new Date(document.lastModified);