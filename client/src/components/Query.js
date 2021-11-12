import React, { Fragment, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Query = () => {
  const [record, setRecord] = useState([]);
  const [columnlist, setColumnList] = useState([]);
  const [countrylist,setCountryList] = useState([]);
  const [country,setCountry] = useState("");
  const [query,setQuery] = useState("");
  const [temp,setTemp]= useState("");

  const getRecord = async () => {
    try {
      const response = await fetch(`http://localhost:5000/record`);
      const jsonData = await response.json();

      setRecord(jsonData);
      
      console.log(record);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getColumnList = async () => {
    try {
      const response = await fetch(`http://localhost:5000/columnlist`);
      const jsonData = await response.json();

      setColumnList(jsonData);
     
      //console.log(todos);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getCountryList = async () => {
    try {
      const response = await fetch(`http://localhost:5000/countrylist`);
      const jsonData = await response.json();

      setCountryList(jsonData);
     
      //console.log(todos);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getQuery = async (country,query) => {
    try {
      console.log(country);
      const clength = country.length;
      const qlength = query.length;
      if(clength > 0 && qlength > 0){
        if (country == "all"){
          const response1 = await fetch(`http://localhost:5000/${query}`);
          const jsonData1 = await response1.json();
          setRecord(jsonData1);
        }
        else{
          const response1 = await fetch(`http://localhost:5000/${query}/${country}`);
          const jsonData1 = await response1.json();
          setRecord(jsonData1);
        }
        
        
      
      }else{
        alert("Please select query or select country!");
      }
      setTemp(query);
      
    } catch (err) {
      console.error(err.message);
    }
  };

  const reset = async ()=>{
    setCountry("");
    setQuery("");
    setTemp("");
    getRecord();
    document.getElementById("result").classList.toggle("hidden");
  }

  useEffect(() => {
    getRecord();
    getCountryList();
    getColumnList();
  }, []);

  return (
    <Fragment>
      {" "}

      <br></br>
      <Link to = "/home" className = "button-18 button_back">Home</Link>
      <div>
      <h1>Country Data Query Page</h1>
      
      <Form.Group>
        <Form.Label>Select country:</Form.Label>
        <Form.Control
          name="country"
          value={country}
          className="form-control"
          onChange={e => setCountry(e.target.value)}
          as="select"
        >
          <option value=""> -- select an option -- </option>
          <option value="all">All</option>
          {countrylist.map(country => (
            <option key={country.name}>{country.name}</option>
          
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Select query:</Form.Label>
        <Form.Control
          name="query"
          value={query}
          className="form-control"
          onChange={e => setQuery(e.target.value)}
          as="select"
        >
          <option value=""> -- select an option -- </option>
          {columnlist.map(name => (
            <option key={name.COLUMN_NAME}>{name.COLUMN_NAME}</option>
          
          ))}
        </Form.Control>
      </Form.Group>
      <button onClick={() => getQuery(country,query)}className="btn btn-primary">
        Search
      </button>

      <button onClick={() => reset()}className="btn btn-primary ml-3">
        Reset
      </button>
      <table class="table table-striped mt-5 text-center hidden" id = "result">
        <thead>
          <tr>
            <th>Country</th>
            <th>{temp}</th>

          </tr>
        </thead>
        <tbody>
          {record.map(test => (
            <tr key={test.name}>
              <td>{test.name}</td>
              <td>{test.query}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </Fragment>
  );
};
export default Query;