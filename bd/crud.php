<?php
include_once 'conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

//RESPONSAVEL POR FAZER O AXIOS FUNCIONAR
$_POST = json_decode(file_get_contents("php://input"), true);
$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$id = (isset($_POST['id'])) ? $_POST['id'] : '';
$nome = (isset($_POST['nome'])) ? $_POST['nome'] : '';
$nascimento = (isset($_POST['nascimento'])) ? $_POST['nascimento'] : '';
$cpf = (isset($_POST['cpf'])) ? $_POST['cpf'] : '';
$celular = (isset($_POST['celular'])) ? $_POST['celular'] : '';
$email = (isset($_POST['email'])) ? $_POST['email'] : '';
$endereco = (isset($_POST['endereco'])) ? $_POST['endereco'] : '';
$obs = (isset($_POST['obs'])) ? $_POST['obs'] : '';

switch($opcion){
    //INSERINDO
    case 1:
        $consulta = "INSERT INTO usuario (nome,nascimento,cpf,celular,email,endereco,observacao) VALUES('$nome', '$nascimento', '$cpf','$celular','$email','$endereco','$obs') ";	
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();                
        break;
    //ATUALIUZANDO    
    case 2:
        $consulta = "UPDATE usuario SET nome='$nome', nascimento='$nascimento', cpf='$cpf', celular='$celular', email='$email',endereco='$endereco', observacao='$obs' WHERE id='$id' ";		
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();                        
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;        
    case 3:
     //DELETANDO   
        $consulta = "DELETE FROM usuario WHERE id='$id' ";		
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();                           
        break;         
    case 4:
        //LISTANDO
        $consulta = "SELECT id, nome,nascimento,cpf,celular,email,endereco,observacao FROM usuario";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
}
print json_encode($data, JSON_UNESCAPED_UNICODE);
$conexion = NULL;