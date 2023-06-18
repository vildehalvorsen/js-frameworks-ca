import PropTypes from "prop-types";

export default function Head(props) {
  document.title = props.title;
}

Head.propTypes = {
  title: PropTypes.string.isRequired,
};
