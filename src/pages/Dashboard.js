import React from 'react';
import SmallBox from '../components/small-box/SmallBox';

const Dashboard = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3 col-6">
                    <SmallBox
                        count={10}
                        title="New Orders"
                        type="info"
                        icon="ion-android-cart"
                        navigateTo="/"
                    />
                </div>
                <div className="col-lg-3 col-6">
                    <SmallBox
                        count={233000}
                        title="Current Outstanding"
                        type="success"
                        icon="ion-android-usd"
                        navigateTo="/"
                    />
                </div>
                <div className="col-lg-3 col-6">
                    <SmallBox
                        count={44}
                        title="User Registrations"
                        type="warning"
                        navigateTo="/"
                    />
                </div>
                <div className="col-lg-3 col-6">
                    <SmallBox
                        count={65}
                        title="Unique Visitors"
                        type="danger"
                        navigateTo="/"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-12">
                    <SmallBox
                        count="Sale Order"
                        title="New Orders"
                        type="info"
                        icon="ion-android-cart"
                        navigateTo="/"
                    />
                </div>
                <div className="col-lg-3 col-12">
                    <SmallBox
                        count={233000}
                        title="Current Outstanding"
                        type="success"
                        icon="ion-android-usd"
                        navigateTo="/"
                    />
                </div>
                <div className="col-lg-3 col-12">
                    <SmallBox
                        count={44}
                        title="User Registrations"
                        type="warning"
                        navigateTo="/"
                    />
                </div>
                <div className="col-lg-3 col-12">
                    <SmallBox
                        count={65}
                        title="Unique Visitors"
                        type="danger"
                        navigateTo="/"
                    />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
