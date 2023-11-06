import { Col } from "react-bootstrap";
import styles from "./ScoopOption.module.scss";

export const ScoopOption = ({ name, imagePath }) => {
  return (
    <Col xs={12} sm={6} md={4} lg={3} className={styles.wrapper}>
      <img
        src={`${process.env.REACT_APP_BASE}/${imagePath}`}
        alt={`${name} scoop`}
      />
    </Col>
  );
};
