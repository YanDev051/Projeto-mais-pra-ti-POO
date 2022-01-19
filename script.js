class Aluno{
    constructor(){
        this.id = 1;
        this.arrayAlunos=[];
        this.editId=null;

       
    }
    salvar(){
        let aluno =this.lerdados();

        tbody.innerText='';//Para nao duplicar na hora de mostrar

        if(this.validacampo(aluno) == true){
            if(this.editId ==null){
            this.adicionar(aluno);
        }else{
            this.atualizar(this.editId, aluno);
        }

        }

        
        this.listaTabela();
        this.cancelar();

    }
    listaTabela(){
        let tbody =document.getElementById("tbody");

        for(let i =0;i < this.arrayAlunos.length;i++){
            //insere uma nova linha
            let tr =tbody.insertRow();

            //insere uma nova coluna
            let td_id=tr.insertCell();
            let td_aluno=tr.insertCell();
            let td_nota=tr.insertCell();
            let td_idade=tr.insertCell();
            let td_acoes=tr.insertCell();

        td_id.innerText=this.arrayAlunos[i].id;
        td_aluno.innerText=this.arrayAlunos[i].nomeAluno;
        td_idade.innerText=this.arrayAlunos[i].idade;
        td_nota.innerText=this.arrayAlunos[i].nota;
        


        //add a uma classe para poder tambem mexer no css mesmo sendo dinamico
        td_id.classList.add('center');
        
            let imgEdit = document.createElement('img');
            imgEdit.src ="img/edit.png" ;
            td_acoes.appendChild(imgEdit);
            imgEdit.setAttribute("onClick","aluno.preparaEdicao("+JSON.stringify(this.arrayAlunos[i]) +")");

            let imgDelete = document.createElement('img');
            imgDelete.src ="img/remove.png" ;
            td_acoes.appendChild(imgDelete);
            imgDelete.setAttribute("onClick","aluno.deletar("+this.arrayAlunos[i].id +")");
        
        }
        //limpa as secões apos add
        this.cancelar();
        console.log(this.arrayAlunos);
        console.log(aluno.idade - 2021);
        
    }
    adicionar(aluno){
        
        this.arrayAlunos.push(aluno);
        this.id++;
    }
    atualizar (id, aluno){
        
        for (let i =0; i < this.arrayAlunos.length; i++) {
            if(this.arrayAlunos[i].id == id){
                this.arrayAlunos[i].nomeAluno = aluno.nomeAluno;
                this.arrayAlunos[i].nota = aluno.nota;
                this.arrayAlunos[i].idade=aluno.idade;
            }
            
        }
    }
    
    preparaEdicao(dados){
        this.editId = dados.id;
        document.getElementById('nomeAluno').value =dados.nomeAluno;
        document.getElementById('nota').value =dados.nota;
        document.getElementById('idade').value=dados.idade;
        document.getElementById('btn1').innerText ='Atualizar';
    }
    
    lerdados(){
        let aluno={}
        aluno.id =this.id;
        aluno.nomeAluno = document.getElementById("nomeAluno").value;
        aluno.nota = document.getElementById("nota").value;
        aluno.idade =document.getElementById("idade").value;

        return aluno;
    }
    
    validacampo(aluno){
        let msg='';
        if(aluno.nomeAluno ==""){
            msg += 'Informe o nome do Aluno\n'
        }
        if(aluno.nota ==""){
            msg += 'Informe a nota\n'
        }
        if(aluno.idade ==""){
            msg += 'informe o ano de Nascimento'
        }
        if(msg != ''){
            alert(msg);
            return false;
        }                   
        return true;

    }
    cancelar(){
    //limpa as seções
       document.getElementById('nomeAluno').value='';
       document.getElementById('nota').value='';
       document.getElementById('idade').value ='';
       document.getElementById('btn1').innerText ='Salvar';
       this.editId=null;

       
    }
    deletar(id){
        if(confirm('Deseja mesmo deletar o Alunoc  do ID ' + id)){

        
        let tbody =document.getElementById("tbody");
        for(let i=0;i< this.arrayAlunos.length;i++){
            if(this.arrayAlunos[i].id==id){
                this.arrayAlunos.splice(i,1);
                tbody.deleteRow(i);
            }
        }
    }
       
        
    }
}

var aluno = new Aluno();