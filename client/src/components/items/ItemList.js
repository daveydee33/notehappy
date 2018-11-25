import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems, deleteItem } from '../../actions';

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
    this.props.fetchItems();
  }

  renderItems() {
    let items = this.props.items;
    const searchFilter = this.state.searchFilter;

    if (!items) {
      return <div>Loading...</div>;
    }

    // Apply the search filter to the items list
    items = items.filter(item => {
      return item.title.toUpperCase().includes(searchFilter); // only if it includes search string filter
    });

    return (
      <table className="table table-hover" id="myTable">
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
                    className="btn btn-danger mr-1"
                  >
                    <i className="fas fa-times" />
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
        <div>ItemList</div>
        <input
          type="text"
          id="myInput"
          onKeyUp={this.handleKeyUp}
          placeholder="Search by title"
        />
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
