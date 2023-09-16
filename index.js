const item = document.querySelector("#item");
const todobox = document.querySelector("#todobox");

item.addEventListener(
    "keyup",
    function (event) {
        if (event.key == "Enter") {
            addtodo(this.value);     // yaha pr this item ko refer krta hai
            this.value = ""
        }


    }
)


const addtodo = (item) => {
    const listitem = document.createElement("li");
    listitem.innerHTML =
        item + '<i class="fa-solid fa-xmark" ></i>';

        listitem.addEventListener(
            "click" ,
            function(){
                this.classList.toggle("done")
            }
        )
        listitem.querySelector("i").addEventListener(
            "click",
            function(){
                listitem.remove()
            }
        )
        todobox.appendChild(listitem)

}