import PropTypes from "prop-types";

export default function MainHeading(props) {
  return <h1>{props.title}</h1>;
};

MainHeading.propTypes = {
  title: PropTypes.string.isRequired,
};
