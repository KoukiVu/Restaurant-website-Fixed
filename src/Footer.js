import React from 'react';
import './css/footer.css';

const Footer = () => {
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column 1 */}
                    <div className="col">
                        <h4 className="location">Location</h4>
                        <ul className="list-unstyled">
                            <li>123-456-7890</li>
                            <li>Full Sail University</li>
                            <li>3300 Winter Park</li>
                        </ul>
                    </div>
                    {/* Column 2 */}
                    <div className="col">
                        <h4 className="storeHours">Store Hours</h4>
                        <ul className="list-unstyled">
                            <li>Monday - Friday</li>
                            <li>Friday & Sunday</li>
                        </ul>
                    </div>
                </div>
                {/* Bottom Part */}
                <hr className="bottomPart"/>
                <div className="row">
                    <p className="bottomPart">
                        &copy;{new Date().getFullYear()} NANA INC | All rights reserved | Terms Of Service | Privacy
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;