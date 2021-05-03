var url = "bd/crud.php";
//require('./plugins/sweetalert2/mask/parsley.mim.js');

var appMoviles = new Vue({    
el: "#app",   
data:{     
     usuario:[],          
     nome:"",
     nascimento:"",
     cpf:"",
     celular:"",
     email:"",
     endereco:"",
     observacao:""       
 },    
methods:{  
    //******************************** 
    //Botoes de controle   
    //BOTÃO ADICIONAR UM NOVO REGISTRO     
    btnNovo:async function(){                    
        const {value: formValues} = await Swal.fire({
        title: 'Novo',
        html:
        '<div class="container" data-parsley-validate=""><div class="row"><label class="col-sm-3 col-form-label">Nome</label><div class="col-sm-7"><input id="nome" type="text" class="form-control" required></div></div><div class="row"><label class="col-sm-3 col-form-label" for="nascimento">Nascimento</label><div class="col-sm-7"><input id="Nascimento" name="nascimento" type="date" class="form-control" ></div></div><div class="row"><label class="col-sm-3 col-form-label">CPF</label><div class="col-sm-7"><input id="cpf" type="number" min="0" class="form-control" required></div></div><div class="row"><label class="col-sm-3 col-form-label">Celular</label><div class="col-sm-7"><input id="celular" type="number" min="0" class="form-control" required></div></div><div class="row"><label class="col-sm-3 col-form-label">E-mail</label><div class="col-sm-7"><input id="email" type="email" min="0" class="form-control" required data-parsley-required-message="Digite um e-mail" data-parsley-type-message="Insira um e-mail válido"></div></div><div class="row"><label class="col-sm-3 col-form-label">Endereço</label><div class="col-sm-7"><input id="endereco" type="text" min="0" class="form-control" required></div></div><div class="row"><div class="mb-3"><label  class="form-label">Observação</label><textarea class="form-control" id="observacao" rows="3" max-lenght="300" w-100></textarea></div></div></div>',              
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'Salvar',          
        confirmButtonColor:'#1cc88a',          
        cancelButtonColor:'#3085d6',  
        preConfirm: () => {            
            return [
             this.nome = document.getElementById('nome').value,
             this.nascimento = document.getElementById('nascimento'),
             this.cpf = document.getElementById('cpf').value,
             this.celular = document.getElementById('celular').value ,
             this.email = document.getElementById('email').value ,
             this.endereco = document.getElementById('endereco').value, 
             this.observacao = document.getElementById('observacao').value                     
            ]
          }
        })        
        if(this.nome == ""  || this.nascimento ==""|| this.cpf == ""
        || this.celular == ""|| this.email == ""|| this.endereco == ""){
                Swal.fire({
                  type: 'info',
                  title: 'Dados incompletos',                                    
                }) 
        }       
        else{          
          this.novoUsuario();          
          const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000
            });
            Toast.fire({
              type: 'success',
              title: 'usuario cadastrado!'
            })                
        }
    },  
    //************************** */
    //BOTÃO DE EDITAR com sweet alert         
    btnEditar:async function(id ,nome, nascimento,cpf,celular,email,endereco,observacao){                            
        await Swal.fire({
        title: 'EDITAR',
        html:
        '<div class="form-group"><div class="row"><label class="col-sm-3 col-form-label">Nome</label><div class="col-sm-7"><input id="nome" value="'+nome+'" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Nascimento</label><div class="col-sm-7"><input id="Nascimento" value="'+nascimento+'" type="date" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">CPF</label><div class="col-sm-7"><input id="cpf" value="'+cpf+'" type="number" min="0" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Celular</label><div class="col-sm-7"><input id="celular" value="'+celular+'" type="number" min="0" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">E-mail</label><div class="col-sm-7"><input id="email" value="'+email+'" type="email" min="0" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Endereço</label><div class="col-sm-7"><input id="endereco" value="'+endereco+'" type="text" min="0" class="form-control"></div></div><div class="row"><div class="mb-3"><label  class="form-label">Observação</label><textarea class="form-control" id="observacao" value="'+observacao+'" rows="3"></textarea></div></div></div>', 
        focusConfirm: false,
        showCancelButton: true,                         
        }).then((result) => {
          if (result.value) {                                             
            nome = document.getElementById('nome').value,    
            nascimento = document.getElementById('nascimento'),
            cpf = document.getElementById('cpf').value, 
            celular = document.getElementById('celular').value,    
            email = document.getElementById('email').value,
            endereco = document.getElementById('endereco').value,
            observacao = document.getElementById('obs').value                    
            
            this.editarUsuario(id ,nome, nascimento,cpf,celular,email,endereco,observacao);
            Swal.fire(
              'Atualizado!',
              'Registro salvo com sucesso.',
              'success'
            )                  
          }
        });
        
    }, 
    //******************
    //BOTÃO DE DELETE       
    btnApagar:function(id){        
        Swal.fire({
          title: 'Deseja realmente apagar esse registro?',         
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor:'#d33',
          cancelButtonColor:'#3085d6',
          confirmButtonText: 'Delete'
        }).then((result) => {
          if (result.value) {            
            this.apagarUsuario(id);             
            //MESNSAGEM DE ELIMINAÇÃO  
            Swal.fire(
              'Eliminado!',
              'Registro apagado com sucesso',
              'success'
            )
          }
        })                
    },       
    
    //PROCEDIMIENTOS para o crud acontecer com axios/ajax
    listarUsuarios:function(){
        axios.post(url, {opcion:4}).then(response =>{
           this.usuario = response.data;       
        });
    },    
    //Procedimiento CRIAR.
    novoUsuario:function(){
        axios.post(url, {opcion:1, nome:this.nome, nascimento:this.nascimento,cpf:this.cpf, 
        celular:this.celular, email:this.email, endereco:this.endereco,obs:this.observacao }).then(response =>{
           
            this.listarUsuarios();
        });        
         this.nome = "",
         this.nascimento = "",
         this.cpf = "",
         this.celular ="",
         this.email ="",
         this.endereco = "",
         this.observacao = ""  
    },               
    //Procedimiento EDITAR.
    editarUsuario:function(id ,nome, nascimento,cpf,celular,email,endereco,observacao){       
      axios.post(url, {opcion:2, id:id, nome:nome, nascimento:nascimento, cpf:cpf, celular:celular, email:email,endereco:endereco,observacao:observacao }).then(response =>{
            this.listarUsuarios();
        });                             
    },    
    //Procedimiento APAGAR.
    apagarUsuario:function(id){
        axios.post(url, {opcion:3, id:id}).then(response =>{           
            this.listarUsuarios();
            });
    }
           
},
//**************************** */
//MÉTODO NECESSARIO PARA O VUE CRIAR A FUNÇÃO LISTAR      
created: function(){            
   this.listarUsuarios();            
},    
   
});
