<?php
include_once('inc/layout/header.php');?>
        <div class="campos">
            <div class="campo">
                <label for="nombre">Nombre:</label>
                <input type="text" placeholder="Nombre de contacto" id="nombre">
            </div>    
            <div class="campo">
                <label for="empresa">Empresa:</label>
                <input type="text" placeholder="Nombre de Empresa" id="empresa">
            </div>    
            <div class="campo">
                <label for="telefono">Telefono:</label>
                <input type="tel" placeholder="Numero de contacto" id="telefono">
            </div> 
 
        </div>
        <div class="campo enviar">
                <input type="hidden" id="accion" value="crear">
                <input type="submit" value="Añadir">
            </div>  