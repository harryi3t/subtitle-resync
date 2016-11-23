import React, { Component } from 'react';
import Subtitle from '../utility/Subtitle.js';
import Dropzone from 'react-dropzone';
import img from '../../static/images/srt.png';

export default class Resync extends Component {
  constructor(props) {
    super(props);
    this.onDrop = this.onDrop.bind(this);
    this.state = {
      fileDropped: false,
      currentFile: null,
      subtitle: null
    };
  }
  onDrop(acceptedFiles) {
    var self = this;
    if (acceptedFiles.length !== 1) return;

    self.setState({fileDropped: true});
    self.setState({currentFile: acceptedFiles[0]});
    var reader = new FileReader();
    reader.readAsBinaryString(acceptedFiles[0]);
    reader.onloadend = function () {
      self.setState({subtitle: new Subtitle(reader.result)});
    }
  }
  render() {
    var message;
    if (!this.state.fileDropped)
      message = <div>Try dropping some files here, or click to select files to upload.</div>;
    else
      message = (
        <div>
          <center>
            <img src={img} alt=''/>
            <h4>{this.state.currentFile.name}</h4>
          </center>
        </div>
      );
    return (
      <div>
        <h1>Resync App</h1>
        <Dropzone
          onDrop={this.onDrop}
          multiple={false}
          accept='application/x-subrip'>
          {message}
        </Dropzone>
      </div>
    );
  }
}
