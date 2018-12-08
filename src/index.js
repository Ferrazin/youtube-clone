import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/searchbar";
import VideoList from './components/videoList'
import VideoDetail from "./components/videoDetail";
import './style/style.css'
const API_KEY = "AIzaSyCiq6KWB9JfKvabI3M6HDMUqLMLcsSxlt8";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
        videos: [],
        selectedVideo: null,
     };

    YTSearch({ key: API_KEY, term: "savannah cats" }, videos => {
      this.setState({ 
          videos: videos,
          selectedVideo: videos[0]
        });
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
        onVideoSelect={selectedVideo => {this.setState({selectedVideo})}}
        videos={this.state.videos}  />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
