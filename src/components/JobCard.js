import React, {useState} from "react";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
const goldenIconStyle = {
  color: "gold",
};

const JobCard = (props) => {
  const {jobData} = props;
  const {
    companyName,
    jobRole,
    logoUrl,
    jobDetailsFromCompany,
    maxExp,
    maxJdSalary,
    minExp,
    minJdSalary,
    salaryCurrencyCode,
    location,
    jdLink,
  } = jobData;

  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  // Description to 200 words
  const ReduceDescription = (description) => {
    const words = description.split(" ");
    if (words.length > 60) {
      return words.slice(0, 60).join(" ") + "...";
    }
    return description;
  };

  // Replace null values with "N/A"
  const replaceNullWithNA = (value) => {
    return value === null ? "N/A" : value;
  };

  // Capitalize the first letter of a string
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="jobCard">
      <div>
        <div className="jobCard-heading">
          <div className="image-container">
            <img className="image" src={logoUrl} alt={companyName} />
          </div>
          <div className="title">
            <h3 className="">{replaceNullWithNA(companyName)}</h3>
            <p className="small-text">{replaceNullWithNA(capitalizeFirstLetter(jobRole))}</p>
            <h5 className="">
              {replaceNullWithNA(capitalizeFirstLetter(location))}
            </h5>
          </div>
        </div>
        <div className="description">
          <h4 className="">
            Estimated Salary: ${replaceNullWithNA(minJdSalary)} - $
            {replaceNullWithNA(maxJdSalary)}{" "}
            {replaceNullWithNA(salaryCurrencyCode)}
          </h4>

          <div className="view-more-container small-text">
            <p>About Company:</p>
            <p>
              {showFullDescription
                ? replaceNullWithNA(jobDetailsFromCompany)
                : ReduceDescription(replaceNullWithNA(jobDetailsFromCompany))}
            </p>
            {replaceNullWithNA(jobDetailsFromCompany).split(" ").length >
              60 && (
              <button className="view-more" onClick={toggleDescription}>
                {showFullDescription ? "View Less" : "View More"}
              </button>
            )}
          </div>
          <div className="exp-section">
            <p>Experience Required: </p>
            <h4> {replaceNullWithNA(minExp)} -{" "}
            {replaceNullWithNA(maxExp)} YOE</h4>
          </div>
          <a href={jdLink} target="_blank" className="easy-apply">
            <ElectricBoltIcon fontSize="small" style={goldenIconStyle} />
           <p> Easy Apply</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
