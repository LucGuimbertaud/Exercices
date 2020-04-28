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
                //Create and add the form to the body 
                var form = document.createElement('form');
                document.body.appendChild(form);

                var label = document.createElement('label');
                form.appendChild(label);
                label.innerHTML = "Sélectionnez la note que vous souhaitez traduire :"
                var line_break = document.createElement('br');
                form.appendChild(line_break);

                //Create the list of Select depend of the notes
                var select = document.createElement('select');
                select.setAttribute('id', 'select');
                form.appendChild(select);
                

                notation_correspondence.forEach(note => {
                    let option = document.createElement('option');
                    option.innerHTML = note[0];
                    option.setAttribute('class', 'note');
                    select.appendChild(option);
                });

                var empty_option = document.createElement('option');
                empty_option.innerHTML = " ";
                select.insertBefore(empty_option, select.firstChild);


                //Check the correspondences 
                var selectBox = document.getElementById('select');
                let response = document.createElement('p');
                selectBox.addEventListener('change', function(event){
                    let note = this.value;
                    document.body.appendChild(response);

                    for(let i=0; i<notation_correspondence.length; i++){
                        if(notation_correspondence[i][0] == note){
                            response.innerHTML = "La notation américaine pour la note " + notation_correspondence[i][0] + " est " + notation_correspondence[i][1];
                        }
                    }
                })
            
            });
        }
    }
    start.init();
})();



