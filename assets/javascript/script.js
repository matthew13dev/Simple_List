const input = document.querySelector("input");
const list = document.querySelector("ul");

let array_Size = 0;
let array_List = [array_Size];

function print_List(){

    console.log("Array_List" + "[" + array_List.length + "].");

    for(let i = 0; i < array_List.length; i++){
        console.log("["+ i + "] " + array_List[i]);
    }
}

function handle_Ke_Up(event) {
    validation = event.key === "Enter";
    if (validation) {

        // add iten on list html
        const new_Item = document.createElement("li");
        new_Item.innerHTML = input.value;
        list.appendChild(new_Item);
        
         // Add iten on array
         array_List[array_Size] = input.value;
         array_Size = array_Size + 1;


        console.log("add: " + array_List[array_Size-1]);
        input.value = "";
    }
}

let validation = input.classList.contains("add-item-list");
if (validation) {
    input.addEventListener("keyup", handle_Ke_Up);
}



