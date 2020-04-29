//Declaration of the correspondence between the differents notation

var notation_correspondence = [
    ["do", "C"],
    ["ré", "D"],
    ["mi", "E"],
    ["fa", "F"],
    ["sol", "G"],
    ["la", "A"],
    ["si", "B"],
];


//Function to create a form at the load of the page
(function(){
    var start = {
        init: function(){

            window.addEventListener('load', function(event){
                //Get the click on button
                var button = document.getElementById('button');
                button.addEventListener('click', function(event){
                    var xmlhttp = new XMLHttpRequest();
                    xmlhttp.addEventListener('readystatechange', function(event){
                    if(xmlhttp.readyState==4){
                        if(xmlhttp.status=="200"){
                            //get data and process
                            var div = document.getElementById('display_form')
                            div.innerHTML = xmlhttp.responseText;
                        }
                        else{
                            alert('Error code ' + xmlhttp.status + ' : ' + xmlhttp.statusText);
                        }
                    }
                    //Display close button
                    var close_buton = document.getElementById('close_buton');
                    close_buton.style.display = "inline";
                })    
                xmlhttp.open("GET", "index.php", false); 
                xmlhttp.send();   
                
                //Remove the button when the page appeared
                button.parentNode.removeChild(button);


                //Send what the user selected
                var result = document.createElement('p');
                result.setAttribute('id', 'result');
                document.body.insertBefore(result, close_buton);

                var select = document.getElementById('select');
                select.addEventListener('change', function(event){
                    var note = select.value;
                    event.preventDefault();
                    if(!note){
                        result.innerHTML = "Aucune note choisie !";
                        return;
                    }
                    else{
                        var xmlhttp2 = new XMLHttpRequest();
                        xmlhttp2.addEventListener('readystatechange', function(event){
                            if(xmlhttp2.readyState==4){
                                if(xmlhttp2.status=="200"){
                                    //get data and process
                                    result.innerHTML = xmlhttp2.responseText;
                                }
                                else{
                                    alert('Error code ' + xmlhttp2.status + ' : ' + xmlhttp2.statusText);
                                }
                            }
                        })
                        xmlhttp2.open("POST", "index.php", false); 
                        xmlhttp2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                        xmlhttp2.send(note);
                        result.innerHTML = xmlhttp2.responseText;
                    }
                })
            })          
            })
        }
    }
    start.init();
})();




