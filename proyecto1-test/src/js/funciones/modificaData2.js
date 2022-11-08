///Exporto la funció modificaData2
export function modificaData2(objecteDate) {
//Crec una funció que comprovi si un número es d'un sol digit per afegir-li un '0'
  const checkNum = (n1) => {
//Crec una condició que detecti si el numero es menor de deu (d'un sol digit)
    if(n1 < 10){
//L'afegeixo un '0' en format d'string per a que al sumar un int i un string, es junten 
        n1 = "0" + n1

    }
//I retorno el número modificat
    return n1
}
//Crec una variable de dia, mes, hores, minuts i segons i guardo el valor de cadascun
    var dia = objecteDate.getDate()
    var mes = objecteDate.getMonth() + 1
    var h = objecteDate.getHours()
    var m = objecteDate.getMinutes()
    var s = objecteDate.getSeconds() 
//Crido a la funció per comprovar si son d'un dígit o dos
    h = checkNum(h)
    m = checkNum(m)
    s = checkNum(s)
    mes = checkNum(mes)
    dia = checkNum(dia)
//Ara crec una variable on guardaré un string de la data
    let fecha = 
//Crec l'string amb les condicions donades
        objecteDate.getFullYear()
        + '/'  + mes
        + '/'  + dia
        + ' ' + h
        + ':'  + m
        + ':'  + s
//I retorno la data en format d'un string on surtirà amb el format demanat: YYYY/MM/DD HH:MM:SS
    return(fecha)
    
}