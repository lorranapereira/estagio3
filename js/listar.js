var storage = firebase.storage();  
var storageReff = storage.ref();
var listRef = storageReff.child('images');
const tabela = document.getElementById('tabela');        
var button ="";
var cont = 0;
function listar () {
    listRef.listAll().then(function(res) {
    res.prefixes.forEach(function(folderRef) {
    // All the prefixes under listRef.
    });
    res.items.forEach(function(itemRef) {
        if (itemRef != "0"){
            var starsRef = storageReff.child(itemRef.location.path);
            starsRef.getDownloadURL().then(function(url) {
              starsRef.getMetadata().then(function(metadata) {
                console.log(metadata);
                tr = document.createElement('tr');    
                tr.id = 'lista';
                td = document.createElement('td');
                button = document.createElement('button');
                button.textContent = "Deletar";
                button.setAttribute('onClick', 'deletar(this.id)');  
                button.id = itemRef.location.path;
                td.textContent = itemRef.location.path;
                tr.appendChild(td); 
                td = document.createElement('td');  
                var data = metadata.updated;
                datavalue = data.substring(0,10);
                split = datavalue.split('-');
                novadata = split[2] + "/" +split[1]+"/"+split[0];  
                link = "<iframe src='"+url+"'></iframe>";
                anchor = "<a href='"+url+"'>Visualizar</a>";
                td.innerHTML+=link;
                tr.appendChild(td);                
                td = document.createElement('td');  
                td.innerHTML+=novadata;
                tr.appendChild(td);                     
                td = document.createElement('td');        
                td.innerHTML+=anchor;                
                tr.appendChild(td);     
                tr.appendChild(button);            
                tabela.appendChild(tr);  
                }).catch(function(error) {
                });

            })
        }  
    });
}).catch(function(error) {
    // Uh-oh, an error occurred!
});
}
  
function deletar(id){
    var desertRef = storageReff.child(id);
    
    // Delete the file
    desertRef.delete().then(function() {
      // File deleted successfully
    }).catch(function(error) {
      // Uh-oh, an error occurred!
    });
    location.reload();
}
listar();