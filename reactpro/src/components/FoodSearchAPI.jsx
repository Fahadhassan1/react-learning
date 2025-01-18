import { useState, useEffect,useRef } from "react";

function getFoodSearchAPI() {

    const [searchTerm, setSearchTerm] = useState('');
    const searchInputRef = useRef(null);

    const APIKEY ='51cf5991aa2d49538db3dcd039d48df5';
    const URL = `https://api.spoonacular.com/recipes/complexSearch?search=${searchTerm}&apiKey=${APIKEY}`;
    
    useEffect(() => {
        async function fetchFoodData() {
            try {
                const response = await fetch(URL);
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error('Error:', error);
            }
        }
    
        fetchFoodData();
    }, [searchTerm]);

    const handleSearch = () => {
        setSearchTerm(searchInputRef.current.value);
    };

  return (
    <div>
      <h1>Food Search API</h1>
      <p>This component will handle food search functionality.</p>

      <input onKeyUp={ (e) => handleSearch(e) } type="text" id="searchFood" ref={searchInputRef}  placeholder="Search for food..." />
    </div>
  );
}
export default getFoodSearchAPI;