function Fruits() {
    const fruitList = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew'];
    const fruitObject = [
        
        {fruitName: 'Mango',fruitColor: 'Yellow', fruitTaste: 'Sweet',fruitSeason: 'Summer', Price: 100},
        {fruitName: 'Orange',fruitColor: 'Orange', fruitTaste: 'Citrus',fruitSeason: 'Winter',  Price: 200},
        {fruitName: 'Grapes',fruitColor: 'Purple', fruitTaste: 'Sweet',fruitSeason: 'Fall',  Price: 300},
        {fruitName: 'Pineapple',fruitColor: 'Brown', fruitTaste: 'Sweet',fruitSeason: 'Summer',  Price: 400},
];

  return (
    <div>
    <ol>
        {/* get data in array */}
        {fruitList.map((fruit) => (
            <li key={fruit}>{fruit} </li>
        ))}
     </ol>


       <ul>
        {/* get data in object */}
        {fruitObject.map((fruit) => (
            
            <li key={fruit.fruitName}>
              {fruit.fruitName} - {fruit.fruitColor} - {fruit.fruitTaste} - {fruit.fruitSeason}
              { fruit.Price < 300 ? ' - Price: Free' : ` - Price: ${fruit.Price}` }
            </li>

        ))}
     </ul>

    </div>

    
  );
}
export default Fruits;