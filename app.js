function handleSubmit(){

    var inputValue = document.getElementById("inp").value;
    var numberInputValue = +inputValue;

    var mainDiv = document.getElementById("main");
    mainDiv.innerHTML = "";

    if(inputValue !== ""){
        for(i=0; i< numberInputValue ; i++){

        var x = Math. floor(Math. random() * 256);
        var y = Math. floor(Math. random() * 256);
        var z = Math. floor(Math. random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
               
        var myDiv = document.createElement('div');
        myDiv.style.width = '100px';
        myDiv.style.height = '100px';
        myDiv.style.backgroundColor = bgColor;
        mainDiv.appendChild(myDiv);
        }
        
    }else{
        alert("Please enter a value!");
    }

    document.getElementById("inp").value ="";
}