function func1()
{
  var ab = new Date();
  var cd = ab.toLocaleDateString();
  alert("No any project available right now (i.e. " + cd + ").\n\nNext Project will be available after 15days.");

}


function func2()
{
    var ab = document.getElementById("ab1").value;
    var cd = document.getElementById("ab2").value;
    var ef = document.getElementById("ab3").value;
    if((ab==0)||(cd==0)||(ef==0))
        {
            alert("Some input element is missing");
        }
    else{
          alert("Dear " + ab.toUpperCase() + "\nWe have received your message. We will contact you as soon as possible.");
    }
}

function chat()
{
  alert("You must login to access this option.");
}



function search()
{
    var a = document.getElementById("sear").value;
    if(a == 0)
        {
            alert("Please input something to search.");
        }
    else
        {
            alert("Information about " + a + " donot exist right now.");
        }
}