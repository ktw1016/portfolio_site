import './about.scss';
import github from '../svg/github-logo.svg';
import linkedin from '../svg/linkedin.svg';
import email from '../svg/email.svg';
import myname from '../svg/myname.svg';
//import myname from '../svg/myname_ver2.svg';

import React from 'react';
import anime from "animejs";

export default class About extends React.Component {

  componentDidMount(){
    const wrap_letters = (textWrapper) => {
      textWrapper.innerHTML = textWrapper.textContent.replace(/./g, "<span className='text'>$&</span>");
    };
    const textWrapper1 = document.getElementById('about_desc_text1');
    const textWrapper2 = document.getElementById('about_desc_text2');
    wrap_letters(textWrapper1);
    wrap_letters(textWrapper2);

    const timeline = anime.timeline();
    timeline
      .add({
        targets: document.getElementById('media_row'),
        opacity: [0,1],
        duration: 4000,
        easing: 'easeInSine',
      })
      .add({
        targets: document.getElementById("line1"),
        scaleY: [0,1],
        opacity: [0.5,1],
        easing: "easeOutExpo",
        duration: 700,
      })
      .add({
        targets: document.getElementById("line1"),
        translateX: [0, textWrapper1.getBoundingClientRect().width + 5],
        easing: "easeOutExpo",
        duration: 1000,
      })
      .add({
        targets: textWrapper1.children,
        opacity: [0,1],
        duration: 800,
        easing: 'easeOutExpo',
        delay: (el, i) => 34 * (i+1),
      }, '-=975')
      .add({
        targets: document.getElementById("line1"),
        scaleY: [1,0],
        opacity: [1,0],
        easing: "easeOutExpo",
        duration: 700,
      })
      .add({
        targets: document.getElementById("line2"),
        scaleY: [0,1],
        opacity: [0.5,1],
        easing: "easeOutExpo",
        duration: 700,
      })
      .add({
        targets: document.getElementById("line2"),
        translateX: [0, textWrapper2.getBoundingClientRect().width + 5],
        easing: "easeOutExpo",
        duration: 2100,
      })
      .add({
        targets: textWrapper2.children,
        opacity: [0,1],
        duration: 1800,
        easing: 'easeOutExpo',
        delay: (el, i) => 34 * (i+1),
      }, '-=2075')
      .add({
        targets: document.getElementById("line2"),
        scaleY: [1,0],
        opacity: [1,0],
        easing: "easeOutExpo",
        duration: 700,
      });
  }

  render() {
    return (
      <div className='about_container'>
        <img id="myname" src={myname} alt="myname" height="125" width="1025"/>
        <div className="row_container">
          <span id="line1" className="line"></span>
          <span id="about_desc_text1" className="text"> SOFTWARE ENGINEER </span>
        </div>
        <div className="row_container">
          <span id="line2" className="line"></span>
          <span id="about_desc_text2" className="text"> BORN IN SEOUL, LIVING IN OTTAWA </span>
        </div>
        <div id="media_row" className="row_container">
          <a className="col_border" href="mailto:kang.taewan.96@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={email} alt="email" height="25" width="25"/>
          </a>
          <a className="col_border" href="https://github.com/ktw1016" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="github" height="25" width="25"/>
          </a>
          <a className="col_border" href="https://www.linkedin.com/in/taewan-kang-605060195/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="linkedin" height="25" width="25"/>
          </a>
        </div>
      </div>
      
    );
  }
}