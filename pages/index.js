import React, {useState, useEffect} from "react";
import { Select, Card, Button } from "antd";
import { getAllPlants } from "../plans";
const { Option } = Select;


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
           return Object.values(item.diseases).includes(target);
         });
         setFilteredResults(filteredData);
       } else {
         const filteredData = APIData.filter((item) => {
           return Object.values(item.diseases).includes(target);
         });
         setFilteredResults(filteredData);
       }
     }
   };

  return (
    <>
      <Select
        defaultValue="All"
        style={{
          width: 120,
        }}
        onChange={handleChange}
      >
        <Option value="All">All</Option>
        {diseaseList.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
      <Select
        defaultValue="All"
        style={{
          width: 120,
        }}
        onChange={handleChange}
      >
        <Option value="All">All</Option>
        {categoryList.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
      <Button onClick={clearFilter} type="primary">
        Clear Filter
      </Button>

      {loading ? (
        <Card lists={APIData} />
      ) : searchInput !== "All" ? (
        filteredResults != "" ? (
          <Card lists={filteredResults} />
        ) : (
          <p>
            No Data available for <b>Category-{searchCat}</b> and{" "}
            <b>Disease-{searchInput}</b> selected filters. <br></br>Please clear
            the filter and select a new option
          </p>
        )
      ) : (
        <Card lists={APIData} />
      )}
    </>
  );
}


export default Home