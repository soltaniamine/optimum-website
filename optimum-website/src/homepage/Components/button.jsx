import PropTypes from 'prop-types';

const DownloadButton = ({ text , handleClick }) => {

  return (
    <a href="/app/optimum-app.apk" download>
      <button
      onClick={handleClick}
      className="bg-mypink text-xs md:text-base  md:w-[37%] lg:w-[28%]  text-white font-bold p-2  md:py-2 md:px-4 rounded-2xl  "
    >
      <span>{text}</span>
    </button>
    </a>
  );
};

DownloadButton.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

export default DownloadButton;