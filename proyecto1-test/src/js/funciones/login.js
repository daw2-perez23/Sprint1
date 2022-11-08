export function login(event){
    //Prevenim el refresc de la pàgina
    event.preventDefault()
    //Creem l'objecte dadesUsuari i el definim
    var dadesUsuari = new Object()
    //Capturem els valors del formulari del Login en l'objecte dadesUsuari
    dadesUsuari.nick = document.querySelector("#nickLogin").value
    dadesUsuari.password = document.querySelector("#passLogin").value
    //Cridem a la funció validaLogin i el guardem a la variable res
    res = validaLogin(dadesUsuari)
    //El cridem per consola i el mostrem amb un alert
    console.log(res.missatge)
    alert(res.missatge)
}