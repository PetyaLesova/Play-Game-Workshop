function builtOptions(data){
    let options = {}

    if(data){
        options.headers = {'Content-Type': 'application/json'}
        options.body = JSON.stringify(data)
    }
    return options
}

export const request = async (method, url,data) =>{
    
    const response = await fetch(url, {
        method,
        ...builtOptions(data) // obekt kojto as destructuriram
    })

    const result = await response.json()
    return result
}

//2.20
// export const request = async (method, url,data) =>{
//     let options = {}
   
//     if(data!= undefined){
//         options.headers['Content-Type'] = 'application/json'
//         options.body = JSON.stringify(data)
//     }
//     const response = await fetch(url, {
//         method,
//         options,
//     })
//     const result = await response.json()
//     return result
// }