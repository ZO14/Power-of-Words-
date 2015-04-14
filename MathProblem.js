function G2Subtraction() //Grade 2 subtraction problem
{
    var x, y, input;
    x = Math.floor(Math.random() * 20 + 10)
    y = Math.floor(Math.random() * 10 + 5) 
    write("Lyla has two family members with the same birthday. So she makes two cakes "
    + "and tops them with a total of "+ x + " candles. One cake has " + y + " candles. "
    + "How many candles are on the other cake?")
   
    input = document.getElementById("numb").value;

    if (input != x - y)
    {
        write("That is incorrect. Would you like some help?");
    }
    else
    {
        write("That is correct!")
    }
    return ;
}
