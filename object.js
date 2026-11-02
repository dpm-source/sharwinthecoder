fav={
    name:"ronaldo",
    age:40,
   teams:["manchester united","juventus","real madrid"],
   awards:["ballon d'or","golden boot"],
}

function fetchandPrint(obj){
    console.log("\n=====user details===")
    console.log(obj.name)
    console.log(obj.age)
    console.log(obj.teams)
    console.log(obj.awards)
}
fetchandPrint(fav)



