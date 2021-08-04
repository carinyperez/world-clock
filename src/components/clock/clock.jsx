import './clock.styles.scss'; 


const Clock = (props) => {
    return (
        <div className='clock-div'>
            <div>
            <p>{props.name}</p>  
            </div> 
            <div className='clock-container'>
            <div className='num1'><span>1</span></div>
            <div className='num2'><span>2</span></div>
            <div className='hour'></div>
            <div className='minute'></div>
            <div className='num3'><span>3</span></div>
            <div className='num4'><span>4</span></div>
            <div className='num5'><span>5</span></div>
            <div className='num6'><span>6</span></div>
            <div className='num7'><span>7</span></div>            
            <div className='num8'><span>8</span></div>  
            <div className='num9'><span>9</span></div>            
            <div className='num10'><span>10</span></div>           
            <div className='num11'><span>11</span></div>            
            <div className='num12'><span>12</span></div>        
        </div> 
        </div> 
    )
}

export default Clock;