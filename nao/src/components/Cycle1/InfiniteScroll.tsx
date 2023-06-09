import InfiniteScroll from 'react-infinite-scroll-component';
import React from 'react'
import ReactDOM from 'react-dom';

const style = {
    height: 30,
    border: "1px solid green",
    margin: 6,
    padding: 8
  };
  
class InfiniteScrollExample extends React.Component {
    state = {
      items: Array.from({ length: 20 })
    };
  
    fetchMoreData = () => {
      // a fake async api call like which sends
      // 20 more records in 1.5 secs
      setTimeout(() => {
        this.setState({
          items: this.state.items.concat(Array.from({ length: 20 }))
        });
      }, 1500);
    };
  
    render() {
      return (
        <div>
          <h1>demo: react-infinite-scroll-component</h1>
          <hr />
          <InfiniteScroll
            dataLength={this.state.items.length}
            next={this.fetchMoreData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
          >
            {this.state.items.map((i, index) => (
              <div style={style} key={index}>
                div - #{index}
              </div>
            ))}
          </InfiniteScroll>
        </div>
      );
    }
  }
  
ReactDOM.render(<InfiniteScrollExample />, document.getElementById("root"));


export default InfiniteScrollExample
 