import React, {useState, useEffect} from "react";
import { Button } from "antd";
import { getAllPlants } from "../plans";
import Card from "../components/ui/Card";


const Home = () => {

   const allPlans = getAllPlants();
   const diseaseList = [
     ...new Set(allPlans.reduce((item, val) => [...item, ...val.diseases], [])),
   ];
   const categoryList = [
     ...new Set(
       allPlans.reduce((item, val) => [...item, ...val.plan_categories], [])
     ),
   ];


   const [loading, setLoading] = useState(false);
   const [APIData, setAPIData] = useState([]);
   const [filteredResults, setFilteredResults] = useState([]);
   const [searchInput, setSearchInput] = useState("");
   const [searchCat, setsearchCat] = useState("");
   useEffect(() => {
     setLoading(true);
     setAPIData(allPlans);
   }, []);
   const clearFilter = () => {
     setFilteredResults(APIData);
   };
   const handleChange = (target) => {
     setLoading(false);
     setSearchInput(target);
     if (target == "All") {
       setFilteredResults(APIData);
     } else {
       if (filteredResults != "") {
         const filteredData = filteredResults.filter((item) => {
          console.log(
            Object.values(item.diseases).includes(target),
            target
            // setSearchInput(target)
          )
           return Object.values(item.diseases).includes(target);
         });
         setFilteredResults(filteredData);
       } else {
         const filteredData = APIData.filter((item) => {
          console.log(
          Object.values(item.diseases).includes(target),
          target
        )
           return Object.values(item.diseases).includes(target);
         });
         setFilteredResults(filteredData);
       }
     }
   };
   const handleCatChange = (target) => {
    setLoading(false);
    setsearchCat(target);
    if (target == "All") {
      setFilteredResults(APIData);
    } else {
      if (filteredResults != "") {
        const filteredData = filteredResults.filter((item) => {
          console.log(
            Object.values(item.plan_categories).includes(target),
            target,
            setsearchCat(target)
          )
          return Object.values(item.plan_categories).includes(target);
        });
        setFilteredResults(filteredData);
      } else {
        const filteredData = APIData.filter((item) => {
          console.log(
            Object.values(item.plan_categories).includes(target),
            target,
            setsearchCat(target)
          )
          return Object.values(item.plan_categories).includes(target);
        });
        setFilteredResults(filteredData);
      }
    }
  };

  return (
    <>
    <div className="select-container">
      <select
        defaultValue="All"
        style={{
          width: 180,
          color:"black",
          margin: "0 10px 0 0"
        }}
        onChange={(e)=>handleChange(e.target.value)}
      >
        <option value="All">All</option>
        {diseaseList.map((option) => (
          <option key={option.id} value={option}>
            {option}
          </option>
        ))}
      </select>
      <select
        defaultValue="All"
        style={{
          width: 180,
          color:"black",
          margin: "0 10px 0 0"
        }}
        onChange={(e)=>handleCatChange(e.target.value)}
      >
        <option value="All">All</option>
        {categoryList.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <Button onClick={clearFilter} type="primary">
        Clear Filter
      </Button>
    </div>
    <div className="cards">
      {loading ? (
        <Card lists={APIData} />
      ) : searchInput !== "All" ? (
        filteredResults != "" ? (
          <Card lists={filteredResults} />
        ) : (
          <p>
            No Data available for <b>Category-{searchCat}</b> and
            <b>Disease-{searchInput}</b> selected filters. <br></br>Please clear
            the filter and select a new option
          </p>
        )
      ) : (
        <Card lists={APIData} />
      )}
    </div>
    </>
  );
}


export default Home