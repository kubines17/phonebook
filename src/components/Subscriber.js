import React, {Component} from 'react';
import AccountHistoryList from '../../src/components/accountHistory';
import PostList from '../../src/components/Post';

class Subscriber extends Component {
  //create constants for descriptions
  state = {
    isOpen: false
  };

  render() {
    //create body
    const {sub} = this.props;
    const posts = sub.posts.map(post =>
      <li key = {post.id}><PostList post = {post}/></li>);
    const account = sub.accountHistory.map(accountHistory =>
      <li key = {accountHistory.id}><AccountHistoryList accountHistory = {accountHistory}/></li>);
    const body = this.state.isOpen && <section>
      username: {sub.username} <br />
      email: {sub.email} <br />
      address: <br />
        <ul>
          <li>streetA: {sub.address.streetA}</li>
          <li>streetB: {sub.address.streetB}</li>
          <li>streetC: {sub.address.streetC}</li>
          <li>streetD: {sub.address.streetD}</li>
          <li>city: {sub.address.city}</li>
          <li>state: {sub.address.state}</li>
          <li>country: {sub.address.country}</li>
          <li>zipcode: {sub.address.zipcode}</li>
          <li>geo: <br />
            <ul>
              <li> lat: {sub.address.geo.lat} </li>
              <li> lng: {sub.address.geo.lng} </li>
            </ul>
          </li>
        </ul>
      company: <br />
        <ul>
          <li>name: {sub.company.name}</li>
          <li>catchPhrase: {sub.company.catchPhrase}</li>
          <li>bs: {sub.company.bs}</li>
        </ul>
      post: {posts}
      accountHistory: {account}
      website: {sub.website} <br /> avatar: {sub.avatar}<br />
    </section>;
    // sent to Export-data-Site
      return (
      <div className="card">
        <div className="card-header">
          <h2>
            Name: {sub.name} - Phone number: {sub.phone}
            <button onClick={this.handleClick} className="btn btn-outline-primary float-right">
              {this.state.isOpen ? 'Description close' : 'Description open'}
            </button>
          </h2>
        </div>
            {body}
      </div>
    )
  }
//create button descriptions
  handleClick = () => {
    console.log('---', 'clicked');
    this.setState({
      isOpen: !this.state.isOpen
    })
  };
}

export default Subscriber;




















