
import './AverageTime.css'

function AverageTime(props) {
    return (
        <div className="average-time-box">
            <div className="average-time-container">
                <div className="title-container">
                    <p className="title">Average time to finish tasks:</p>
                </div>
                <div className='time-container'>
                    <p className='time'>{props.averageAll} minutes</p>
                </div>

            </div>
        </div>
    )
}

export default AverageTime;
