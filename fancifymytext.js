// Bigger! button: increase font size to 24pt
const btn = document.querySelector('button[name="bigger"]');

function upSize(event) {
    document.getElementById("txt").style.fontSize= "4em";
}

btn.addEventListener('click', upSize);


// radio buttons: add/remove styles
function fancyOrNot(event) {
    const rbs = document.querySelectorAll('input[name="js-style"]');
    for (let rb of rbs) {
        if (rb.checked) {
            let selected = rb.value;
                        
            if (selected == "fancy") {
                document.getElementById("txt").style.fontWeight="bold";
                document.getElementById("txt").style.color="blue";
                document.getElementById("txt").style.textDecoration="underline";
            } else if (selected == "boring") {
                document.getElementById("txt").style.fontWeight="normal";
                document.getElementById("txt").style.color="black";
                document.getElementById("txt").style.textDecoration="initial";
            }
        }
    }
}

rb.addEventListener('change', fancyOrNot);


// Moo button: capitalize text and add -Moo to end of last word in sentence     
const b2tn = document.querySelector('button[name="moo"]');

function mooify(event) {
    document.getElementById("txt").value = document.getElementById("txt").value.toUpperCase();

    var str = document.getElementById("txt").value;
    var parts = str.split(".");
    document.getElementById("txt").value = parts.join("-Moo.");
}

btn2.addEventListener('click', mooify);