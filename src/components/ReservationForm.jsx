import React, { useState } from 'react';


function initializeTimes(date) {

}

function updateTimes(newTimes) {
 
}

function ReservationForm() {
  const [selectedDate, setSelectedDate] = useState('');
  const [availableTimes, setAvailableTimes] = useState([]);

  return (
    <div>
              <p>Available Times: {availableTimes.join(', ')}</p>
      <label htmlFor="date">Select Date:</label>
      <input
        type="date"
        id="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />

      <button onClick={() => setAvailableTimes(initializeTimes(selectedDate))}>
        Initialize Times
      </button>

      <button onClick={() => updateTimes(['17:00', '18:00', '19:00'])}>
        Update Times
      </button>
    </div>
  );
}

export default ReservationForm;





