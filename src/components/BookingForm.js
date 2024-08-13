import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';




export function ReservationForm({onSubmitSuccess}) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState(null);
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const submitAPI = async function(formData) {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const result = await response.json();

      console.log(result)
      return result; // Adjust based on your API response structure
    } catch (error) {
      console.error('API request failed:', error);
      return false;
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();


    const formData = {
      date,
      time,
      guests,
      occasion,
      name,
      email,
      phone,
    };

    console.log('Submitted Data:', formData);

    try {
      const result = await submitAPI(formData);
      console.log(result)
      
      if (result && result.id) {
        setConfirmationMessage('Your reservation has been confirmed!');
        setError(null); // Clear any previous errors
        onSubmitSuccess();
        setDate('');
        setTime('');
        setGuests(1);
        setOccasion('Birthday');
        setName('');
        setEmail('');
        setPhone('');
      } else {
        alert('Reservation failed. Please try agian.');
      }
    } catch (err) {
      console.error('Failed to submit reservation:', err);
      setError('Failed to submit reservation. Please check the console for more details.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {confirmationMessage && <p style={{ color: 'green' }}>{confirmationMessage}</p>}
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
        {['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'].map((timeOption, index) => (
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
        <option value="Hangout">Hangout</option>
      </select>

      <Button type="submit" colorScheme="blue">Submit</Button>
    </form>
  );
}