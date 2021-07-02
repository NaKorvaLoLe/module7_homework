const obj={
    a:'Эй',
    b:'Би',
    c:'Си',
  }
  
  function getKey() {
    for (let key in obj) {

        if (obj.hasOwnProperty(key)) {
    
            console.log('Ключ - ' + key + ' ' + 'Значение - ' + obj[key]); 
        }   
    }
  }
  
  getKey();