//#5 creating the vriables
const input = document.querySelector('#favechapter');
const button = document.querySelector('button');
const list = document.querySelector('#list');
//registering an event handler
button.addEventListener('click',() => {
    // #6 creating new li element to hold chapter title and delete button
    const li = document.createElement('li');
    //(reminder The variable identifier/name did not have to be named the same as the element being created)
    // #7 creating delete button
    const deleteBtn = document.createElement('button');
    // #8 populate the li with the input value
    li.textContent=input.value;
    //#9 set up/populate delete button
    deleteBtn.textContent = '❌';
    //#10 append delete button to li
    li.append(deleteBtn);
    //#11 append the lli element variable to the unordered list in the HTML
    list.append(li);
});

