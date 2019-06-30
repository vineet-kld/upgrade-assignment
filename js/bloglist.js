var nobtn = document.getElementById("noDelete");
var yesbtn = document.getElementById("yesDelete");
var modal2 = document.getElementById("deleteModal");
var span = document.getElementsByClassName("close1")[0];

function showTrashConfirm() {
    modal2.style.display = "block";
}

nobtn.onclick = function()
{
    modal2.style.display = "none";
};

span.onclick = function () {
    modal2.style.display = "none";
};

