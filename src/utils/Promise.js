const fetchSimulation = () => {
    return new Promise((resolve, reject) =>{
        resolve(dataBase);
        reject(new Error("algo salio mal"))
    })
}

export default fetchSimulation;
