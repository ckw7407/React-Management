
import './App.css';
import React,{ Component } from 'react';
import TOC from './components/TOC'
import Subject from './components/Subject';
import ReadContent from './components/ReadContent';
import Control from './components/Control';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';

class App extends Component{
  constructor(props){
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode:'read',
      selected_content_id:2,
      subject:{title:'WEB',sub:'World Wid Web'},
      welcome:{title:'Welcome',desc:'Hello, React!!'},
      contents:[
        {id:1, title:'HTML',desc:'HTML is for imformation'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }

  //getReadContent start

  getReadContent(){
    let i = 0;
      while(i < this.state.contents.length) {
        let data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
          return data;
        }
        i = i + 1;
      }
  }

  //getReadContent end

  //getContent start
  
  getContent(){
    let _title, _desc = null, _article;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    }else if(this.state.mode === 'read'){
      let _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>;
    }else if(this.state.mode === 'create'){
      _article = <CreateContent onSubmit={function(_title,_desc){
        this.max_content_id = this.max_content_id + 1;
        // this.state.contents.push(
        //   {id:this.max_content_id,title:_title,desc:_desc}
        // );

        // let _contents = this.state.contents.concat(
        //      {id:this.max_content_id,title:_title,desc:_desc}
        //  );

        let _contents = Array.from(this.state.contents);
        _contents.push({id:this.max_content_id,title:_title,desc:_desc});

        this.setState({
          //contents : this.state.contents
          mode:'read',
          contents : _contents,
          selected_content_id:this.max_content_id
        })
      }.bind(this)}></CreateContent>
    }else if(this.state.mode === 'update'){
      let _content = this.getReadContent();
      _article = <UpdateContent 
                    data = {_content} 
                    onSubmit={function(_id,_title,_desc){
                      let _contents = Array.from(this.state.contents);
                      let i = 0;
                      while(i < _contents.length){
                        if(_contents[i].id == _id){
                          _contents[i] = {id:_id,title:_title,desc:_desc};
                          break;
                        }
                        i = i + 1;
                      }
                      this.setState({
                        contents:_contents,
                        mode:'read'
                      })
                    }.bind(this)}>

                  </UpdateContent>
    }

    return _article;
  }

  //getContent end

  render(){
    console.log('App render');

    return (
      <div>
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub} 
          onChangePage={function(){
            this.setState({mode:'welcome'}) ;
          }.bind(this)}
        >
        </Subject>
        <TOC data={this.state.contents}
          onChangePage={function(id){
            this.setState(
              {
                mode:'read',
                selected_content_id:Number(id)
              }
            ) ;
          }.bind(this)}
        >
        </TOC>
        <Control onChangeMode={function(_mode){
            this.setState({
              mode:_mode
            });
          }.bind(this)}></Control>
        {this.getContent()}
      </div>
    );
  }
}

export default App;
