function clickMenu()
{
    alert('This Function is under Maintenance!!');
}
function clickSignupButton()
{
    var firstTextbox = document.getElementById('first-name');
    var lastTextbox = document.getElementById('last-name');
    var userTextbox = document.getElementById('user-name');
    var emailTextbox = document.getElementById('email-name');
    var passwordTextbox = document.getElementById('password-textbox');
    var repeatTextbox = document.getElementById('repeat-textbox');
    
    console.log(firstTextbox.value);
    console.log(lastTextbox.value);
    console.log(userTextbox.value);
    console.log(emailTextbox.value);
    console.log(passwordTextbox.value);
    console.log(repeatTextbox.value);
    
    if
    (
        firstTextbox.value=='' ||
        lastTextbox.value=='' ||
        userTextbox.value=='' ||
        emailTextbox.value=='' ||
        passwordTextbox.value=='' ||
        repeatTextbox.value==''
    )
        alert('You need to Fill the Blank!!');
    else
        {
            alert('This Function is under Maintenance!!')
        }
    
    if(firstTextbox.value=='')
        {
            firstTextbox.classList.add('login-error');
        }
    else
        {
            firstTextbox.classList.remove('login-error');
        }
    if(lastTextbox.value=='')
        {
            lastTextbox.classList.add('login-error');
        }
    else
        {
            lastTextbox.classList.remove('login-error');
        }
    if(userTextbox.value=='')
        {
            userTextbox.classList.add('login-error');
        }
    else
        {
            userTextbox.classList.remove('login-error');
        }
    if(emailTextbox.value=='')
        {
            emailTextbox.classList.add('login-error');
        }
    else
        {
            emailTextbox.classList.remove('login-error');
        }
    if(passwordTextbox.value=='')
        {
            passwordTextbox.classList.add('login-error');
        }
    else
        {
            passwordTextbox.classList.remove('login-error');
        }
    if(repeatTextbox.value=='')
        {
            repeatTextbox.classList.add('login-error');
        }
    else
        {
            repeatTextbox.classList.remove('login-error');
        }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}