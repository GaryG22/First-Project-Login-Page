    var login = {
    created: 2023,
    located: "online",
    address: {
        street: "0000 street",
        city: "los angeles",
        country: "United States"
    }
}
      console.log(login.address.city)     
                
                            //Array using "strings"
                       //  0      1       2        3        4
            var names = ["bob", "carl", "jimmy", "steve", "jake"]
console.log(names.length)
console.log(names[3])

            //addEventListener
document.addEventListener("click", function(){
     document.body.style.color ="red"
  });
 
  //Count Control 
  var count = 2;
     
  var usernameArray = ["vschool"]
   var passwordArray = ["123"]

  function validate () {
   var user = document.login.username.value;
   var password = document.login.password.value;
   var valid = false;
   
   for (var i = 0; i < usernameArray.length; i++)

        if (user == usernameArray[i])
            if (password == passwordArray [i]) 
            {
                valid = true;
                break;
            }

    if(valid)
    {
        window.location = "https://vschooldesign.notion.site/c5aeab43a2a448c4a1031a845939c29b?v=251116b5e71045339fd81aaf3d145ee3"
    }
    else if(count >= 1)
    {
        alert("OOPS! wrong password or username")
        count--;
    }
    else
    {
        alert("Please wait 5 minutes before trying again")
    }
}

 


 

