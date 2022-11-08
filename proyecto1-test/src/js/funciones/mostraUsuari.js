export function mostraUsuari(event){
    console.log("Exercici 3, (4 o 5) mostraUsuari")
    
    event.preventDefault()
    var dadesUsuari = new Object()
    dadesUsuari.nick = document.querySelector("#nick").value
    dadesUsuari.password = document.querySelector("#pass").value
    dadesUsuari.avatar = document.querySelector("#avatar").value
    dadesUsuari.points = 0
    dadesUsuari.fechaRegistro = modificaData()
    dadesUsuari.edad = edat()
    dades.push(dadesUsuari)

    console.log(dadesUsuari)
    console.log(dades)
    document.querySelector("#ranking").innerHTML = mostraTaula(dades) 
}  