import React, {Component} from "react";
import Subscriber from "./Subscriber";
import '../../src/css/style.css';

export default class ExportDataSite extends Component {
//Create constants
  constructor(props) {
    super(props);
    this.state ={data:[]}
  }
//request JSON
  componentWillMount(){

    fetch("http://demo.sibers.com/users")
      .then(response => response.json())
      .then(result => this.setState({data: result}))
      .catch(e => console.log(e));
  }
//Save to local storage, formation array subscribers and export to index.js
  render() {
    const { data } = this.state;
    sessionStorage.setItem('PhoneBook', JSON.stringify(data));
    const storage = JSON.parse(sessionStorage.getItem('PhoneBook'));
    const dataList = storage.map(item =>
      <li key = {item.id} className="sub-list_li">
        <Subscriber sub = {item}/>
      </li>
    );
    return <ul> {dataList}</ul>
  }

}
