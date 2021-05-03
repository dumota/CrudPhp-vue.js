<!doctype html>
<html>
    <head>
    <link rel="shortcut icon" href="#" />
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
    <!-- Bootstrap CSS -->    
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <!-- FontAwesom CSS -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">        
    <!--Sweet Alert 2 -->
    <link rel="stylesheet" href="plugins/sweetalert2.min.css">        
    <!--CSS custom -->  
    <link rel="stylesheet" href="main.css">  
    <!--link css dataTable-->
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.24/css/jquery.dataTables.css">
  


    </head>
    <body>
    <header>
        <h2 class="text-center text-dark"><span class="badge badge-success">Cadastro de Usuarios</span></h2>
    </header>    
    
     <div id="app">  
       
                
        <div class="container">                
            <div class="col">        
               <button @click="btnNovo" class="btn btn-success" title="Novo"><i class="fas fa-plus-circle fa-2x"></i></button>
            </div>
            </div>                
            <div class="row mt-5">
                <div class="col-lg-12">                    
                    <table class="table table-striped" id="listar">
                        <thead>
                            <tr class="bg-primary text-light">
                                <th>ID</th>                                    
                                <th>Nome</th>
                                <th>Nascimento</th>
                                <th>CPF</th>    
                                <th>Celular</th>
                                <th>E-mail</th>
                                <th>Endereco</th>
                                <th>Observação</th>
                                <th>Ações</th>
                            </tr>    
                        </thead>
                        <tbody>
                            <tr v-for="(user,indice) of usuario">                                
                                <td>{{user.id}}</td>                                
                                <td>{{user.nome}}</td>
                                <td>{{user.nascimento}}</td>
                                <td>{{user.cpf}}</td>
                                <td>{{user.celular}}</td>
                                <td>{{user.email}}</td>
                                <td>{{user.endereco}}</td>
                                <td>
                                    <textarea >{{user.observacao}}</textarea>
                                </td>
                                
                                <td>
                                <div class="btn-group" role="group">
                                    <button class="btn btn-secondary" title="Editar" @click="btnEditar(user.id, user.nome, user.nascimento, user.cpf, user.celular, user.email, user.endereco,user.observacao)"><i class="fas fa-pencil-alt"></i></button>    
                                    <button class="btn btn-danger" title="Eliminar" @click="btnApagar(user.id)"><i class="fas fa-trash-alt"></i></button>      
								</div>
                                </td>
                            </tr>    
                        </tbody>
                    </table>                    
                </div>
            </div>
        </div> 
            
    </div>        
    <!-- jQuery, Popper.js, Bootstrap JS -->
    <script src="jquery/jquery-3.3.1.min.js"></script>
    <script src="popper/popper.min.js"></script>
    <script src="bootstrap/js/bootstrap.min.js"></script>         
    <!--Vue.JS -->    
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>              
    <!--Axios -->      
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.15.2/axios.js"></script>    
    <!--Sweet Alert 2 -->        
    <script src="plugins/sweetalert2/sweetalert2.all.min.js"></script>    
    <!--cdn Data table -->    
    <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.24/js/jquery.dataTables.js"></script>
    <!--Código custom -->          
    <script src="main.js"></script> 
    <!--inserindo a função modificada--> 
    <script src="plugins/dataTable.js"></script>
        
    </body>
</html>