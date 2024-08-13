import React, { useState } from 'react';

export function ReservationForm() {
  // Step 2: Define state variables
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Step 3: Define available times
  const [availableTimes, setAvailableTimes] = useState([
    '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
  ]);

  // Step 4: Handle form submission (for future API communication)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement API communication or other actions here
    console.log({ date, time, guests, occasion });
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);

    // Example: Update available times based on the selected date
    if (selectedDate === '2024-08-15') {
      setAvailableTimes(['18:00', '19:00', '20:00']); // Special times for this date
    } else {
      setAvailableTimes(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']); // Default times
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
      
      <label htmlFor="res-name">Name</label>
      <input
        type="text"
        id="res-name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="res-email">Email</label>
      <input
        type="email"
        id="res-email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="res-phone">Phone Number</label>
      <input
        type="tel"
        id="res-phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes.map((timeOption, index) => (
          <option key={index} value={timeOption}>
            {timeOption}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
        <option value="Hangout">Anniversary</option>
      </select>

    </form>
  );
}