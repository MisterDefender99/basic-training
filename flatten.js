const obj = {         // unFlattened object
    name: "test",
    address: {
      personal: "abc",
      office: {
        building: 'random',
        street: 'some street'
      }
    }
  }
  function flattenObject(obj,parent,res={})
  {
      for(let i of Object.keys(obj))
      {
          let propName; 
          (parent) ? propName = parent + "." + i : propName = i;
          (typeof(obj[i])=='object') ? flattenObject(obj[i], propName, res) : res[propName] = obj[i];
      }
      return res;
  }
  const ans = flattenObject(obj);
  console.log("Flattened Object is: \n",ans);
  
  

  