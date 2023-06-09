
import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Container } from '@mui/material';

const Calculadora = () => {
  const [hours, setHours] = useState('');
  const [rate, setRate] = useState('');
  const [income, setIncome] = useState(0);

  const calculateIncome = () => {
    const totalIncome = parseFloat(hours) * parseFloat(rate);
    setIncome(parseFloat(totalIncome.toFixed(2)));
  };

  return (
    <Container  maxWidth="sm">
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5" align="center">
          Calculadora de Ingresos
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Horas trabajadas"
          variant="outlined"
          fullWidth
          value={hours}
          onChange={(e) => setHours(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Tarifa por hora"
          variant="outlined"
          fullWidth
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={calculateIncome}>
          Calcular Ingreso
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" align="center">
          Total de Ingresos: ${income}
        </Typography>
      </Grid>
    </Grid>
    </Container>
  );
};

export default Calculadora;