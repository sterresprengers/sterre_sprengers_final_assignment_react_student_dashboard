import React, { useState, useEffect } from "react";
import { csv } from "d3";
import Header from "./Header";
import Chart from "./Chart";
import Table from "./Table";
import { Link } from "react-router-dom";

function MainContainer() {
  // string-values to numbers + adding id and filter
  const row = (d) => {
    d.difficulty = +d.difficulty;
    d.valuation = +d.valuation;
    d.id = d.name + d.assignment;
    d.filter = true;
    d.checked = true;
    return d;
  };

  const [wincData, setData] = useState([]);
  useEffect(() => {
    csv("data.csv", row).then(setData);
  }, []);

  function filterNameCheckbox(e) {
    const selectedCheckbox = e.target.value;
    setData(() =>
      wincData.map((data) => {
        if (selectedCheckbox == data.name && data.checked === true) {
          return {
            name: data.name,
            assignment: data.assignment,
            difficulty: data.difficulty,
            valuation: data.valuation,
            id: data.id,
            filter: data.filter,
            checked: false,
          };
        } else if (selectedCheckbox == data.name && data.checked === false) {
          return {
            name: data.name,
            assignment: data.assignment,
            difficulty: data.difficulty,
            valuation: data.valuation,
            id: data.id,
            filter: data.filter,
            checked: true,
          };
        } else if (selectedCheckbox !== data.name && data.checked === false) {
          return {
            name: data.name,
            assignment: data.assignment,
            difficulty: data.difficulty,
            valuation: data.valuation,
            id: data.id,
            filter: data.filter,
            checked: false,
          };
        } else {
          return {
            name: data.name,
            assignment: data.assignment,
            difficulty: data.difficulty,
            valuation: data.valuation,
            id: data.id,
            filter: data.filter,
            checked: true,
          };
        }
      })
    );
  }

  function filterDifficulty(e) {
    const defaultFilter = document.querySelector("#valuation-filter");
    defaultFilter.value = "";
    const selectedFilter = e.target.value;
    setData(() =>
      wincData.map((data) => {
        if (selectedFilter == "") {
          return {
            name: data.name,
            assignment: data.assignment,
            difficulty: data.difficulty,
            valuation: data.valuation,
            id: data.id,
            filter: true,
            checked: data.checked,
          };
        } else if (selectedFilter == data.difficulty) {
          return {
            name: data.name,
            assignment: data.assignment,
            difficulty: data.difficulty,
            valuation: data.valuation,
            id: data.id,
            filter: true,
            checked: data.checked,
          };
        } else {
          return {
            name: data.name,
            assignment: data.assignment,
            difficulty: data.difficulty,
            valuation: data.valuation,
            id: data.id,
            filter: false,
            checked: data.checked,
          };
        }
      })
    );
  }

  function filterValuation(e) {
    const defaultFilter = document.querySelector("#difficulty-filter");
    defaultFilter.value = "";
    const selectedFilter = e.target.value;
    setData(() =>
      wincData.map((data) => {
        if (selectedFilter == "") {
          return {
            name: data.name,
            assignment: data.assignment,
            difficulty: data.difficulty,
            valuation: data.valuation,
            id: data.id,
            filter: true,
            checked: data.checked,
          };
        } else if (selectedFilter == data.valuation) {
          return {
            name: data.name,
            assignment: data.assignment,
            difficulty: data.difficulty,
            valuation: data.valuation,
            id: data.id,
            filter: true,
            checked: data.checked,
          };
        } else {
          return {
            name: data.name,
            assignment: data.assignment,
            difficulty: data.difficulty,
            valuation: data.valuation,
            id: data.id,
            filter: false,
            checked: data.checked,
          };
        }
      })
    );
  }

  function handleNameRoute(e) {
    const clickedName = e.target.value;
    setData(() =>
      wincData.map((data) => {
        if (clickedName == data.name) {
          return {
            name: data.name,
            assignment: data.assignment,
            difficulty: data.difficulty,
            valuation: data.valuation,
            id: data.id,
            filter: true,
            checked: true,
          };
        } else {
          return {
            name: data.name,
            assignment: data.assignment,
            difficulty: data.difficulty,
            valuation: data.valuation,
            id: data.id,
            filter: false,
            checked: false,
          };
        }
      })
    );
  }

  function showAllData() {
    const defaultFilterValuation = document.querySelector("#valuation-filter");
    defaultFilterValuation.value = "";
    const defaultFilterDifficulty =
      document.querySelector("#difficulty-filter");
    defaultFilterDifficulty.value = "";
    setData(() =>
      wincData.map((data) => {
        return {
          name: data.name,
          assignment: data.assignment,
          difficulty: data.difficulty,
          valuation: data.valuation,
          id: data.id,
          filter: true,
          checked: true,
        };
      })
    );
  }

  return (
    <>
      <Header />
      <Link to="/">
        <button className="button-all-students" onClick={showAllData}>
          Show all data
        </button>
      </Link>
      <Chart data={wincData} />
      <h1>Data</h1>
      <div className="header-line"></div>
      <Table
        data={wincData}
        filterDifficulty={filterDifficulty}
        filterValuation={filterValuation}
        filterNameCheckbox={filterNameCheckbox}
        handleNameRoute={handleNameRoute}
      />
    </>
  );
}

export default MainContainer;
