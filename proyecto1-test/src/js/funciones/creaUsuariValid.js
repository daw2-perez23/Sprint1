export function creaUsuariValid(event){

    //Prevenim el refresc de la pàgina
    event.preventDefault()
    //Creem l'objecte dadesUsuari i el definim
    var dadesUsuari = new Object()
    //Capturem els valors del formulari en l'objecte dadesUsuari
    dadesUsuari.nick = document.querySelector("#nick").value
    dadesUsuari.password = document.querySelector("#pass").value
    //Creem la variable 'fecha' i cridem a la funció modificaData
    dadesUsuari.fechaRegistro = modificaData()
    dadesUsuari.edad = edat()

    //Cridem a la funció validaNouUsuari i el guardem a la variable res
    res = validaNouUsuari(dadesUsuari)
    //El cridem per consola i el mostrem amb un alert
    console.log(res.missatge)
    alert(res.missatge)
    //Si tot està bé, afegim l'usuari a l'array dades
    if(res.error == false){
        //Actualitzem el nick amb els parametres donat's 
        dadesUsuari.nick = modificaNick(dadesUsuari.nick)
        //Enviem a l'array dades l'objecte dadesUsuari i per consola mostrem la taula dades
        dades.push(dadesUsuari)
        console.log(mostraTaula(dades))
    }


}