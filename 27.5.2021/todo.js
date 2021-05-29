let addToDoButton = document.getElementById('addToDo'); /*creat varible*/
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click',function(){
     
    var paragraph= document.createElement('p')
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText = inputField.value;
    
    toDoContainer.appendChild(paragraph);
    inputField.value =""; /*to remove the value in the input */
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration= "line-through" /*to make line through the word*/ 

    })
    paragraph.addEventListener('dblclick',function(){
        toDoContainer.removeChild(paragraph); /*to remove the word*/

    })
})

