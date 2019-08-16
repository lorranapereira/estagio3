var input = document.getElementById('input-file');
fileName = document.getElementById('file-name');
const area = document.getElementById('area');
const month = document.getElementById('month');
const ano = document.getElementById('ano');
const uploader = document.getElementById('up');  
const p = document.getElementById('p');  
let storageRef = firebase.storage().ref();
let percentage = 0;
const db = firebase.database();


input.addEventListener('change', function(evt){
    if (ano.value == "") {
        document.getElementById('enviar').style.display = "none";
        ano.style.autofocus = true;    
        p.style.display = "block";                
        return p.textContent = "Campo obrigatório";
        
    }
    int = parseInt(month.value)
    if (ano.value <= 1900 || ano.value >=2999) {
        ano.style.autofocus = true;          
        document.getElementById('enviar').style.display = "none";
        p.style.display = "block";        
        return p.textContent = "O formato da data é inválido";
    }
    uploader.style.width = 0+"%";  
    document.getElementById('form').style.display = 'block';  
    evt.stopPropagation();
    evt.preventDefault();
    file = evt.target.files[0];
    console.log(file);
    let metadata = {
      'contentType': file.type,
      'name':file.name,
      'area': area.options[area.selectedIndex].text,
      'month':month.value,
      'ano':ano.value
    };
    localStorage.setItem('name', metadata.name);  
    localStorage.setItem('month', metadata.month);      
    localStorage.setItem('area',metadata.area);
    localStorage.setItem('ano',metadata.ano);
    
    file2 = file; 
    document.getElementById('alert').style.display="none";        
    document.getElementById('enviar').style.display = 'block';  
    fileName.textContent =  localStorage.getItem('name');
    
  
    
});

document.getElementById('enviar').addEventListener('click',function (metadata) {
  document.getElementById('enviar').style.display = 'none';    
  document.getElementById('progress').style.display="block";
  let storageRef = firebase.storage().ref();  
  storageRef.child(localStorage.getItem('area')).child(localStorage.getItem('ano')).child(localStorage.getItem('month')+'/'+file2.name).put(file2, metadata).then(function(snapshot) {
      console.log('Uploaded', snapshot.totalBytes, 'bytes.');
      console.log('File metadata:', snapshot.metadata);
      // Let's get a download URL for the file.
      snapshot.ref.getDownloadURL().then(function(url) {
        console.log('File available at', url);
        // [START_EXCLUDE]
        // [END_EXCLUDE]
      });
      var task = firebase.storage().ref('images').put(file2);
        task.on('state_changed',
          function progress(snapshot){
            var percentage = (snapshot.bytesTransferred /
              snapshot.totalBytes) * 100;
              uploader.style.width = percentage+"%";
              if (percentage == 100){
                document.getElementById('form').style.display="none";                    
                document.getElementById('alert').style.display="block";          
              }
            
          });
    }).catch(function(error) {
      // [START onfailure]
      console.error('Upload failed:', error);
      // [END onfailure]
    });
});
