//Exporto la funció modificaNick
export const modificaNick = (nick) => {
    //Trec els espais buits al principi i al final amb el métode .trim
    nick = nick.trim()
    //Substitueixo els espais buits al text amb el métode .replace i li diem que faci '/ /g' que significa Global substituint tots els espais buits, no només el primer.
    nick = nick.replace(/ /g, '_')
    //Substitueixo totes les lletres per majúscules amb el métode .toUpperCase()
    nick = nick.toUpperCase()
    //I retorno el nick
    return(nick)
    
}