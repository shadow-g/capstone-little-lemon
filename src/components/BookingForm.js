import React, { useState } from "react";

const BookingForm = (props) => {

    const [date, setDate] = useState('');
    const [times, setTimes] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('');


    const handleSubmit = (e) => {
        e.preventDeafult();
        props.SubmitForm(e);
    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }
    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor="book-date">Choose a date:</label>
                            <input id="book-date" value={date} onChange={(e) => handleChange(e.target.value)} type="date" required />
                        </div>

                        {/*for time selection */}
                        <div>
                            <label htmlFor="book-time">Choose a time:</label>
                            <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)}>
                                <option value=''>Select a time</option>
                                {
                                    props.availableTimes.availableTimes.map(availableTimes => {
                                        return <option key=
                                            {availableTimes}>{availableTimes}</option>
                                    })
                                }
                            </select>
                        </div>

                        {/*for guests selection */}
                        <div>
                            <label htmlFor="book-guests">Number of guests:</label>
                            <input id="book-guests" min='1' value={guests} onChange={(e) => setGuests(e.target.value)} />
                        </div>

                        {/*Occassion field */}
                        <div>
                            <label htmlFor="book-occasion">Occasion:</label>
                            <select id="book-occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                                <option>Birthday</option>
                                <option>Engagement</option>
                                <option>Anniversay</option>
                                <option>Group celebration</option>
                            </select>
                        </div>

                        {/*submit button */}
                        <div className="btnReceive">
                            <input aria-label="On Click" type="submit" value={'Make Your Reservation'} />
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;