import './about.scss';
import github from '../svg/github-logo.svg';
import linkedin from '../svg/linkedin.svg';
import email from '../svg/email.svg';

import React from 'react';

export default class About extends React.Component {
    render() {
        return (
            <div className='about_container'>
                <div className="media_container">
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
                <span className="text" style={{"fontSize": 70}}> TAEWAN KANG </span>
                <span className="text"> SOFTWARE ENGINEER </span>
                <span className="text"> BORN IN SEOUL, LIVING IN OTTAWA </span>
            </div>
        )
    }
}