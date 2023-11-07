import { Col } from "react-bootstrap";
import styles from "./OrderOption.module.scss";

export const OrderOption = ({ name, imagePath, optionTypeText }) => {
  return (
    <Col xs={12} sm={6} md={4} lg={3} className={styles.wrapper}>
      <img
        src={`${process.env.REACT_APP_BASE}/${imagePath}`}
        alt={`${name} ${optionTypeText}`}
      />
    </Col>
  );
};
