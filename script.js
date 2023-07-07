const input_box = document.getElementById("input-box"); 
const list_container = document.getElementById("list-container"); 

function addTask()
{
    if(input_box.value === '')
    {
        alert("you must write somethings");
    }
    else
    {
        let li = document.createElement('li');        // create html  tag "li" and storing in variable li
        li.innerHTML = input_box.value;               //text(input_box) inside li 
        list_container.appendChild(li)                // display li into the list-container(in variable list_container )

        // for delet icon(cross) the list

        let span = document.createElement('span');   
        span.innerHTML = "\u00d7"          
        li.appendChild(span)                          // display            

    }
    input_box.value = '';                             // afte the display the li text field should be empty
    saveData()
    
}

list_container.addEventListener("click", function(e)
{
    if(e.target.tagName === "LI")                   
    {
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN")
    { 
        e.target.parentElement.remove();                  // delete
        saveData()
    }

},false)

//for  store the status 

function saveData()
{
    localStorage.setItem("data",list_container.innerHTML);
}

// display the saved data 

function showTask()
{
    list_container.innerHTML = localStorage.getItem("data")
}

showTask()  // calling of showTask

