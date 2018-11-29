import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems, deleteItem } from '../../actions';
import Spinner from '../Spinner';

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchFilter: '',
    };

    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.onClickDelete = this.onClickDelete.bind(this);
  }

  onClickDelete(id) {
    this.props.deleteItem(id);
  }

  handleKeyUp(e) {
    this.setState({
      searchFilter: e.target.value.toUpperCase(),
    });
  }

  componentDidMount() {
    this.props.fetchItems(); // React docs say put "data loading" in componentDidMount and _not_ in the constructor function.
  }

  renderItems() {
    let items = this.props.items;
    const searchFilter = this.state.searchFilter;

    if (!items) {
      return <Spinner />;
    }

    // Apply the search filter to the items list
    items = items.filter(item => {
      return item.title.toUpperCase().includes(searchFilter); // only if it includes search string filter
    });

    return (
      <table className="ui striped selectable table">
        {/* TODO: If we want to make this sortable - https://semantic-ui.com/collections/table.html#sortable */}
        <caption>Total: {items.length}</caption>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Body</th>
            <th scope="col">Tags</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ _id, title, body, tags }, index) => {
            // Truncate body if long
            if (body && body.length > 50) {
              body = body.substring(0, 50).concat('...');
            }

            return (
              <tr key={_id}>
                <th scope="row">{(index += 1)}</th>
                <td>{title}</td>
                <td>{body}</td>
                <td>{tags.join('|')}</td>
                <td>
                  <button
                    onClick={this.onClickDelete.bind(this, _id)}
                    type="button"
                    className="ui compact labeled icon button basic"
                  >
                    <i className="trash icon red" />
                    Delete
                  </button>
                </td>
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
        <h1>Items</h1>

        {/* 
        TODO: fix this search option dropdown to show search options for Body, Everything, etc.  Might need to Semantic UI javascript file.  Also need to modify the functionality in this component.  Currently only searches Title.  
        */}
        <div className="ui large right action left icon input">
          <i className="search icon" />
          <input
            type="text"
            id="myInput"
            onKeyUp={this.handleKeyUp}
            placeholder="Search..."
          />
          <div className="ui basic floating dropdown button">
            <div className="text">Title</div>
            <i className="dropdown icon" />
            <div className="menu">
              <div className="item">Body</div>
              <div className="item">Everything</div>
            </div>
          </div>
        </div>

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
  { fetchItems, deleteItem },
)(ItemList);
