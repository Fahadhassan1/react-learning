const a=1;
const b=2;
const c = a+b;


function  display(a, b){
    return  a+b;
}

function Hello({busName, busNumber, busType, busDriver, seatNumber, busObject}) { 


  return <div>
    <h1>Hello World Fahad Hassan {c}  , {display(3,8) }</h1>

  
    {/* get data by props */}
    <h4>{busName} -- {busNumber} -- {busType} -- {busDriver } -- {seatNumber}</h4>


    {/* get data by object */}
    <h4>{busObject.busName} -- {busObject.busDriver} -- {busObject.busType} -- {busObject.busDriver } -- {busObject.seatNumber}</h4>



  </div> ;
}

export default Hello;