import axios from "axios";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { mapOption } from "./mapOption";

export const Options = ({ optionType }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE}/${optionType}`
        );
        setOptions(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [optionType]);

  return <Row>{options.map(mapOption(optionType))}</Row>;
};
