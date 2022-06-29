
import './App.css';
import React,{ Component } from 'react';
import TOC from './components/TOC'
import Subject from './components/Subject';
import Content from './components/Content';

class App extends Component{
  render(){
    return (
      <div>
        <Subject title="WEB" sub="wordl wide web!"></Subject>  {/* <Subject /> */}
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}

export default App;
