import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions'
import CatList from './CatList'

class App extends Component { 
  
  componentDidMount() {
    this.props.fetchCats()
  }
  
  handleLoading = () => {
    if(this.props.loading) {
      return <div>Loading...</div>
    } else {
      return <CatList catPics={this.props.catPics} />
    }
  }
  
  render() {
    return (
      <div classname="App">
        <h1>CatBook</h1>
         {this.handleLoading()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(App)

