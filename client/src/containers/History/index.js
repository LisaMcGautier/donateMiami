import React from 'react';

import Header from "../../components/Header";
import NavTabs from "../../components/NavTabs";
import Footer from "../../components/Footer";
import VolunteerHistory from "../../components/VolunteerHistory";
import DonationHistory from "../../components/DonationHistory";

function History(props) {

  return (
    <div>

      {/* <Header /> */}

      <NavTabs />
      <br></br>

      <div className="row">
        <div className="col-6">
          <h2 id="histitle">History Page</h2>
        </div>
        <div className="col-6"></div>
      </div>

      <p id="hispage">
        Here is your donation and volunteer history.
      </p>

      <h3 id="donvolhistory">Donation History</h3>
      <DonationHistory />

      <h3 id="donvolhistory">Volunteer History</h3>
      <VolunteerHistory />

      <Footer />

    </div>
  );
}

export default History;
