
import React, { useState, useEffect } from "react";
import "./SearchPost.css";
import HeaderAfterLogStaff from "../components/HeaderAfterLogStaff";
import FooterNew from "../components/FooterNew";

const SearchPost = () => {
  const [jobs, setJobs] = useState([
    { position: "IT Assistant", startDate: "20/12/2024", endDate: "29/12/2024", description: "Please refer to the Advertisement", category: "it" },
    { position: "IT Specialist", startDate: "23/12/2024", endDate: "20/01/2025", description: "Please refer to the Advertisement", category: "it" },
    { position: "Engineer", startDate: "25/12/2024", endDate: "30/01/2025", description: "Please refer to the Advertisement", category: "engineering" },
  ]);

  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const filtered = jobs.filter((job) => {
      const matchesSearch = job.position.toLowerCase().includes(searchInput.toLowerCase());
      const matchesCategory = selectedCategory ? job.category === selectedCategory : true;
      return matchesSearch && matchesCategory;
    });
    setFilteredJobs(filtered);
  }, [searchInput, selectedCategory, jobs]);

  return (


    <div>


      {/* <header>
        <h1>Internship and Job Opportunities</h1>
        <h2>Faculty of Science, University of Peradeniya</h2>
        <button className="logout-button">Log out</button>
      </header> */}
      <HeaderAfterLogStaff />
      {/* <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Registration</a></li>
          <li><a href="#">Student</a></li>
          <li><a href="#">Academic Staff</a></li>
          <li><a href="#">Employee</a></li>
          <li><a href="#">Search Internship</a></li>
          <li><a href="#">Recommendation</a></li>
        </ul>
      </nav> */}
      <div className="search-job-container">
        <div className="search-section">
          <input
            type="text"
            placeholder="Search Job by keyword"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="">Select Category</option>
            <option value="it">IT</option>
            <option value="engineering">Engineering</option>
          </select>
        </div>
        <table>
          <thead>
            <tr>
              <th>Position</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredJobs.map((job, index) => (
              <tr key={index}>
                <td>{job.position}</td>
                <td>{job.startDate}</td>
                <td>{job.endDate}</td>
                <td>{job.description}</td>
                <td>
                  <button className="apply-button">Apply</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <FooterNew />
      {/* <footer>
        <div className="footer-content">Contact us at info@university.lk</div>
        <div>&copy; 2024 University of Peradeniya</div>
      </footer> */}
    </div>

  );
};

export default SearchPost;

