//#5 creating the vriables
const input = document.querySelector('#favchapter');
const button = document.querySelector('button');
const list = document.querySelector('#list');
//registering an event handler
button.addEventListener('click',() => {
    //#3 check input is not blank use if block return .focus()
    if (input.value.trim() ==='') {
        input.focus();
        return;
    }
    // #6 creating new li element to hold chapter title and delete button
    const li = document.createElement('li');
    //(reminder The variable identifier/name did not have to be named the same as the element being created)
    // #7 creating delete button
    const deleteBtn = document.createElement('button');
    // #8 populate the li with the input value
    li.textContent=input.value;
    //#9 set up/populate delete button
    deleteBtn.textContent = '❌';
    // #3 add event handler to delete button
    deleteBtn.addEventListener('click', () => {
        // remove li when delete button is clicked
        li.remove();
    });
    //#10 append delete button to li
    li.append(deleteBtn);
    //#11 append the lli element variable to the unordered list in the HTML
    list.append(li);

        input.value='';
        input.focus();
    
});

