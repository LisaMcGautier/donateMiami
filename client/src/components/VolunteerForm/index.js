import React, { useState } from 'react';
import API from "../../utils/API";

import Calendar from 'react-calendar';
import moment from "moment";

const VolunteerForm = () => {

    const [organization, setOrganization] = useState("");
    const [amount, setAmount] = useState("");
    const [date, onChange] = useState(new Date());

    function handleSubmit(event) {
        event.preventDefault();
        // console.log(organization, amount, date);
        if (!organization) {
            alert("Please select an organization")
        } else if (!amount) {
            alert("Please enter the number of hours")
        } else if (!date) {
            alert("Please select a date in the future")
        } else {
            API.saveTime({
                name: organization,
                value: amount,
                date: date
            })
                .then(res => console.log(res.data))
                .catch(err => console.log(err));

            alert("Thank you for your interest in " + organization + "! We will be in touch soon to coordinate the details of your volunteer service.");
        }
    };

    return (

        <div>

            <h2 id="volform">Volunteer Form</h2>
            <p id="volparagraph">Select an organization, how many hours you would like to contribute, and the date of your availability.</p>

            <form>

                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="inputOrganization">Organization</label>
                        <select id="inputOrganization" name="organization" className="form-control"
                            onChange={(event) => setOrganization(event.target.value)}>
                            <option defaultValue>Select organization...</option>
                            <option value="Women of Tomorrow">Women of Tomorrow</option>
                            <option value="Cat Network, Inc.">Cat Network, Inc.</option>
                            <option value="Pelican Harbor Seabird Station, Inc.">Pelican Harbor Seabird Station, Inc.</option>
                            <option value="Joshuas Heart Foundation Inc">Joshuas Heart Foundation Inc</option>
                            <option value="Cuatrogatos Foundation Inc">Cuatrogatos Foundation Inc</option>
                            <option value="Whispering Manes Therapeutic Riding Center">Whispering Manes Therapeutic Riding Center</option>
                            <option value="Take Stock in Children">Take Stock in Children</option>
                            <option value="American Childrens Orchestras for Peace">American Childrens Orchestras for Peace</option>
                            <option value="National Voices for Equality Education and Enlightenment">National Voices for Equality Education and Enlightenment</option>
                            <option value="Veterans Ocean Adventures, Inc">Veterans Ocean Adventures, Inc</option>
                            <option value="Sandals Foundation Inc">Sandals Foundation Inc</option>
                            <option value="Art Studio Inc">Art Studio Inc</option>
                            <option value="Bridge to Hope">Bridge to Hope</option>
                            <option value="Project Medishare for Haiti Inc">Project Medishare for Haiti Inc</option>
                            <option value="Universal Aid for Children, Inc.">Universal Aid for Children, Inc.</option>
                            <option value="Biscayne Bay Foundation">Biscayne Bay Foundation</option>
                            <option value="Amigos Near Foundation">Amigos Near Foundation</option>
                            <option value="Mystic Force Foundation">Mystic Force Foundation</option>
                            <option value="Sundari Foundation, Inc.">Sundari Foundation, Inc.</option>
                            <option value="Artefactus Cultural Project">Artefactus Cultural Project</option>

                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="inputHoursAvailable">Amount of Hours Available</label>
                        <input type="text" className="form-control" id="inputHoursAvailable" placeholder="e.g. 3 hours"
                            value={amount}
                            onChange={(event) => setAmount(event.target.value)}></input>
                    </div>

                    <div className="form-group">
                        <div className="form-group col-md-6" id="calendar">

                            <br></br>

                            <Calendar
                                onChange={onChange}
                                value={date}
                                minDate={moment().toDate()}
                                calendarType={"US"}
                            />
                        </div>

                    </div>

                </div>

                <button onClick={handleSubmit} className="btn btn-primary shadow" id="volbutton">Submit Volunteer Availability!</button>

            </form>
            <br></br>
        </div>
    )
}

export default VolunteerForm;