import InfiniteScroll from 'react-infinite-scroll-component';
import React from 'react'
import ReactDOM from 'react-dom';
import { Container, Typography, Card } from '@mui/material';

const style = {
    height: 30,
    border: "1px solid blue",
    margin: 6,
    padding: 8
  };
  
class InfiniteScrollExample extends React.Component {
    state = {
      items: Array.from({ length: 35 })
    };
  
    fetchMoreData = () => {
      setTimeout(() => {
        this.setState({
          items: this.state.items.concat(Array.from({ length: 35 }))
        });
      }, 1500);
    };
  
    render() {
      return (
        <Container  maxWidth="sm">
         <Typography variant="h3" component="h4">
                    Ejemplo de Infinite Scroll:
        </Typography>
        
          <InfiniteScroll
            dataLength={this.state.items.length}
            next={this.fetchMoreData}
            hasMore={true}
            loader={<h4>Cargando...</h4>}
          >
            {this.state.items.map((i, index) => (

                <Card variant="outlined" sx={{ maxWidth: 345 }}>Contenido de ejemplo numero {index}</Card>
            ))}
          </InfiniteScroll>
        </Container>
      );
    }
  }
  
ReactDOM.render(<InfiniteScrollExample />, document.getElementById("root"));


export default InfiniteScrollExample
 