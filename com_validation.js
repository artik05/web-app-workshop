function ValidateEmail()
{
var email;

        email = document.getElementById("email").value;

            if (email.indexOf('com') > 0)
            {
                document.getElementById("msg").innerHTML ="com found ->"+ email;
            } else{     
            document.getElementById("msg").innerHTML ="com not found ->"+ email;
            }
}