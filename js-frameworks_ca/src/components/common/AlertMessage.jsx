import PropTypes from "prop-types";

export default function AlertMessage({ children, className }) {
  return <p className={className}>{children}</p>;
}

AlertMessage.propTypes = {
  children: PropTypes.node.isRequired,
};
