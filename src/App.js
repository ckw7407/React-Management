
import './App.css';
import React,{ Component } from 'react';
import TOC from './components/TOC'
import Subject from './components/Subject';
import Content from './components/Content';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      subject:{title:'WEB',sub:'World Wid Web'},
      contents:[
        {id:1,title:'HTML',desc:'HTMO is for imformation'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }
  render(){
    return (
      <div>
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>  {/* <Subject /> */}
        <TOC data={this.state.contents}></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}

export default App;
