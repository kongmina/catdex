import React from 'react';
import { SearchBar } from './Components/searchbar/searchbar.component'
import { CardList } from './Components/cardlist/cardlist.component'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      users: [],
      searchField: ''
    }

    // this.handleChange = this.handleChange.bind(this) //sets the context of 'this' for the function

  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json()
        .then(usrs => { this.setState({ users: usrs }) }))
  }

  render() {
    const { users, searchField } = this.state;
    const filteredUsers = users.filter(user => 
      user.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
       <SearchBar 
       placeholder="Search Users"
       handleChange={this.handleChange}/>
        <CardList users={filteredUsers} />
      </div>
    );
  }
}

export default App;
