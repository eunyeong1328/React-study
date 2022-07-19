import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

//Temporarily store data here
const PostsData = [
  {
    "category": "News",
    "title": "CNN Acquire BEME",
    "text": "CNN purchased Casey Neistat's Beme app for $25million.",
    "image": "https://source.unsplash.com/user/erondu/600x400"
  },
  {
    "category": "Travel",
    "title": "Nomad Lifestyle",
    "text": "Learn our tips and tricks on living a nomadic lifestyle",
    "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
  },
  {
    "category": "Development",
    "title": "React and the WP-API",
    "text": "The first ever decoupled starter theme for React & the WP-API",
    "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
  },
  {
    "category": "News",
    "title": "CNN Acquire BEME",
    "text": "CNN purchased Casey Neistat's Beme app for $25million.",
    "image": "https://source.unsplash.com/user/erondu/600x400"
  },
  {
    "category": "Travel",
    "title": "Nomad Lifestyle",
    "text": "Learn our tips and tricks on living a nomadic lifestyle",
    "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
  },
  {
    "category": "Development",
    "title": "React and the WP-API",
    "text": "The first ever decoupled starter theme for React & the WP-API",
    "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
  }
]


// Start App

// class Main extends React.Component { 
//   constructor() {
//     super();
    
//     this.state = {
//       posts: {} //초기치는 빈 객체로 넣어주고 있다.
//     }
//   }
//   componentWillMount() {
//     this.setState({
//     posts: PostsData
//     });
//   }
// }
//  render() {
//       return <div>
//         <header className="app-header"></header>
//         <Title />
//         <div className="app-card-list" id="app-card-list">
//           {
//             Object
//             .keys(this.state.posts)
//             .map(key => <Card key={key} index={key} details={this.state.posts[key]}/>)
//           }
//       </div>
//       </div>
//     }


function App() {

  const [posts, setPosts] = useState(PostsData);
  //componentWillMount()
  useEffect(()=>{
    setPosts(PostsData);
  })

    return(
      <div>
        <header className="app-header"></header>
        <Title />
        <div className="app-card-list" id="app-card-list">
          {
            Object
            .keys(posts)
            .map(key => <Card key={key} index={key} details={posts[key]}/>)
          }
      </div>
      </div>
    )
  }

  // class Title extends React.Component {
  //   render() {
  //     return <section className="app-title">
  //       <div className="app-title-content">
  //         <h1>Latest News</h1>
  //         <p>Covering March & April 2015</p>
  //         <a className="designer-link" href="https://dribbble.com/shots/1978243-Latest-News" target="_blank">Design from <i className="fa fa-dribbble"></i></a>
  //       </div>
  //     </section>
  //   }
  // }


  const Title = () => { 
    return(
      <section className="app-title">
      <div className="app-title-content">
        <h1>Latest News</h1>
        <p>Covering March & April 2015</p>
        <a className="designer-link" href="https://dribbble.com/shots/1978243-Latest-News" target="_blank">Design from <i className="fa fa-dribbble"></i></a>
      </div>
    </section>
    );
  }

  // class Button extends React.Component {
  //   render() {
  //     return (
  //       <button className="button button-primary">
  //         <i className="fa fa-chevron-right"></i> Find out more
  //       </button>
  //     )
  //   }
  // }

  const Button = () => {
    return(
      <button className="button button-primary">
      <i className="fa fa-chevron-right"></i> Find out more
    </button>
    )
  }

  // class CardHeader extends React.Component {
  //   render() {
  //     const { image, category } = this.props;
  //     var style = { 
  //         backgroundImage: 'url(' + image + ')',
  //     };
  //     return (
  //       <header style={style} className="card-header">
  //         <h4 className="card-header--title">{category}</h4>
  //       </header>
  //     )
  //   }
  // }

  const CardHeader  = (props) => {
    const {image,setImage} = useState(props.image);
    const {category , setCatagoru}  = useState(props.category);
    let style = {
      backgroundImage: 'url(' + props.image + ')'
    }

    return(
      <header style={style} className="card-header">
      <h4 className="card-header--title">{category}</h4>
      </header>
    )
  }

  // class CardBody extends React.Component {
  //   render() {
  //     return (
  //       <div className="card-body">
  //         <p className="date">March 20 2015</p>
          
  //         <h2>{this.props.title}</h2>
          
  //         <p className="body-content">{this.props.text}</p>
          
  //         <Button />
  //       </div>
  //     )
  //   }
  // }

  const CardBody  = (props) =>{
    return(
      <div className="card-body">
      <p className="date">March 20 2015</p>      
      <h2>{props.title}</h2>     
      <p className="body-content">{props.text}</p>      
      <Button />
    </div>
    )
  }
  

  // class Card extends React.Component {
  //   render() {
  //     return (
  //       <article className="card">
  //         <CardHeader category={this.props.details.category} image={this.props.details.image}/>
  //         <CardBody title={this.props.details.title} text={this.props.details.text}/>
  //       </article>
  //     )
  //   }
  // }

  const Card = (props) =>{
    return(
      <article className="card">
          <CardHeader category={props.details.category} image={props.details.image}/>
          <CardBody title={props.details.title} text={props.details.text}/>
        </article>
    )
  }



export default App;
