import './about.scss';
import github from '../svg/github-logo.svg';
import linkedin from '../svg/linkedin.svg';
import email from '../svg/email.svg';
import resume from '../svg/resume.svg';
import retro_audio from "../audio/retro.mp3";

import React, { Fragment } from 'react';
import anime from "animejs";
import _ from 'lodash';

export default class About extends React.Component {

  componentDidMount(){
    const myname_element = document.querySelectorAll("#myname path");
    const audio_player = document.getElementById("about_audio");
    const name_length = _.reduce(myname_element, (name_length_sum, letter_el) => {
      return name_length_sum + letter_el.getBoundingClientRect().width;
    }, 0);

    const isIE = /(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
    if(isIE){
      alert("This website is driven by SVG animations that are NOT supported on IE or Edge. Please use any other browser for full potential!");
    } else{
      let initial_play = true;
      let is_playing = false;
      const play_path_value = [
        'M193 111L69.25 181.148L69.25 40.8519L193 111Z',
        'M193 111L69.25 181.148L69.25 40.8519L193 111Z',
      ];
      const pause_path_value = [
        "M153 185H131L131 37L153 37L153 185Z",
        "M91 37L91 185H69L69 37L91 37Z",
      ];
      const play_path = document.querySelectorAll("#play_btn path");
      const play_btn = document.getElementById('play_btn');
      
      _.forEach(myname_element, (val, idx) => {
        val.style.cssText = `stroke-dasharray: ${val.getTotalLength()}; stroke-dashoffset: ${val.getTotalLength()}`;
      });
      const wrap_letters = (textWrapper) => {
        textWrapper.innerHTML = textWrapper.textContent.replace(/./g, "<span className='text'>$&</span>");
      };
      const textWrapper1 = document.getElementById('about_desc_text1');
      const textWrapper2 = document.getElementById('about_desc_text2');
      wrap_letters(textWrapper1);
      wrap_letters(textWrapper2);
      
      const timeline = anime.timeline({ autoplay: false });
      timeline
        .add({
          targets: document.getElementById("line1"),
          scaleY: [0,1],
          opacity: [0.5,1],
          easing: "easeOutExpo",
          duration: 900,
        })
        .add({
          targets: document.getElementById("line1"),
          translateX: [0, textWrapper1.getBoundingClientRect().width - 5],
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
          duration: 900,
        })
        .add({
          targets: document.getElementById("line2"),
          scaleY: [0,1],
          opacity: [0.5,1],
          easing: "easeOutExpo",
          duration: 900,
        })
        .add({
          targets: document.getElementById("line2"),
          translateX: [0, textWrapper2.getBoundingClientRect().width - 15],
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
          duration: 900,
        })
        .add({
          targets: myname_element,
          strokeDashoffset: [anime.setDashoffset, 0],
          easing: 'easeInOutSine',
          duration: 3000,
          delay: function(el, i) { return i * 250; },
        }, '-=2500')
        .add({
          targets: document.getElementById("available_text"),
          scale: [14,1],
          opacity: [0,1],
          easing: "easeOutCirc",
          duration: 800,
          delay: (el, i) => 800 * i,
        }, '+=600')
        .add({
          targets: document.getElementById('media_row'),
          opacity: [0,1],
          duration: 2500,
          easing: 'easeInSine',
        })
        .add({
          targets: myname_element,
          fill: "#FFF",
          duration: 1000,
          easing: 'linear',
          delay: 500,
          complete: () => {
            anime.timeline({
              targets: myname_element,
              delay: 1000,
              easing: 'cubicBezier(0.445, 0.050, 0.550, 0.950)',
              loop: true,
              autoplay: true,
            })
              .add({
                fill: "#000",
                //opacity: 0,
                duration: 2000,
              })
              .add({
                fill: "#FFF",
                //opacity: 1,
                duration: 3000,
              });
          },
        });
      play_btn.addEventListener("click", () => {
        if(initial_play){
          initial_play = false;
          is_playing = true;

          audio_player.play();
          anime.timeline()
            .add({
              targets: play_path[0],
              d: [
                { value: pause_path_value[0] },
              ],
              easing: "linear",
              duration: 550,
            })
            .add({
              targets: play_path[1],
              d: [
                { value: pause_path_value[1] },
              ],
              easing: "linear",
              duration: 550,
            }, "-=550")
            .add({
              targets: play_btn,
              width: [100, 27],
              height: [100, 27],
              easing: "easeOutBounce",
              duration: 2500,
            }, "-=500")
            .add({
              targets: play_btn,
              translateX: -(name_length/3.3),
              easing: "easeInOutBack",
              duration: 2000,
            }, "-=1000")
            .add({
              targets: play_btn,
              opacity: [1,0.3],
              easing: "linear",
              duration: 700,
              complete: () => timeline.play(),
            }, "-=500");
        } else if(!is_playing){
          is_playing = true;

          audio_player.play();
          anime.timeline()
            .add({
              targets: play_path[0],
              d: [
                { value: pause_path_value[0] },
              ],
              easing: "linear",
              duration: 550,
            })
            .add({
              targets: play_path[1],
              d: [
                { value: pause_path_value[1] },
              ],
              easing: "linear",
              duration: 550,
            }, "-=550");

        } else if(is_playing){
          is_playing = false;

          audio_player.pause();
          anime.timeline()
            .add({
              targets: play_path[0],
              d: [
                { value: play_path_value[0] },
              ],
              easing: "linear",
              duration: 550,
            })
            .add({
              targets: play_path[1],
              d: [
                { value: play_path_value[1] },
              ],
              easing: "linear",
              duration: 550,
            }, "-=550");
        }
      });  
    }
  }

  render() {
    const myname_svg = (
      <svg id="myname" width="715" height="100" viewBox="0 0 615 78" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="path-1-outside-1" maskUnits="userSpaceOnUse" x="0.503128" y="0.799988" width="615" height="78" fill="black">
          <rect fill="white" x="0.503128" y="0.799988" width="615" height="78"/>
          <path d="M5.50313 15.4V5.79999H53.5031V15.4H34.3031V73H24.7031V15.4H5.50313Z"/>
          <path d="M48.2531 73V39.4C48.2531 38.952 48.4131 38.248 48.7331 37.288L63.1331 8.48799C63.3251 7.97599 63.9331 7.39999 64.9571 6.75999C66.0451 6.11999 66.8771 5.79999 67.4531 5.79999H77.0531C77.6291 5.79999 78.4291 6.11999 79.4531 6.75999C80.5411 7.39999 81.1811 7.97599 81.3731 8.48799L95.7731 37.288C96.0931 38.056 96.2531 38.76 96.2531 39.4V73H86.6531V53.8H57.8531V73H48.2531ZM57.8531 44.2H86.6531V40.552L74.0771 15.4H70.4291L57.8531 40.552V44.2Z"/>
          <path d="M105.816 73V5.79999H153.816V15.4H115.416V34.6H144.216V44.2H115.416V63.4H153.816V73H105.816Z"/>
          <path d="M163.378 73V5.79999H172.978V57.16L187.378 35.56V29.8H196.978V35.56L211.378 57.16V5.79999H220.978V73H212.146L192.178 45.64L172.21 73H163.378Z"/>
          <path d="M230.597 73V39.4C230.597 38.952 230.757 38.248 231.077 37.288L245.477 8.48799C245.669 7.97599 246.277 7.39999 247.301 6.75999C248.389 6.11999 249.221 5.79999 249.797 5.79999H259.397C259.973 5.79999 260.773 6.11999 261.797 6.75999C262.885 7.39999 263.525 7.97599 263.717 8.48799L278.117 37.288C278.437 38.056 278.597 38.76 278.597 39.4V73H268.997V53.8H240.197V73H230.597ZM240.197 44.2H268.997V40.552L256.421 15.4H252.773L240.197 40.552V44.2Z"/>
          <path d="M288.159 73V5.79999H297.183L326.559 54.952V5.79999H336.159V73H327.231L297.759 23.848V73H288.159Z"/>
          <path d="M388.941 73V5.79999H398.541V34.6H415.725L427.341 22.984V5.79999H436.941V25C436.941 25.256 436.749 25.832 436.365 26.728C436.045 27.624 435.789 28.168 435.597 28.36L424.557 39.4L435.597 50.44C435.789 50.632 436.045 51.176 436.365 52.072C436.749 52.968 436.941 53.544 436.941 53.8V73H427.341V55.816L415.725 44.2H398.541V73H388.941Z"/>
          <path d="M446.503 73V39.4C446.503 38.952 446.663 38.248 446.983 37.288L461.383 8.48799C461.575 7.97599 462.183 7.39999 463.207 6.75999C464.295 6.11999 465.127 5.79999 465.703 5.79999H475.303C475.879 5.79999 476.679 6.11999 477.703 6.75999C478.791 7.39999 479.431 7.97599 479.623 8.48799L494.023 37.288C494.343 38.056 494.503 38.76 494.503 39.4V73H484.903V53.8H456.103V73H446.503ZM456.103 44.2H484.903V40.552L472.327 15.4H468.679L456.103 40.552V44.2Z"/>
          <path d="M504.066 73V5.79999H513.09L542.466 54.952V5.79999H552.066V73H543.138L513.666 23.848V73H504.066Z"/>
          <path d="M561.628 58.504V20.2C561.628 16.232 563.036 12.84 565.852 10.024C568.668 7.20799 572.06 5.79999 576.028 5.79999H595.132C599.1 5.79999 602.492 7.20799 605.308 10.024C608.124 12.84 609.532 16.232 609.532 20.2V25H599.932V20.2C599.932 18.92 599.452 17.8 598.492 16.84C597.532 15.88 596.412 15.4 595.132 15.4H576.028C574.748 15.4 573.628 15.88 572.668 16.84C571.708 17.8 571.228 18.92 571.228 20.2V58.504C571.228 59.784 571.708 60.904 572.668 61.864C573.628 62.824 574.748 63.304 576.028 63.304H595.132C596.476 63.304 597.596 62.824 598.492 61.864C599.452 60.904 599.932 59.784 599.932 58.504V49.672L585.148 46.216L587.26 36.904L605.788 41.128C606.876 41.32 607.772 41.864 608.476 42.76C609.18 43.656 609.532 44.68 609.532 45.832V58.504C609.532 62.472 608.124 65.864 605.308 68.68C602.492 71.496 599.1 72.904 595.132 72.904H576.028C572.06 72.904 568.668 71.496 565.852 68.68C563.036 65.864 561.628 62.472 561.628 58.504Z"/>
        </mask>
        <path d="M5.50313 15.4V5.79999H53.5031V15.4H34.3031V73H24.7031V15.4H5.50313Z" stroke="white" strokeWidth="10" mask="url(#path-1-outside-1)"/>
        <path d="M48.2531 73V39.4C48.2531 38.952 48.4131 38.248 48.7331 37.288L63.1331 8.48799C63.3251 7.97599 63.9331 7.39999 64.9571 6.75999C66.0451 6.11999 66.8771 5.79999 67.4531 5.79999H77.0531C77.6291 5.79999 78.4291 6.11999 79.4531 6.75999C80.5411 7.39999 81.1811 7.97599 81.3731 8.48799L95.7731 37.288C96.0931 38.056 96.2531 38.76 96.2531 39.4V73H86.6531V53.8H57.8531V73H48.2531ZM57.8531 44.2H86.6531V40.552L74.0771 15.4H70.4291L57.8531 40.552V44.2Z" stroke="white" strokeWidth="10" mask="url(#path-1-outside-1)"/>
        <path d="M105.816 73V5.79999H153.816V15.4H115.416V34.6H144.216V44.2H115.416V63.4H153.816V73H105.816Z" stroke="white" strokeWidth="10" mask="url(#path-1-outside-1)"/>
        <path d="M163.378 73V5.79999H172.978V57.16L187.378 35.56V29.8H196.978V35.56L211.378 57.16V5.79999H220.978V73H212.146L192.178 45.64L172.21 73H163.378Z" stroke="white" strokeWidth="10" mask="url(#path-1-outside-1)"/>
        <path d="M230.597 73V39.4C230.597 38.952 230.757 38.248 231.077 37.288L245.477 8.48799C245.669 7.97599 246.277 7.39999 247.301 6.75999C248.389 6.11999 249.221 5.79999 249.797 5.79999H259.397C259.973 5.79999 260.773 6.11999 261.797 6.75999C262.885 7.39999 263.525 7.97599 263.717 8.48799L278.117 37.288C278.437 38.056 278.597 38.76 278.597 39.4V73H268.997V53.8H240.197V73H230.597ZM240.197 44.2H268.997V40.552L256.421 15.4H252.773L240.197 40.552V44.2Z" stroke="white" strokeWidth="10" mask="url(#path-1-outside-1)"/>
        <path d="M288.159 73V5.79999H297.183L326.559 54.952V5.79999H336.159V73H327.231L297.759 23.848V73H288.159Z" stroke="white" strokeWidth="10" mask="url(#path-1-outside-1)"/>
        <path d="M388.941 73V5.79999H398.541V34.6H415.725L427.341 22.984V5.79999H436.941V25C436.941 25.256 436.749 25.832 436.365 26.728C436.045 27.624 435.789 28.168 435.597 28.36L424.557 39.4L435.597 50.44C435.789 50.632 436.045 51.176 436.365 52.072C436.749 52.968 436.941 53.544 436.941 53.8V73H427.341V55.816L415.725 44.2H398.541V73H388.941Z" stroke="white" strokeWidth="10" mask="url(#path-1-outside-1)"/>
        <path d="M446.503 73V39.4C446.503 38.952 446.663 38.248 446.983 37.288L461.383 8.48799C461.575 7.97599 462.183 7.39999 463.207 6.75999C464.295 6.11999 465.127 5.79999 465.703 5.79999H475.303C475.879 5.79999 476.679 6.11999 477.703 6.75999C478.791 7.39999 479.431 7.97599 479.623 8.48799L494.023 37.288C494.343 38.056 494.503 38.76 494.503 39.4V73H484.903V53.8H456.103V73H446.503ZM456.103 44.2H484.903V40.552L472.327 15.4H468.679L456.103 40.552V44.2Z" stroke="white" strokeWidth="10" mask="url(#path-1-outside-1)"/>
        <path d="M504.066 73V5.79999H513.09L542.466 54.952V5.79999H552.066V73H543.138L513.666 23.848V73H504.066Z" stroke="white" strokeWidth="10" mask="url(#path-1-outside-1)"/>
        <path d="M561.628 58.504V20.2C561.628 16.232 563.036 12.84 565.852 10.024C568.668 7.20799 572.06 5.79999 576.028 5.79999H595.132C599.1 5.79999 602.492 7.20799 605.308 10.024C608.124 12.84 609.532 16.232 609.532 20.2V25H599.932V20.2C599.932 18.92 599.452 17.8 598.492 16.84C597.532 15.88 596.412 15.4 595.132 15.4H576.028C574.748 15.4 573.628 15.88 572.668 16.84C571.708 17.8 571.228 18.92 571.228 20.2V58.504C571.228 59.784 571.708 60.904 572.668 61.864C573.628 62.824 574.748 63.304 576.028 63.304H595.132C596.476 63.304 597.596 62.824 598.492 61.864C599.452 60.904 599.932 59.784 599.932 58.504V49.672L585.148 46.216L587.26 36.904L605.788 41.128C606.876 41.32 607.772 41.864 608.476 42.76C609.18 43.656 609.532 44.68 609.532 45.832V58.504C609.532 62.472 608.124 65.864 605.308 68.68C602.492 71.496 599.1 72.904 595.132 72.904H576.028C572.06 72.904 568.668 71.496 565.852 68.68C563.036 65.864 561.628 62.472 561.628 58.504Z" stroke="white" strokeWidth="10" mask="url(#path-1-outside-1)"/>
      </svg>
    );

    const play_svg = (
      <svg id="play_btn" style={{cursor: "pointer"}} width="222" height="222" viewBox="0 0 222 222" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="111" cy="111" r="111" fill="white"/>
        <path d="M193 111L69.25 181.148L69.25 40.8519L193 111Z" fill="black"/>
        <path d="M193 111L69.25 181.148L69.25 40.8519L193 111Z" fill="black"/>
      </svg>
    );

    return (
      <Fragment>
        <div className="d-flex flex-column justify-content-start align-items-center">
          {play_svg}
        </div>
        <div className="h-100 d-flex flex-column justify-content-center align-items-center">
          <div style={{paddingBottom: 30}}>
            {myname_svg}
          </div>
          <div className="d-flex flex-row">
            <span id="line1" className="line"></span>
            <span id="about_desc_text1" className="text"> SOFTWARE ENGINEER </span>
          </div>
          <div className="d-flex flex-row">
            <span id="line2" className="line"></span>
            <span id="about_desc_text2" className="text"> BORN IN SEOUL, LIVING IN OTTAWA </span>
          </div>
          <span id="available_text" className="text"> AVAILABLE NOW </span>
          <div id="media_row" className="d-flex flex-row p-2">
            <a className="col-border" href="mailto:kang.taewan.96@gmail.com" target="_blank" rel="noopener noreferrer">
              <img src={resume} alt="resume" className="media-size"/>
            </a>
            <a className="col-border" href="mailto:kang.taewan.96@gmail.com" target="_blank" rel="noopener noreferrer">
              <img src={email} alt="email" className="media-size"/>
            </a>
            <a className="col-border" href="https://github.com/ktw1016" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="github" className="media-size"/>
            </a>
            <a className="col-border" href="https://www.linkedin.com/in/taewan-kang-605060195/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="linkedin" className="media-size"/>
            </a>
          </div>
        </div>
        <audio id="about_audio">
          <source src={retro_audio} type="audio/mpeg"/>
        </audio>
      </Fragment>
    );
  }
}