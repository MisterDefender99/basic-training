let parentUl = document.getElementById('myList');
console.log(parentUl)
var ls = {...localStorage}
console.log(typeof ls)
delete ls.randid;
var lsItems = Object.keys(ls)

lsItems.forEach((user) => {
    var retrievedObject = localStorage.getItem(user)
    retrievedObject = JSON.parse(retrievedObject)
    //console.log('retrievedObject: ', JSON.parse(retrievedObject));

    let myItem = retrievedObject[0]
    console.log(myItem)
    let keys = Object.keys(myItem)
    let vals = Object.values(myItem)

    for(let i =0; i< keys.length; i++){
        let liEle = document.createElement('li')
        liEle.innerText = `${keys[i]} : ${vals[i]}` 
        parentUl.appendChild(liEle)
    }
})


