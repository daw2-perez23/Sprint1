export function mostraTaula(dades){
            
    console.log("Exercici 2 mostraTaula")
    
    var taulaHTML =`
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nick</th>
                <th scope="col">Avatar</th>
                <th scope="col">Puntos</th>
                <th scope="col">Fecha de registro</th>
            </tr>
            </thead>
            <tbody>
                `
            for(let index=0;index<dades.length;index++){
                taulaHTML+=`
            <tr>
                <th scope="row">${index+1}</th>
                <td>${dades[index].nick}</td>
                <td><img class="avatar" src="images/avatares/${dades[index].avatar}" alt=""></td>
                <td>${dades[index].points}</td>
                <td>${dades[index].fechaRegistro}</td>
                <td>${dades[index].edad}</td>
            </tr>
            ` 
        }   

    return (taulaHTML)
}