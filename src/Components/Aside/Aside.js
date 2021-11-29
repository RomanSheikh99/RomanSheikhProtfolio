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
                <h2>Roman Sheikh</h2>
            </div>
            <div className="user-title">
                <Typical
                    steps={[
                        'web developer', 1000,
                        'FrontEnd developer', 1000,
                        'react developer', 1000,
                        'JavaScript developer', 1000
                    ]}
                    loop={Infinity}
                    wrapper="p"
                />
            </div>
        </div>
    );
};

export default Aside;