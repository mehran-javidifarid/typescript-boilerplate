import React, {Component} from 'react';
import {Link} from "react-router-dom";

class NoMatch extends Component {

    render() {
        return (
            <div className="container">
                <div className="pageContent">
                    <div className="row">
                        <div className="homeImage" style={{marginTop: '10%'}}>
                            <h5 className="text-center margin-top-20" style={{fontSize: '7em'}}> 404 </h5>
                            <h5 className="text-center margin-top-20"> متاسفانه صفحه مورد نظر شما یافت نشد. </h5>
                            <Link className="btn btn-sm btn-outline-danger margin-top-20" to="/">بازگشت به صفحه
                                اصلی</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NoMatch;
