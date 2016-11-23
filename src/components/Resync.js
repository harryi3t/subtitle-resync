import React, { Component } from 'react';
import Subtitle from '../utility/Subtitle.js';
import Dropzone from 'react-dropzone';
import Delay from './Delay';
import srtImg from '../../static/images/srt.png';
import save from '../utility/save';

export default class Resync extends Component {
  constructor(props) {
    super(props);
    this.onDrop = this.onDrop.bind(this);
    this.resync = this.resync.bind(this);
    this.download = this.download.bind(this);
    this.state = {
      fileDropped: false,
      currentFile: null,
      subtitle: null,
      resynced: false
    };
  }
  download() {
    console.log('downloading...');
    save(this.state.currentFile.name + '-resync.srt', this.state.subtitle.content);
  }
  resync(delayCounter) {
    if (!this.state.subtitle) return;
    this.state.subtitle.delay(parseInt(delayCounter));
    this.setState({resynced: true});
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
            <img src={srtImg} alt=''/>
            <h4>{this.state.currentFile.name}</h4>
          </center>
        </div>
      );
    return (
      <div className='row'>
        <div className='col-xs-4 col-xs-offset-2'>
          <Dropzone
            onDrop={this.onDrop}
            multiple={false}
            accept='application/x-subrip'>
            {message}
          </Dropzone>
        </div>
        <div className='col-xs-4'>
          <Delay onClick={this.resync}>
            <button
              disabled={!this.state.resynced}
              onClick={this.download}
              className='btn btn-success'>Download</button>
          </Delay>
        </div>
      </div>
    );
  }
}
