import React from "react";
import styles from "./Card.module.css";
import { Card, CardMedia, Typography, CardContent } from "@material-ui/core";
import { useState, useEffect } from "react";
import axios from "axios";
import querystring from "querystring";
const Filter = (props) => {
  const years = [];
  const [active, setActive] = useState(null);

  let yearfilter = function () {
    let year;
    for (year = 2006; year <= 2020; year++) {
      years.push(year);
    }
  };
  yearfilter();

  return (
    <div
      style={{display: "inline-block" }}
    >
      <Card className={styles.leftcard}>
        <b>Filters</b>
        <span className={styles.header}> Launch Year</span>
        {years.map((item, index) => (
          <div>
            <button
              id={index}
              value={item}
              className={styles.btn}
              onClick={(e) => props.launchYear(e.target.value)}
              // onClick={(e) => updateApiFilters("launch_year", e.target.value)}
            >
              {item}
            </button>
          </div>
        ))}
        <span className={styles.header}>Successful Launch</span>
        <button
          value="true"
          className={styles.btn}
          onClick={(e) => props.launchSuccess(e.target.value)}
        >
          True
        </button>
        <button
          value="false"
          className={styles.btn}
          onClick={(e) => props.launchSuccess(e.target.value)}
        >
          False
        </button>
        <br />
        <span className={styles.header}>Successful Landing</span>
        <button
          value="true"
          className={styles.btn}
          onClick={(e) => props.landSuccess(e.target.value)}
        >
          True
        </button>
        <button
          value="false"
          className={styles.btn}
          onClick={(e) => props.landSuccess(e.target.value)}
        >
          False
        </button>
        <br />
      </Card>
    </div>
  );
};

export default Filter;
