///Importo la base de dades donada
import { dades } from "./dades.js"
//Exporto la funció validaLogin
export function validaNouUsuari(usuari){
//Condició per quan el nick estigui en blanc
    if (usuari.nick == " "){
//Retorno un error 'true' i un missatge d'error  
        return  {
            error: true,
            missatge: "El nick no és correcte"
        }   
    }
//Condició per quan el nick sigui menor de 3 dígits o major de 10 dígits 
    if (usuari.nick.length < 3 || usuari.nick.length > 10){
//Retorno un error 'true' i un missatge d'error  
        return  {
            error: true,
            missatge: "El nick no és correcte"
        }
    }
//Bucle per reccore l'array dades per poder comparar els nicks i les contrasenyes
    for(let index=0;index<dades.length;index++){
//Condició per quan un nick és identic a un altre nick
        if(usuari.nick == dades[index].nick){
//Retorno un error 'true' i un missatge d'error  
            return  {
                error: true,
                missatge: "Aquest usuari ja existeix"
            }
        }
    }
//Condició per quan la contrasenya està buit
    if (usuari.pass == " "){
//Retorno un error 'true' i un missatge d'error  
        return  {
            error: true,
            missatge: "La contrasenya no és correcte"
        }   
    }
//Condició per quan la contrasenya sigui menor de 3 dígits o major de 10 dígits 
    if(usuari.pass.length < 3 || usuari.pass.length > 10){
//Retorno un error 'true' i un missatge d'error  
        return  {
            error: true,
            missatge: "La contrasenya no és correcte"
        }
//Si tot funciona, retorno un error 'false' i un missatge per saber que el nick es correcte
    }else{
        return  {
            error: false,
            missatge: "L'usuari amb nick: "+ usuari.nick +" s'ha creat correctament"
        }  
    }
    
}