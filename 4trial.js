// Function to create a task div
function createTask() {
    
    const footerText =document.getElementById("footer_text");
    const inp= document.getElementById("nt_input");
    // Create elements
    const taskDiv = document.createElement('div');
    const taskTextDiv = document.createElement('div');
    const deleteButton = document.createElement('button');

    console.log(inp.value);

    // Add classes and text
    taskDiv.classList.add('task');
    taskTextDiv.classList.add('task_text');
    taskTextDiv.textContent = inp.value;
    deleteButton.classList.add('del_btn', 'flex_center', 'hide');
    deleteButton.innerHTML = "<img src='delete_FILL0_wght400_GRAD0_opsz24.svg'  alt='task delete button' class='filter_white  del_btn_img'>"

    // Append elements
    taskDiv.appendChild(taskTextDiv);
    taskDiv.appendChild(deleteButton);
    document.getElementById('task_list').appendChild(taskDiv);

    // Update no .of tasks 
    noTasks+=1;
    footerText.textContent=`You have ${noTasks} Pending Tasks`

    //Reset Input
    inp.value="";

    // Delete functionality
    deleteButton.addEventListener('click', function () {
        taskDiv.remove(); // Remove the taskDiv when deleteButton is clicked
        noTasks-=1;
        footerText.textContent=`You have ${noTasks} Pending Tasks`     
    });
    // On Hover Delete Btn 
    taskDiv.addEventListener('mouseover', function () {
        deleteButton.classList.remove('hide');
    });

    taskDiv.addEventListener('mouseout', function () {
        deleteButton.classList.add('hide');
    });
}

// Button event listener to create task
document.getElementById('nt_btn').addEventListener('click', createTask);

// Clear All Tasks 
document.getElementById('clear').addEventListener('click',()=>{
    const taskList= document.getElementById('task_list');
    const footerText =document.getElementById("footer_text");
    taskList.innerHTML="";
    noTasks=0;
    footerText.textContent=`You have ${noTasks} Pending Tasks`;

});

var noTasks=0;

