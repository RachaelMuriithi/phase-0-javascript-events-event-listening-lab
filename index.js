
// function addingEventListener() {

//     document.querySelector('#button').addEventListener('click', () => alert("I was clicked"));
// }

function addingEventListener() {
    function alertMe () {
        alert ("I was clicked");
    }
    const input = document.getElementById('button');
    input.addEventListener ('click', alertMe);
}