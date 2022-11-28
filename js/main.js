function addTodo() {
//  accessing the input field, cloning the content with the method value
  let inputField = document.querySelector(".TodoListField").value;
  console.log(inputField);

  if (inputField !== "") {
//  converting the cloned text from input field into a textNode
    let todosTextNode = document.createTextNode(inputField);

//  storing the textNode in a ListItem with the method crateElement
    let listItemTextNode = document.createElement("li");
    listItemTextNode.appendChild(todosTextNode);

//  append the listitemTextnode as a child to the UL
    document.querySelector(".todoUL").appendChild(listItemTextNode);

//  Access the input field and reset the text value
    document.querySelector(".TodoListField").value = "";
  }
}
