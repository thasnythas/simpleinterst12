import React, { useState } from 'react';
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function App() {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [result, setResult] = useState(null);

  const [isPrincipalValid, setIsPrincipalValid] = useState(true);
  const [isRateValid, setIsRateValid] = useState(true);
  const [isYearsValid, setIsYearsValid] = useState(true);

  // Regular expression to validate numbers
  const numberRegex = /^[0-9]+(\.[0-9]*)?$/;

  const handleCalculate = (e) => {
    e.preventDefault();

    // Reset validation states
    setIsPrincipalValid(true);
    setIsRateValid(true);
    setIsYearsValid(true);
    let isValid = true;

    // Validate principal amount
    if (!principal.match(numberRegex)) {
      setIsPrincipalValid(false);
      isValid = false;
    }

    // Validate rate
    if (!rate.match(numberRegex)) {
      setIsRateValid(false);
      isValid = false;
    }

    // Validate years
    if (!years.match(numberRegex)) {
      setIsYearsValid(false);
      isValid = false;
    }

    // If all inputs are valid, calculate the interest
    if (isValid) {
      const interest = (parseFloat(principal) * parseFloat(rate) * parseFloat(years)) / 100;
      setResult(interest);
    }
  };

  const handleReset = () => {
    setPrincipal('');
    setRate('');
    setYears('');
    setResult(null);

    // Reset validation states
    setIsPrincipalValid(true);
    setIsRateValid(true);
    setIsYearsValid(true);
  };

  return (
    <>
      <div
        style={{ backgroundColor: 'black', height: '100vh' }}
        className="d-flex justify-content-center align-items-center"
      >
        <div style={{ backgroundColor: 'white', width: '500px' }} className="p-5 rounded">
          <h2>Simple Interest Application</h2>
          <p>Calculate your simple interest easily</p>
          <div
            style={{ height: '150px', backgroundColor: 'lightblue' }}
            className="p-5 mt-5 rounded shadow d-flex justify-content-center align-items-center flex-column"
          >
            <h2 className="fw-bold">&#x20b9;{result !== null ? result : '0'}</h2>
            <p>Total Simple Interest</p>
          </div>
          <form onSubmit={handleCalculate}>
            <div className="mt-3">
              <TextField
                id="outlined-basic"
                label="Principal Amount"
                variant="outlined"
                className="w-100"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
                error={!isPrincipalValid}
                helperText={!isPrincipalValid ? 'Please enter a valid number for Principal' : ''}
              />
            </div>

            <div className="mt-3">
              <TextField
                id="outlined-basic"
                label="Rate of Interest %"
                variant="outlined"
                className="w-100"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                error={!isRateValid}
                helperText={!isRateValid ? 'Please enter a valid number for Rate of Interest' : ''}
              />
            </div>

            <div className="mt-3">
              <TextField
                id="outlined-basic"
                label="Total Years"
                variant="outlined"
                className="w-100"
                value={years}
                onChange={(e) => setYears(e.target.value)}
                error={!isYearsValid}
                helperText={!isYearsValid ? 'Please enter a valid number for Years' : ''}
              />
            </div>

            <div className="mt-3 d-flex justify-content-between">
              <Button
                type="submit"
                variant="contained"
                color="success"
                style={{ width: '90px', padding: '10px' }}
                onClick={handleCalculate}
              >
                CALCULATE
              </Button>
              <Button
                variant="outlined"
                color="error"
                style={{ width: '90px', padding: '10px' }}
                onClick={handleReset}
              >
                RESET
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
