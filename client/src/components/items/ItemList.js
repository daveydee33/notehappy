import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../../actions';

class ItemList extends Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  renderItems() {
    if (!this.props.items) {
      return; // Either we're loading still, or no records.
    }

    return (
      <table className="table table-hover">
        <caption>Total: {this.props.items.length}</caption>
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

          {this.props.items.map((items, index) => {
            return (
              <tr key={items._id}>
                <th scope="row">{(index += 1)}</th>
                <td>{items.title}</td>
                <td>{items.body}</td>
                <td>{items.tags.join('|')}</td>
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
    items: state.item,
  };
}

export default connect(
  mapStateToProps,
  { fetchItems },
)(ItemList);
