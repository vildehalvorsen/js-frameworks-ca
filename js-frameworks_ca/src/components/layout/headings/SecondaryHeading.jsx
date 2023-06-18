import PropTypes from "prop-types";

export default function SecondaryHeading(props) {
  return <h2>{props.title}</h2>;
};

SecondaryHeading.propTypes = {
  title: PropTypes.string.isRequired,
};
