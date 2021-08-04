import map from '../assets/world_map.png'; 
import Clock from '../components/clock/clock'; 
import './homepage.styles.scss';



const HomePage = () => {
    return (
        <div> 
            <h1>World Clock</h1>
            <div className='clocks'>
                <Clock name='New York'/>
                <Clock name='London'/>
                <Clock name='Riyadh'/>
                <Clock name='Jakarta'/>
                <Clock name='Hong Kong'/>
                <Clock name='Tokyo'/>
            </div>
            <img alt='world-map' src={map}></img>
        </div>
    )
}
export default HomePage; 
