let item = document.querySelectorAll('.nav-bar .container a'); 
item.forEach(link=>{
    link.addEventListener('click',(e)=>{
        item.forEach(links =>{
            links.classList.remove('active');
        })
        link.setAttribute('class', 'active');
        
    })
})


document.querySelector('.send-message').addEventListener('click', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    //  you'd send this data or store it
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

    // Clear the form
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

    //  Add an alert or notification here
    alert("Message sent successfully!");
});
