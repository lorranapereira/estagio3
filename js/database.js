const lista = document.getElementById('lista');
const razaoNome = document.getElementById('razaoNome');
const motivo = document.querySelectorAll('textarea')[0];
const vistoria = document.querySelectorAll('textarea')[1];
const endereco = document.getElementById('endereco');
const atividade = document.getElementById('atividade');
const data = document.getElementById('data');
const dataemi = document.getElementById('dataemi');
const denunciante = document.getElementById('denunciante');
const equipe = document.getElementById('equipe');
const addButton = document.getElementById('addButton');
const db = firebase.database();
const gerarPdf = document.getElementById('gerarPdf');

addButton.addEventListener('click',function() {
    datavalue = data.value;
    split = datavalue.split('-');
    novadata = split[2] + "/" +split[1]+"/"+split[0];
    datavalue2 = dataemi.value;
    split2 = datavalue2.split('-');
    novadataV = split[2] + "/" +split[1]+"/"+split[0];
    var doc = new jsPDF();    
    doc.setFont("times");
    doc.setFontType("bold");
    doc.setFontSize(13);      
    doc.text(' REQUISIÇÃO DA NOTIFICAÇÃO DE RECEITA ', 65, 23);   
 
    doc.setFontSize(15);       
    doc.text('DENÚNCIA ', 85, 60);  
    doc.setFontSize(13);    
    doc.setFontType('normal');    
    doc.text('Razão e/ou Nome Fantasia:', 14, 73);
    doc.text(razaoNome.value, 88, 73);    
    doc.text(endereco.value, 88, 93);    
    doc.text(atividade.value, 88, 103);
    doc.text(equipe.value, 88, 221);    
    doc.text(denunciante.value, 88, 245);
    doc.setFontSize("12");    
    var splitTitle = doc.splitTextToSize(motivo.value, 110);
    doc.text(84,115,splitTitle);    
    doc.setFontSize("12");    
    var splitTitle = doc.splitTextToSize(vistoria.value, 110);
    doc.text(84,153,splitTitle);    
    doc.setFontSize(13);    
    doc.setFontType('normal'); 
    doc.text('Data: ', 14, 83);
    doc.setFontSize(13);  
    doc.setFontType('normal');    
    doc.text('Endereço: ', 14, 93);
    doc.setFontSize(13);  
    doc.setFontType('normal'); 
    doc.text('Ramo de Atividade: ', 14, 103);
    doc.setFontSize(13);        
    doc.setFontType('normal'); 
    doc.text('Motivo da Denúncia: ', 14, 128);
    doc.setFontSize(13);    
    doc.setFontType('normal');        
    doc.text('Resultado da vistoria', 14, 162);        
    doc.text('realizada pela VISA: ', 14, 167);    
    doc.setFontSize(13);  
    doc.setFontType('normal');      
    doc.text('Assinatura do responsável ', 14, 192);
    doc.setFontSize(13);   
    doc.text('pelo estabelecimento ', 14, 197);
    doc.setFontType('normal');   
    doc.text('Assinatura da VISA: ', 14, 207);
    doc.text('Equipe da VISA: ', 14, 220);              
    doc.text('Data da Vistoria: ', 14, 233);      
    doc.text('Nome do Denunciante (opcional): ', 14, 245);          
    doc.rect(10, 12, 190, 250, 'S'); //Fill and Border
    doc.setFontSize(8);
    doc.setFontType('normal');
    doc.setTextColor(0, 0, 0); 
    doc.rect(10, 50, 190, 0.1, 'F'); //Fill and Border
    doc.setFontSize(8);
    doc.setFontType('normal');
    doc.setTextColor(0, 0, 0); 
    doc.rect(10, 65, 190, 0.1, 'F'); //Fill and Border
    doc.setFontSize(3);
    doc.setFontType('normal');
    doc.setTextColor(0, 0, 0); 
    doc.rect(10, 76.5, 190, 0.1, 'F'); //Fill and Border
    doc.setFontSize(8);
    doc.setFontType('normal'); 
    doc.rect(10, 86.6, 190, 0.1, 'F'); //Fill and Border
    doc.setFontSize(0.3);
    doc.setFontType('normal');
    doc.rect(10, 96, 190, 0.1, 'F'); //Fill and Border
    doc.setFontSize(0.3);
    doc.setFontType('normal');
    doc.rect(10, 108, 190, 0.1, 'F'); //Fill and Border
    doc.setFontSize(0.3);
    doc.setFontType('normal');
    doc.setFontSize(10);  
    if (motivo.value =="") {
        doc.text('........................................................................................................................................', 80, 116);        
        doc.text('........................................................................................................................................', 80, 123);   
        doc.text('........................................................................................................................................', 80, 131);  
        doc.text('........................................................................................................................................', 80, 138);    
           
    }      
    doc.rect(80, 65, 0.1, 185, 'F'); //Fill and Border
    doc.setFontSize(0.3);
    doc.setFontType('normal');
    doc.setTextColor(0, 0, 0);
    doc.rect(10, 145, 190, 0.1, 'F'); //Fill and Border
    doc.setFontSize(3);
    doc.setFontType('normal');
    doc.setFontSize(10);     
    if (vistoria.value =="") {        
    doc.text('........................................................................................................................................', 80, 151);        
    doc.text('........................................................................................................................................', 80, 157);   
    doc.text('........................................................................................................................................', 80, 164);  
    doc.text('........................................................................................................................................', 80, 171);  
    doc.text('........................................................................................................................................', 80, 178);  
    }
    doc.text('.........................................................................................................................', 85, 193);  
    doc.text('.........................................................................................................................', 85, 208); 
    if (equipe.value =="") {
        doc.text('.........................................................................................................................', 85, 220.6);         
    }

   
    if (novadataV =="undefined/undefined/") {                
        doc.setFontSize(13);    
        doc.text('_____ / _____ / ______', 88, 235);    
    }
    else{
        doc.setFontSize(13);            
        doc.text(novadataV, 88, 235);            
    }
    if (novadata =="undefined/undefined/") {                
        doc.setFontSize(13);    
        doc.text('_____ / _____ / ______', 88, 83);    
    }
    else{
        doc.setFontSize(13);            
        doc.text(novadata, 88, 83);                    
    }
    doc.rect(10, 183, 190, 0.1, 'F'); //Fill and Border    
    doc.rect(10, 200, 190, 0.1, 'F'); //Fill and Border    
    doc.rect(10, 212, 190, 0.1, 'F'); //Fill and Border
    
    doc.setFontSize(0.3);
    doc.setFontType('normal');
    doc.setTextColor(0, 0, 0);
    doc.rect(10, 225, 190, 0.1, 'F'); //Fill and Border
    doc.rect(10, 238, 190, 0.1, 'F'); //Fill and Border
    doc.rect(10, 250, 190, 0.1, 'F'); //Fill and Border        
    doc.save('denuncia.pdf');    

});

