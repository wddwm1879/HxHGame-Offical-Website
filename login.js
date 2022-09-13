function clickMenu()
{
    alert('This Function is under Maintenance!!');
}
function clickLoginButton()
{
    var loginTextbox = document.getElementById("login-textbox")
    var passwordTextbox = document.getElementById("password-textbox")
    
    console.log(loginTextbox.value);
    console.log(passwordTextbox.value);
    
    if(loginTextbox.value=='' || passwordTextbox.value=='')
        {
            alert('You need to Fill the Blank!!');
        }else{
            alert('This Function is under Maintenance!!')
        }
    if(loginTextbox.value=='')
        {
            loginTextbox.classList.add('login-error');
        }else{
            loginTextbox.classList.remove('login-error');
        }
    if(passwordTextbox.value=='')
        {
            passwordTextbox.classList.add('login-error');
        }else{
            passwordTextbox.classList.remove('login-error');
        }
}