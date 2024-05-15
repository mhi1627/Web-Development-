let input = document.querySelector("input")
let addBtn = document.querySelector("button")
let tasks = document.querySelector(".tasks ul")
addBtn.addEventListener("click", function (e) {
    if (input.value ==="") alert ("Please add Task!")
        else {
            let li = document.createElement("li");
            li.innerHTML = input.value;
            tasks.appendChild(li);
            let span = document.createElement("span")
            span.innerHTML = "\u00d7";
            li.appendChild(span)
           
        }
        input.value = "";
        saveData();
    })

    tasks.addEventListener("click", function(e){
        if(e.target.tagName === "LI") {
            e.target.classList.toggle("checked")
            saveData();
        }
        else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            saveData();
        }
    }, false)


    function saveData() {
        localStorage.setItem("data", tasks.innerHTML);
    }

    function showTask() {
        showTask.innerHTML = localStorage.getItem("data")
    }

    showTask()

