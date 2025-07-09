

let btnAdd = document.querySelector("#btnAdd");

let listaTodo = document.querySelector("#listaTodo");

let item = document.querySelector("#item");

let feed = document.querySelector("#feed");

function addTodo() {
    feed.innerHTML="";

    let todoItem = item.value;

    let li = document.createElement("li");
    li.textContent = todoItem;

    let user = JSON.parse(localStorage.getItem("users"));

    user.todoList.push(todoItem);

    localStorage.setItem("users", JSON.stringify(user));

    if (todoItem != "" && todoItem.trim() != "") {
        li.addEventListener("click", function (event) {
            console.log(li.textContent);
            console.log(this);
            console.log(this.firstChild.nodeValue);
            console.log(event.target);

            // this.setAttribute("class", "txtBar")
            this.classList.toggle("txtBar");
        })

        let button = document.createElement("button");
        button.textContent = "X";
        button.addEventListener("click", function () {
            console.log(this.parentNode);
            listaTodo.removeChild(this.parentNode);
            let user = JSON.parse(localStorage.getItem("users"));
            
            user.todoList.splice(user.todoList.find(function (){
                let arrTodoList = user.todoList;
                for (let index = 0; index < arrTodoList.length; index++) {
                    const element = arrTodoList[index];
                    if(element == this.textContent){
                        return index;
                    }
                }

                // user.todoList.forEach(element => {
                //     if(element == todoItem){
                //         return element;
                //     }
                // });
            }), 1);
            // this.parentNode.firstChild.nodeValue
            localStorage.setItem("users", JSON.stringify(user));
        })

        li.appendChild(button);

        listaTodo.appendChild(li);

        // pulisco il campo input
        item.value = "";
    }else{
        feed.innerHTML = "<h3>Mi dispiace, non hai scritto nulla</h3>"
    }
}

btnAdd.addEventListener("click", addTodo);

item.addEventListener("keypress", function(event){
    console.log(event);
    if(event.key == "Enter"){
        btnAdd.click();
    }
})