import {useEffect, useState} from "react";
import Header from "./Header";
import JobCard from "./JobCard";
import {Select, MenuItem, TextField} from "@mui/material";

const JobSection = () => {
  const [jobList, setJobList] = useState([]);
  const [selectedRole, setSelectedRole] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [minExpFilter, setMinExpFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [minJdSalaryFilter, setMinJdSalaryFilter] = useState("");
  const [selectLocation, setSelectLocation] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      limit: 10,
      offset: 0,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    try {
      const response = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        requestOptions
      );
      const result = await response.json();
      console.log(result);
      setJobList(result?.jdList);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
    setSearchTerm(""); // Clear search term when selecting from options
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleMinExpChange = (event) => {
    setMinExpFilter(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocationFilter(event.target.value);
    setSelectLocation(""); // Clear select location when typing in text field
  };

  const handleSelectLocationChange = (event) => {
    setSelectLocation(event.target.value);
    setLocationFilter(""); // Clear location filter when selecting from options
  };

  const handleMinJdSalaryChange = (event) => {
    setMinJdSalaryFilter(event.target.value);
  };

  // Extract unique job roles
  const uniqueJobRoles = Array.from(new Set(jobList.map((job) => job.jobRole)));

  // Extract location
  const uniqueLocation = Array.from(
    new Set(jobList.map((job) => job.location))
  );

  // Extract unique minimum experience values and sort them
  const uniqueMinExpValues = Array.from(
    new Set(jobList.map((job) => job.minExp))
  ).sort((a, b) => a - b);

  // Extract unique minimum base pay values and sort them
  const minJdSalaryValues = [5, 10, 15, 20, 30, 40];

  const filteredJobsByRole = selectedRole
    ? jobList.filter((job) => job.jobRole === selectedRole)
    : jobList;

  const filteredJobsBySearch = searchTerm
    ? jobList.filter((job) =>
        job.jobRole.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : jobList;

  const filteredJobsByMinExp = minExpFilter
    ? jobList.filter((job) => job.minExp === parseInt(minExpFilter))
    : jobList;

  const filteredJobsByLocation = locationFilter
    ? jobList.filter((job) =>
        job.location.toLowerCase().includes(locationFilter.toLowerCase())
      )
    : jobList;

  const filteredJobsBySelectLocation = selectLocation
    ? jobList.filter((job) => job.location === selectLocation)
    : jobList;

  const filteredJobsByMinJdSalary = minJdSalaryFilter
    ? jobList.filter((job) => job.minJdSalary === parseInt(minJdSalaryFilter))
    : jobList;

  return (
    <div className="main">
      <div className="header">
        <Header />
      </div>

      <div className="filters">
        <TextField
          label="Search Role"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
        <Select
          value={selectedRole}
          onChange={handleRoleChange}
          displayEmpty
          inputProps={{"aria-label": "Select Role"}}
        >
          <MenuItem value="" disabled></MenuItem>
          {/* Render unique job roles */}
          {uniqueJobRoles.map((jobRole) => (
            <MenuItem key={jobRole} value={jobRole}>
              {jobRole}
            </MenuItem>
          ))}
        </Select>
        <TextField
          label="Location"
          value={locationFilter}
          onChange={handleLocationChange}
        />
        <Select
          value={selectLocation}
          onChange={handleSelectLocationChange}
          displayEmpty
          inputProps={{"aria-label": "Location"}}
        >
          <MenuItem value="" disabled></MenuItem>
          {/* Render unique locations */}
          {uniqueLocation.map((location) => (
            <MenuItem key={location} value={location}>
              {location}
            </MenuItem>
          ))}
        </Select>
        <TextField
          label="Minimum Experience"
          type="number"
          value={minExpFilter}
          onChange={handleMinExpChange}
          InputLabelProps={{shrink: true}}
        />
        <Select
          value={minExpFilter}
          onChange={handleMinExpChange}
          displayEmpty
          inputProps={{"aria-label": "Select Minimum Experience"}}
        >
          <MenuItem value="" disabled></MenuItem>
          {/* Render unique minimum experience values */}
          {uniqueMinExpValues.map((minExp) => (
            <MenuItem key={minExp} value={minExp}>
              {minExp}
            </MenuItem>
          ))}
        </Select>
        <TextField
          label="Minimum Base Pay (Lakhs)"
          type="number"
          value={minJdSalaryFilter}
          onChange={handleMinJdSalaryChange}
          InputLabelProps={{shrink: true}}
        />
        <Select
          value={minJdSalaryFilter}
          onChange={handleMinJdSalaryChange}
          displayEmpty
          inputProps={{"aria-label": "Select Minimum Base Pay"}}
        >
          <MenuItem value="" disabled></MenuItem>
          {/* Render unique minimum base pay values */}
          {minJdSalaryValues.map((minJdSalary) => (
            <MenuItem key={minJdSalary} value={minJdSalary}>
              {minJdSalary}
            </MenuItem>
          ))}
        </Select>
      </div>
      <div
        className="jobList-container
"
      >
        {selectedRole
          ? filteredJobsByRole.map((list) => (
              <div key={list.jdUid}>
                <JobCard jobData={list} />
              </div>
            ))
          : searchTerm
          ? filteredJobsBySearch.map((list) => (
              <div key={list.jdUid}>
                <JobCard jobData={list} />
              </div>
            ))
          : minExpFilter
          ? filteredJobsByMinExp.map((list) => (
              <div key={list.jdUid}>
                <JobCard jobData={list} />
              </div>
            ))
          : locationFilter
          ? filteredJobsByLocation.map((list) => (
              <div key={list.jdUid}>
                <JobCard jobData={list} />
              </div>
            ))
          : selectLocation
          ? filteredJobsBySelectLocation.map((list) => (
              <div key={list.jdUid}>
                <JobCard jobData={list} />
              </div>
            ))
          : minJdSalaryFilter
          ? filteredJobsByMinJdSalary.map((list) => (
              <div key={list.jdUid}>
                <JobCard jobData={list} />
              </div>
            ))
          : jobList.map((list) => (
              <div key={list.jdUid}>
                <JobCard jobData={list} />
              </div>
            ))}
      </div>
    </div>
  );
};

export default JobSection;
