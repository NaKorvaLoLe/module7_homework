const obj={
    a:'Эй',
    b:'Би',
    c:'Си',
    1: 'One'
  }
  
  function findStringInObject(object, string) {
    let result = (string in object);
    return result;
  }
  console.log(findStringInObject(obj, 2));