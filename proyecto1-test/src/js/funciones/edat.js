///Exporto la funció de edat
export  const edat = (objecteDate) => {
    
//Genero un objecte Date amb la data de l'any de naixement que ha possat l'usuari
    let anyo = new Date(objecteDate)
//Genero una condició de si el resultat es invalid, retorni un error 'true' i un missatge d'error
    if(anyo == 'Invalid Date'){
        return{
            error: true,
            missatge: "El format no és correcte"
        }
//En canvi si no n'hi ha error, calculo l'edat
    }else{
//Genero l'objecte Date amb la data actual
        let actual = new Date()
//Les converteixo en milisegons i les restem 
        let edatFinal = actual.getTime() - anyo.getTime(objecteDate)
//Ara paso de milisegons a dies transcurrits des de l'any 1970/01/01
        edatFinal = edatFinal / (1000*60*60*24)
//I ara el transformo als anys que han pasat 
        edatFinal = Math.trunc(edatFinal/365)
//I retorno l'edat
        return(edatFinal)
    } 
}