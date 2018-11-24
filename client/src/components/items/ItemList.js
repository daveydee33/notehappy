import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../../actions';

class ItemList extends Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  renderItems() {
    if (!this.props.item) {
      return;
    }

    return (
      <table className="table table-hover">
        <caption>Total: {this.props.item.length}</caption>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Body</th>
            <th scope="col">Tags</th>
          </tr>
        </thead>
        <tbody>
          {/* Example */}
          {/* 
          <tr>
            <th scope="row">1</th>
            <td>A</td>
            <td>B</td>
            <td>C</td>
          </tr> 
          */}

          {this.props.item.map((item, index) => {
            return (
              <tr key={item._id}>
                <th scope="row">{(index += 1)}</th>
                <td>{item.title}</td>
                <td>{item.body}</td>
                <td>{item.tags.join('|')}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <div>
        <div>ItemList</div>
        {this.renderItems()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    item: state.item,
  };
}

export default connect(
  mapStateToProps,
  { fetchItems },
)(ItemList);
