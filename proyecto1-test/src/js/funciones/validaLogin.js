///Importo la bases de dades donada
import { dades } from "./dades.js"
//Exporto la funció validaLogin
export const validaLogin = (usuari) => {
//Contador per quan l'usuari i la contrasenya siguin incorrectes
    let cont = 0 
//Bucle per reccore l'array dades per poder comparar els nicks i les contrasenyes
    for(let index=0;index<dades.length;index++){
          
//Identifico si l'usuari no existeix i la contrasenya si
        if (usuari.nick != dades[index].nick && usuari.pass == dades[index].pass){
//Sumo un cont més per no entrar a la condició
            cont = cont+1
//Retorno un error 'true' i un missatge d'error
            return  {
                error: true,
                missatge: "Aquest usuari no existeix"
            }   
        }
//Identifico si l'usuari si existeix i la contrasenya no        
        if (usuari.nick == dades[index].nick && usuari.pass != dades[index].pass){
//Sumo un cont més per no entrar a la condició
            cont = cont+1
//Retorno un error 'true' i un missatge d'error            
            return  {
                error: true,
                missatge: "Contrasenya incorrecta"
            }                    
        }
//Identifico si l'usuari si existeix i la contrasenya és correcte
        if (usuari.nick == dades[index].nick && usuari.pass == dades[index].pass){
//Sumo un cont més per no entrar a la condició
            cont = cont+1
//Retorno un error 'false' i un missatge de benvinguda  
            return  {
                error: false,
                missatge: "Hola " + usuari.nick
            }    
        }
    }
//Aquesta condició comproba si l'usuari és incorrecte i la contrasenya també, ja que al estar dins del bucle mai termina de recorrer l'array dades perque termina 
//una vegada troba el primer usuari, perque segurament complirà alguna de les dues condicions
    if(cont == 0){
        return{error: true,
            missatge: "Aquest usuari no existeix"}
    }
    
}  

