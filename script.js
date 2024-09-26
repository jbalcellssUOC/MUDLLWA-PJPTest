document.addEventListener("DOMContentLoaded", function () {
    
    const button = document.getElementById('myButton');
    const message = document.getElementById('message');
    button.addEventListener('click', function () {
        alert('Button was clicked!');
        message.textContent = 'The text has been changed!';
    });
});
