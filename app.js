let view = {
    "initialize": function(){
        this.generateTitle();
        this.generateForm();
    },
    "body": document.getElementsByTagName("body")[0],
    "generateTitle": function(){
        let h1 = document.createElement("h1");
        this.body.appendChild(h1);
        h1.appendChild(document.createTextNode("Filmaffinity V2"));
        h1.setAttribute("style", "font-size:20px; color: brown");
    },
    "generateForm":function(){
        let form = document.createElement("form");
        this.body.appendChild(form);

        form.appendChild(this.generateLabel("inputTitle","Title:"));
        form.appendChild(this.generateInput("inputTitle", "text"));
        form.appendChild(this.generateLabel("inputYear","Year:"));
        form.appendChild(this.generateInput("inputYear", "text"));
        form.appendChild(this.generateLabel("inputImage", "Image Url:"));
        form.appendChild(this.generateInput("inputImage", "url"));
        form.appendChild(this.generateButton("buttonAdd", "Add", "submit"));

        
       
    },
    "generateLabel":function(forLabel,text){
        let label = document.createElement("label");
        label.appendChild(document.createTextNode(text));
        label.setAttribute('for', forLabel);
        return label;
   },
   "generateInput":function(id, type){
       let input = document.createElement("input");
       input.id = id;
       input.type = type;
       return input;
   },
   "generateButton":function(id, text, type){
       let button = document.createElement("button");
       button.type= type;+p
       button.id=id;
       button.appendChild(document.createTextNode(text));
       return button;
   }
   }
    
