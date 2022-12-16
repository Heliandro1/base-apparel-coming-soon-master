const btnSend = document.querySelector("#btnSend");
btnSend.addEventListener("click", isValidEmail);

function isValidEmail(e) {
    e.preventDefault();
    const email = document.querySelector("#email");
    const span = document.querySelector("div.field > span");
    const p = document.querySelector("#error");
    let regex = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/gi
    if (regex.test(email.value)) {
        p.style.display = 'none';
        span.style.display = 'none';
        return true;
    }
    p.style.display = 'block';
    span.style.display = 'block';
    email.focus();
    return false;
}