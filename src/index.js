import _ from 'lodash'
import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/searchbar";
import VideoList from "./components/videoList";
import VideoDetail from "./components/videoDetail";
import "./style/style.css";
const API_KEY = "";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surf')
  }
  videoSearch = term => {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  };
  render() {
    const videoSearch = _.debounce(term => {this.videoSearch(term)}, 300)
    return (
      <div className="container">
      <div className="row">
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => {
            this.setState({ selectedVideo });
          }}
          videos={this.state.videos}
        />
      </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
