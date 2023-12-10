const form = document.getElementById('formulario');
let linhas ='';
let linha ='';
let nomes = [];
let numeros = [];


form.addEventListener('submit',function(e){
    e.preventDefault();

    const nomeContato = document.getElementById('nome-contato');
    const telContato = document.getElementById('tel-contato');
    const corpoTabela = document.getElementById('corpo-tabela');

    if(nomes.includes(nomeContato.value)){
        alert('Contato já existente');
    } 
    else{
        if(telContato.value.length < 8){
            alert('Digite um número de telefone válido');
        }
        else{
            linha = '<tr>';
            linha += `<td>${nomeContato.value}</td>`;
            linha += `<td>${telContato.value}</td>`;
            linha += '</tr>';

            linhas += linha;
            corpoTabela.innerHTML = linhas;
            nomes.push(nomeContato.value);
            numeros.push(telContato.value);

            nomeContato.value = '';
            telContato.value = '';
        }
    }
    
})