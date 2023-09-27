// Getting references to html objects.
const form = document.getElementById("Build");
const input = document.getElementById("task");
const taskList = document.getElementById("tasks");

//Deletion function.
function Delete(event) {
  const listItem = event.target.parentElement; // Get the parent element
  taskList.removeChild(listItem); // Remove the parent element
}


// Add an event listener to the form for form submission
form.addEventListener("submit", function (event) {
  // Prevent the default form behaviour.
  event.preventDefault();
  // Get value of input by user.
  const taskDescription = input.value ;
  // Create a new list item .
  const list = document.createElement("li");
  // Set the text content of the list item to the task description
  list.textContent = taskDescription;
  // Create a delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = " x ";
  // Add a click event listener.
  deleteButton.addEventListener("click", Delete);
  // Append the delete button.
  list.appendChild(deleteButton);
   // Append the new list.
  taskList.appendChild(list);
  // Clear the input area.
  input.value = "";
});