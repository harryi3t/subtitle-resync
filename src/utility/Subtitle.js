import parser from 'subtitles-parser';

export default class Subtitle {
  constructor(content) {
    if (typeof content !== 'string')
      throw new Error('first parameter must be a string (subtitle content)');

    this.content = content;
    this.json = parser.fromSrt(content, true);
  }
  delay(ms) {
    if (typeof ms !== 'number' || ms !== ms)
      throw new Error('milliseconds must be a number (positive/negative)');

    this.json.forEach(
      function (entry) {
        entry.startTime += ms;
        entry.endTime += ms;
      }
    );
    this.content = parser.toSrt(this.json);
    this.json = parser.fromSrt(this.content, true);
  }
}
