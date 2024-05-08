import React, { useState } from "react";

const JobCard = (props) => {
  const { jobData } = props;
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
    location
  } = jobData;

  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  // Function to truncate the job description to 200 words
  const truncateDescription = (description) => {
    const words = description.split(" ");
    if (words.length > 70) {
      return words.slice(0, 70).join(" ") + "...";
    }
    return description;
  };

  // Function to replace null values with "N/A"
  const replaceNullWithNA = (value) => {
    return value === null ? "N/A" : value;
  };

  return (
    <div className="jobCard">
    <div>
      <div className="jobCard-heading">
        <div className="image-container">
          <img className="image" src={logoUrl} alt={companyName} />
        </div>
        <div className="title">
          <p>{replaceNullWithNA(companyName)}</p>
          <p>{replaceNullWithNA(jobRole)}</p>
          <p>{replaceNullWithNA(location)}</p>
        </div>
      </div>
      <div className="description">
        <p>
          Estimated Salary: {replaceNullWithNA(minJdSalary)} - {replaceNullWithNA(maxJdSalary)} {replaceNullWithNA(salaryCurrencyCode)}
        </p>
        <p>About the Company:</p>
        <div className="view-more-container">
        {/* Render full description if showFullDescription is true, otherwise render truncated description */}
        <p>{showFullDescription ? replaceNullWithNA(jobDetailsFromCompany) : truncateDescription(replaceNullWithNA(jobDetailsFromCompany))}</p>
        {/* Render "View More" button if the description is longer than 200 words */}
        {replaceNullWithNA(jobDetailsFromCompany).split(" ").length > 70 && (
          <button className="view-more" onClick={toggleDescription}>
            {showFullDescription ? "View Less" : "View More"}
          </button>
        )}
        </div>
        <p>
          Experience: {replaceNullWithNA(minExp)} - {replaceNullWithNA(maxExp)}
        </p>
      </div>
      </div>
    </div>
  );
};

export default JobCard;
