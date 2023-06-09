import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';
import {Container, Typography } from '@mui/material';

const Completionist = () =>
    <Typography variant="h1" component="h2">
        Feliz Año Nuevo!
    </Typography>;
const dateNY: Date = new Date('2024-01-01');
const number: Number = dateNY.getTime();


const Conteo = () => {
    return (
        <div>
            <Container  maxWidth="sm">
                <Typography variant="h3" component="h4">
                    Cuenta regresiva para año nuevo:
                </Typography>
                <Countdown date={Date.now() + Number(number)}>
                    <Completionist />
                </Countdown>
            </Container>

        </div>
    );
};

ReactDOM.render(<Conteo />, document.getElementById('root'));

export default Conteo;