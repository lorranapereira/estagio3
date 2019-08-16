const nome = document.getElementById('nome');
const cnpj = document.getElementById('cnpj');
const cpf = document.getElementById('cpf');
const endprof = document.getElementById('endprof');
const endres = document.getElementById('endres');
const data = document.getElementById('data');
const espec = document.getElementById('espec');
const dataemi = document.getElementById('dataemi');
const identidade = document.getElementById('identidade');
const cr = document.getElementById('cr');
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
    doc.setFontSize(18);      
    doc.text('REQUISIÇÃO DE NOTIFICAÇÃO DE RECEITA', 37, 22);   
    doc.setFontType("bold");    
    doc.setFontSize(11);          
    doc.setFont("italic");    
    doc.text('Nome do Requisitante', 17, 36);
    doc.setFont("italic");    
    doc.setFontType("bold");    
    doc.text('Endereço ', 17, 42);
    doc.setFontType("bold");    
    doc.text('CNPJ ', 17, 48);  
    doc.text('CPF ', 17, 54);    
    doc.text('CRM,CRMV,CRO ', 17, 60);    
    doc.text('Especialidade', 100, 60);        
    doc.setFontType("normal");        
    doc.text(nome.value, 65, 36);    
    doc.text(endprof.value, 65, 42);    
    doc.text(cnpj.value, 65, 48);
    doc.text(cpf.value, 65, 54);    
    doc.text(cr.value, 65, 60);   
    doc.text(espec.value, 130, 60);       
    doc.setFontSize(12);    
    doc.setFont("italic");    
    doc.setFontType('bold'); 
    doc.text('AUTORIZAÇÃO EMITIDA PELA VISA N°', 17, 74);
    doc.setFontSize(11); 
    doc.setFontType('bold');     
    doc.text('Pelo presente, autorizo o(a) Sr(a)', 17, 80);
    
    doc.setFontSize(12);    
    doc.text('_______________________', 100, 74);   
    doc.setFontType('normal');    
    doc.setFontSize(12);  
    doc.setFontType('normal'); 
    doc.text('Ramo de endres: ', 14, 103);
    doc.setFontSize(12);        
    doc.setFontType('normal'); 
    doc.text('Motivo da Denúncia: ', 14, 128);
    doc.setFontSize(12);    
    doc.setFontType('normal');        
    doc.text('Resultado da vistoria', 14, 162);        
    doc.text('realizada pela VISA: ', 14, 167);    
    doc.setFontSize(12);  
    doc.setFontType('normal');      
    doc.text('Assinatura do responsável ', 14, 192);
    doc.setFontSize(12);   
    doc.text('pelo estabelecimento ', 14, 197);
    doc.setFontType('normal');   
    doc.text('Assinatura da VISA: ', 14, 207);
    doc.text('cr da VISA: ', 14, 220);              
    doc.text('Data da Vistoria: ', 14, 233);      
    doc.text('Nome do identidade (opcional): ', 14, 245);          
    doc.setFontType('bold');
    doc.setTextColor(0, 0, 0); 
    doc.rect(20, 25, 165, 0.5, 'F'); //Fill and Border
    doc.setFontSize(12);
    doc.setFontType('bold');
    doc.setTextColor(0, 0, 0); 
    doc.rect(10, 65, 190, 0.1, 'F'); //Fill and Border
    doc.setFontSize(3);
    doc.setFontType('bold');
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
    doc.rect(80, 65, 0.1, 185, 'F'); //Fill and Border
    doc.setFontSize(0.3);
    doc.setFontType('normal');
    doc.setTextColor(0, 0, 0);
    doc.rect(10, 145, 190, 0.1, 'F'); //Fill and Border
    doc.setFontSize(3);
    doc.setFontType('normal');
    doc.setFontSize(10);     
    doc.text('.........................................................................................................................', 85, 193);  
    doc.text('.........................................................................................................................', 85, 208); 
    if (cr.value =="") {
        doc.text('.........................................................................................................................', 85, 220.6);         
    }

   
 
    if (novadata =="undefined/undefined/") {                
        doc.setFontSize(12);    
        doc.text('_____ / _____ / ______', 65, 83);    
    }
    else{
        doc.setFontSize(12);            
        doc.text(novadata, 65, 83);                    
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

