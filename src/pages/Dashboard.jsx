import React from 'react'
import statusCards from '../assets/JsonData/status-card-data.json'
import StatusCard from '../components/statuscard/StatusCard'

const Dashboard = () => {
    return (
        <div>
            <h2 className="page-header">Dashboard</h2>
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        {
                            statusCards.map((item,index) => (
                                <div className="col-6">
                                    <StatusCard 
                                        icon = {item.icon}
                                        title = {item.title}
                                        count = {item.count }
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="col-6">
                    <div className="card full-height">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
