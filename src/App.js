
import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [interests, setInterests] = useState('');
  const [budget, setBudget] = useState('');
  const [plan, setPlan] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("https://travelplannerbackend.onrender.com/plan", {
      source,
      destination,
      startDate,
      endDate,
      interests,
      budget,  // include budget here
    });
    setPlan(res.data.plan);
  };

  return (
    <div className="app-container">
      <h2>AI Travel Planner</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={source}
          onChange={e => setSource(e.target.value)}
          placeholder="Source Location"
          required
        />
        <input
          value={destination}
          onChange={e => setDestination(e.target.value)}
          placeholder="Destination"
          required
        />
        <input
          type="date"
          value={startDate}
          onChange={e => setStartDate(e.target.value)}
          required
        />
        <input
          type="date"
          value={endDate}
          onChange={e => setEndDate(e.target.value)}
          required
        />
        <input
          value={interests}
          onChange={e => setInterests(e.target.value)}
          placeholder="Interests (e.g. food, museums)"
          required
        />
        <input
          value={budget}
          onChange={e => setBudget(e.target.value)}
          placeholder="Budget (e.g. 1000 USD)"
          required
        />
        <button type="submit">Get Plan</button>
      </form>

      {plan && (
        <div className="travel-plan">
          <h3>Travel Plan:</h3>
          {plan}
        </div>
      )}
    </div>
  );
}

export default App;
