import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Article from './components/Article';
import StateEx from './components/StateEx';
import { useState } from 'react';
import JsxEx from './components/JsxEx';
import { isFocusable } from '@testing-library/user-event/dist/utils';
import Controller from './components/Controller';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';

function App_useSate(){
  let countVar = 0;
  const [count, setCount] = useState(0); 

  console.log(`(랜더링) count ${count}`); 
  return(
    <div>
      <p> Click {countVar} count</p>
      <button onClick={()=>{
        countVar = countVar + 1; //랜더링하지 않아서 화면이 변하지 않음
        console.log(`countVar --> ${countVar}`);
      }}>click</button>

      <p> Click {count} time {useState}</p> //유지하고 싶을 때 사용
      <button onClick={()=>{
        setCount(count+1); //useState로 인해 랜더링되어 화면이 변함
      }}>Click {useState}</button>
    </div>

    
  )
}

function App() {
  const[title,setTitle] = useState('WEB');
  const [sub,setSub] = useState('World Wide Web');
  const[contents, setContents] = useState([
    {id:1, title:'HTML', desc:'HTML is for Infomation' },
    {id:2, title:'CSS', desc:'CSS is for Design' },
    {id:3, title:'JavaScript', desc:'JS is for Interactive' },
    {id:4, title:'언어', desc:'자바스크립트 언어' },
  ]);

const [mode, setMode] = useState('read');
const [welcome, setWelcome] = useState(
  {title:'Welcome', desc:'Welcome React'}
);

const [selected_id , setSelected_id] = useState(0);

let _title, _desc, _article= null;

const getReadContent = () => {
  console.log(`getReadContent ==> selected_i ${selected_id}`);
  let i =0;
  let selected_index = 0;

  while(i < contents.length){
    if(contents[i].id === selected_id){
      selected_index = i;
      break;
    }
    i++;
  }
  return contents[selected_index]; 
}

if(mode === 'welcome'){
  _title = welcome.title;
  _desc = welcome.desc;
  _article = <Article title = {_title} desc = {_desc} />
}
else if(mode === 'read'){
  // _title = contents[0].title;
  // _desc = contents[0].desc;
  let i = 0;
  while(i<contents.length){
    //console.log(`Content[i]: ${contents[i].id}, ${selected_id}`);
    if(contents[i].id == selected_id){
      _title = contents[i].title;
      _desc = contents[i].desc;
       //console.log(`Content[i]: ${contents[i].id}, ${selected_id}`);
      break;
    }
    i++;
  }
  _article = <Article title = {_title} desc = {_desc} />
}
else if(mode == 'create'){
  console.log('create mode');
  _article = <CreateContent
                onSubmit = { (_title,_desc) =>{
                  console.log(`CreateContent title:${_title} ,desc:${_desc}`);
                  let max_content_id = contents.length + 1;
                  setContents(
                    //[기존내용, 새로채워지는 내용]
                    [ ...contents, 
                      {id: max_content_id,
                       title: _title,
                      desc:_desc}
                    ]
                  );
                }}
                />
}
else if(mode == 'update'){
  console.log('update mode --> ');
  //수정해야 될 항목의 데이터 저장
  let _content = getReadContent();
  _article  = <UpdateContent
                  data = {_content}
                  onSubmit = { (_title, _desc) => {
                    console.log(`UpdateContent title:${_title} ,desc:${_desc}`);
                    contents[selected_id - 1].title = _title;
                    contents[selected_id  -1].desc = _desc;
                    setMode('welcome');
                  }}
                ></UpdateContent>
}
else{
  console.log('else');
}


  return (
    <div className="App">
      {/* <JsxEx /> */}
      {/* <StateEx /> */}
      {/* <Header title ="WWW" sub = "Header is value!!"/> */}
      {/* <Header title = {title} sub = {sub}/> */}
      <Header title = {title} 
              sub = {sub}
              onChangePage = {()=>{
                setMode('welcome');
              }
        }        
      />
      {/* <Nav2 data={contents}/> */}
      <Nav data={contents}
        onChangePage = { (id) => {
          setMode('read');
          setSelected_id(id);
          console.log(`Nav: ${id}`);
        }} />

      <Controller onChangeMode={ (mode)=>{
        setMode(mode);
        if(mode === 'delete'){
          let _contents = Array.from(contents);
          console.log(`delete selected_id : ${selected_id}`);
          if(window.confirm('Really Delete!!')) {
            _contents.splice(selected_id-1,1);
            setContents(_contents);
            setMode('welcome');
          }
        }
      }

      } />

      {_article}
      {/* <Article 
        title = "HTML" 
        desc = "HTML is HyperTest Markup Language" /> */}
          {/* <Article 
            title = {_title}
            desc = {_desc} /> */}
    </div>
  );
}

export default App; 
