var storage = firebase.storage();  
var storageReff = storage.ref();
var button ="";
var cont = 0;
var jan = 0;
var fev = 0;
var mar = 0;
var abr = 0;
var mai = 0;
var jun = 0;
var jul = 0;
var ago = 0;
var set = 0;
var out = 0;
var nov = 0;
var dez = 0;
var storage = firebase.storage();  
var storageReff = storage.ref();
const tabela = document.getElementById('tabela');        
var button ="";
var cont = 0;
var i = 0;
vetor = [1,2,3,4,5,6,7,8,9,"o","n","d"]
listar();    
function listar () {
    vetor2 = [];
    for (var i = 0; i <= vetor.length; i++) {        
    var listRef = storageReff.child(localStorage.getItem('area')+'/'+localStorage.getItem('ano')+'/'+vetor[i]);
    listRef.listAll().then(function(res) {
    console.log(res.items);                            
    res.prefixes.forEach(function(folderRef) {
    });
    res.items.forEach(function(itemRef) {
        console.log("JJJJ");                    
        if (itemRef != "0"){
            var starsRef = storageReff.child(itemRef.location.path);
            starsRef.getDownloadURL().then(function(url) {
              starsRef.getMetadata().then(function(metadata) {
                console.log(metadata);
                if(localStorage.getItem('area') == "Comércio e Alimento"){
                    i = metadata.fullPath.substring(25,26);
                    console.log(i);
                }
                if(localStorage.getItem('area') == "Estabelecimento de Sáude" || localStorage.getItem('area') == "Comércio de Medicamentos" ){
                    i = metadata.fullPath.substring(30,31);
                    console.log(i);                    
                }     
                if(localStorage.getItem('area') == "Cosméticos e Saneantes"){
                    i = metadata.fullPath.substring(28,29);
                    console.log(i);                    
                }                  
                if (i == 1) {
                    jan+=1;
                }
                if (i == 2) {
                    fev+=1;
                }
                if (i == 3) {
                    mar+=1;
                }
                if (i == 4) {
                    abr+=1;
                }
                if (i == 5) {
                    mai+=1
                }
                if (i == 6) {
                    jun+=1;
                }
                if (i == 7) {
                    jul+=1;
                }
                if (i == 8) {
                    ago+=1;
                }
                if (i == 9) {
                    set+=1;
                }
                if (i == "o") {
                    out+=1;
                }
                if (i == "n") {
                    nov+=1;
                }
                if (i == "d") {
                    dez+=1;
                }
                cont++;
                if (cont == 13) {
                  grafico();
                }
                }).catch(function(error) {
                });

            })

        }
  
    });
}).catch(function(error) {
    // Uh-oh, an error occurred!
});

}

}

function grafico(){ 
        var ctx = document.getElementById('okCanvas2').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',                   
            data: {
                labels: ['Jan', 'Fer', 'Mar','Abr', 'Mai', 'Jun', 'Jul','Ago', 'Set', 'Out','Nov', 'Dez'],
                datasets: [{
                    label: 'Taxa de Requisições',
                    data: [jan, fev, mar, abr, mai, jun,jul,ago,set,out,nov,dez],
                    backgroundColor: [
                        'rgba(77,77,255,0.4)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                title: {
                display:true,
                text:"Incidências de Denúncias - "+localStorage.getItem('area')+" - "+localStorage.getItem('ano'),
                fontSize:20
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
}











