<?php
    class Conexion{
        public static function Conectar(){
            define('servidor', 'localhost');
            define('nome_bd', 'cadastro');
            define('usuario', 'root');
            define('password', '');	
            $opcion = array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8');			
            try{
                $conexion = new PDO("mysql:host=".servidor."; dbname=".nome_bd, usuario, password, $opcion);
                return $conexion;
            }catch (Exception $e){
                die("Erro de conexão : ". $e->getMessage());
            }
        }
    }
?>