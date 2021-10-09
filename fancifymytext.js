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
            alert(selected);

            if (selected === "fancy") {
                document.getElementById("txt").style.fontWeight="bold";
            } else if (selected === "boring") {
                document.getElementById("txt").style.fontWeight="normal";
            }
        }
    }
}

rb.addEventListener('change', fancyOrNot);