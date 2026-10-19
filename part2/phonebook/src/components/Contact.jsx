import PropTypes from "prop-types";

const Contact = ({ name, phoneNumber }) => {
  return (
    <>
      <li key={name}>
        {name} {phoneNumber}
      </li>
    </>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  phoneNumber: 
};
