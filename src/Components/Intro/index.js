import React from 'react';
import './styles.scss';

const Intro = props => {
    return(
    <>
    <div className="headline">
        Connecting the Disconnected
    </div>
    
    <div className="mainHeading">
        <h2>
            <p>
                <span className = "colorText">
                     Vyorius 
                </span> <t />
                <span>
                 brings unmanned robots
                 </span> <t /> 
                <span className = "colorText">
                     together,
                </span> 
                 <span>
                     wherever they are
                 </span>
            </p> 
        </h2>
    </div>

    <div className="matter">
        With all of the operations, commanding and maintenance tools in one place,
         unmanned vehicles will stay connected and productive no matter where you're
         Delivering.
    </div>
    <div className="buttons">
        
        <button  class="btn btn-primary" type="submit" id = "btn">Try Vyorius?</button>
        <t /> <t />
        <button class="btn btn-primary" type="submit" id = "btn">Learn More</button>

    </div>
    </>
    );
}

export default Intro;