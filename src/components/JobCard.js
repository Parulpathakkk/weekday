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
        <div>
          <img className="rounded-full" src={logoUrl} alt={companyName} />
        </div>
        <div>
          <p>{replaceNullWithNA(companyName)}</p>
          <p>{replaceNullWithNA(jobRole)}</p>
        </div>
      </div>
      <div>
        <p>
          Estimated Salary: {replaceNullWithNA(minJdSalary)} - {replaceNullWithNA(maxJdSalary)} {replaceNullWithNA(salaryCurrencyCode)}
        </p>
        <p>About the Company:</p>
        {/* Render full description if showFullDescription is true, otherwise render truncated description */}
        <p>{showFullDescription ? replaceNullWithNA(jobDetailsFromCompany) : truncateDescription(replaceNullWithNA(jobDetailsFromCompany))}</p>
        {/* Render "View More" button if the description is longer than 200 words */}
        {replaceNullWithNA(jobDetailsFromCompany).split(" ").length > 70 && (
          <button className="text-blue-500" onClick={toggleDescription}>
            {showFullDescription ? "View Less" : "View More"}
          </button>
        )}
        <p>
          Experience: {replaceNullWithNA(minExp)} - {replaceNullWithNA(maxExp)}
        </p>
      </div>
      </div>
    </div>
  );
};

export default JobCard;
