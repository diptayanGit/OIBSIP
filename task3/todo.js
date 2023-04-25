const todo = document.getElementById("tasklist")
function addele() {
    var li = document.createElement("li");
    const input = document.getElementById("item").value;
    var des = document.getElementById("description").value;
    var t = document.createElement("span");
    var x = document.createElement("span");
    t.innerHTML = input;
    x.innerHTML = des;
    k = input;
    if (input == '') {
        alert("You must write something!");
    } else {
        li.appendChild(t);
        li.appendChild(x);
        todo.appendChild(li);
        document.getElementById("notask").style.display = "none";
    }
    document.getElementById("item").value = "";
    span = document.createElement("button");
    span.innerHTML = "&#10005";
    li.appendChild(span);
    span.classList.add("button-75");
    span.addEventListener('click', () => {
        li.style.display = "none";
    })

    t.addEventListener("click", () => {
        //t.removeAttribute('readonly');
        if (t.hasAttribute('readonly')) {
            alert("u can not change");
        }
        else {
            const inpu = document.getElementById("item").value;
            t.innerHTML = inpu;
            x.innerHTML = des;
            alert("you have edited");
            t.setAttribute('readonly', true);
            alert("read only hasbeen set");

        }

    })
}
