import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStocks } from '../../actions'
import { bindActionCreators } from 'redux'

class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = { term: '' }
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onFormSubmit () {
    this.props.fetchStocks(this.state.term)
  }

  onInputChange (event) {
    this.setState({ term: event.target.value })
  }

  render () {
    return (
      <form className='input-group' onSubmit={this.onFormSubmit}>
        <input
          placeholder='Search for a stock'
          className='form-control'
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>Search</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchStocks }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)
