import { faCalculator,faFacebook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Typical from 'react-typical'
import profile from '../../img/My_Picture/RomanSheikh.jpg'
import './Aside.css'

const Aside = () => {
    return (
        <div>
            <div className="profile-pic">
                <img src={profile} alt="" />
            </div>
            <div className="user-name">
                <h3>Roman Sheikh</h3>
            </div>
            <div className="user-title">
                <Typical
                    steps={[
                        'web developer', 1000,
                        'Front-End developer', 1000,
                        'react developer', 1000,
                        'JavaScript developer', 1000
                    ]}
                    loop={Infinity}
                    wrapper="p"
                />
            </div>
            <div className="social-icons">
                <a href="https://github.com/RomanSheikh99" target='_blank'>
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/dev-roman/" target='_blank'>
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://www.facebook.com/romansheikh2003/" target='_blank'>
                    <i className="fab fa-facebook"></i>
                </a>
            </div>
            <div className="more-information">
                <div className="birthday icon">
                    <i className="fas fa-birthday-cake"></i>
                    <span>november 17, 2003</span>
                </div>
                <div className="address icon">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>sylhet, bangladesh</span>
                </div>
                <div className="mail icon">
                    <i class="fas fa-envelope"></i>
                    <span>dev.romansheikh@gmail.com</span>
                </div>
                <div className="phone icon">
                    <i class="fas fa-phone"></i>
                    <span>+880 1833923107</span>
                </div>
            </div>
            <div className="resume-btn">
                <a href="https://drive.google.com/uc?export=download&id=1b3JFmK8733fafzVk-Uqmn_KAc7TzYLHv">
                    get resume
                </a>
            </div>
        </div>
    );
};

export default Aside;