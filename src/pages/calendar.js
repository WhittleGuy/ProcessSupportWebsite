import React, { Component } from "react";

class Calendar extends Component {
  render() {
    return (
      <div className="calendar">
        <div className="key">
          <h3>Key</h3>
          <span className="line"></span>
          <div className="key-container">
            <span className="dot-id" id="Josh"></span>
            <p className="student">Josh Gray</p>
          </div>
          <div className="key-container">
            <span className="dot-id" id="Brandon"></span>
            <p className="student">Brandon Whittle</p>
          </div>
          <div className="key-container">
            <span className="dot-id" id="Luna"></span>
            <p className="student">Luna Spring</p>
          </div>
          <div className="key-container">
            <span className="dot-id" id="Zvezda"></span>
            <p className="student">Zvezda Spring</p>
          </div>
          <div className="key-container">
            <span className="dot-id" id="Lake"></span>
            <p className="student">Lake McGinty</p>
          </div>
          <div className="key-container">
            <span className="dot-id" id="Noah"></span>
            <p className="student">Noah Smith</p>
          </div>
          <div className="key-container">
            <span className="dot-id" id="Emma"></span>
            <p className="student">Emma Gilham</p>
          </div>
          <div className="key-container">
            <span className="dot-id" id="Andrea"></span>
            <p className="student">Andrea Biasella</p>
          </div>
          <div className="key-container">
            <span className="dot-id" id="Yonnas"></span>
            <p className="student">Yonnas Wole</p>
          </div>
          <div className="key-container">
            <span className="dot-id" id="Luis"></span>
            <p className="student">Luis Deloria</p>
          </div>
        </div>

        <iframe
          title="calendar"
          className="schedule"
          src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FChicago&amp;src=aDVpcTc4N21uYXJoN28yYWdvODBjZGNjc3VtYXNua2FAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=MGgwZm00bjE0Z2xyMHZsbmlxdXRla2EzNjA4NHFsbmhAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=ZXZlY2QwcHQwY2dpdjF1MjUwdDNodjV1MTBnMXRua2RAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=aTJxaTBxYjYza2lzZTJsdjBzbmczZzhjZ29oZGE5ZzlAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=anBqZGFkYnJmdGdnNzM0dHA3cXFtN3BnZHVkaDdnMzhAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=dnNjam1xMXRsMWZnbDZwZDVxbGpvYXB1NzFjaXJ2bWVAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=a2EwOWxhaGNhZXAxdXU5b2IzdGEwdmUxc3U2bDFxM3BAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=MmJsdnV1ZjlyNTduMnZicWg0OTczYjBqbW0xZWJibG5AaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%23A79B8E&amp;color=%230B8043&amp;color=%23D81B60&amp;color=%23039BE5&amp;color=%23F6BF26&amp;color=%238E24AA&amp;color=%23EF6C00&amp;color=%233F51B5&amp;showTitle=0&amp;showNav=1&amp;showPrint=0&amp;showTz=0&amp;mode=WEEK"
        ></iframe>
      </div>
    );
  }
}

export default Calendar;
