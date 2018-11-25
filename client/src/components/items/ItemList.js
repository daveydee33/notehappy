import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../../actions';

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };

    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyUp(e) {
    const term = e.target.value;

    if (term && this.props.items) {
      this.setState({
        filtered: this.props.items.filter((value, index, array) => {
          return value.title.includes(term);
        }),
      });
    } else {
      this.setState({
        filtered: undefined,
      });
    }

    // console.log(this.state);
  }

  componentDidMount() {
    this.props.fetchItems();
  }

  renderItems() {
    if (!this.props.items) {
      return <div>Loading...</div>;
    }

    let items = [];

    if (this.state.filtered) {
      items = this.state.filtered;
    } else {
      items = this.props.items;
    }

    return (
      <table className="table table-hover" id="myTable">
        <caption>Total: {items.length}</caption>
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

          {items.map(({ _id, title, body, tags }, index) => {
            if (body && body.length > 50) {
              body = body.substring(0, 50).concat('...');
            }

            return (
              <tr key={_id}>
                <th scope="row">{(index += 1)}</th>
                <td>{title}</td>
                <td>{body}</td>
                <td>{tags.join('|')}</td>
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
  { fetchItems },
)(ItemList);
