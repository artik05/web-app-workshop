function ValidateEmail()
{
var email;

        email = document.getElementById("email").value;

            var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

            if (reg.test(email) == false)
            {
                document.getElementById("msg").innerHTML ="Invalid EMail ->"+ email;
            } else{     
            document.getElementById("msg").innerHTML ="Valid Email ->"+ email;
            }
}