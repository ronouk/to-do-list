let taskinput = document.querySelector("#newtask input");
let tasks = document.querySelector("#tasks");
let addBtn = document.querySelector("#push");

//activate the add button if content added in the input box
taskinput.onkeyup = () => {
    let userData = taskinput.value;
    if(userData.trim() != 0){
        addBtn.classList.add("active");
    }
    else {
        addBtn.classList.remove("active");
    }
}

//adding items
addBtn.onclick = function(){

    if (
        taskinput.value.length == 0 
        || 
        taskinput.value.trim().length == 0){
        alert("Please enter your to do task");
        
        //this is to clear whitespace
        taskinput.value = taskinput.value.trim();
    }
    else{
        tasks.innerHTML = tasks.innerHTML + `
        <div class="task">
            
            <span id = "#taskname">
                ${taskinput.value}
            </span>

            <button class = "delete">
                    <i class = "far fa-trash-alt"></i>
            </button>
        
        </div>
        
        `;

        // clearing the input box 
        taskinput.value = "";

        // deleting task
        var current_tasks = document.querySelectorAll(".delete");

        for(var i = 0; i < current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }


    }

}