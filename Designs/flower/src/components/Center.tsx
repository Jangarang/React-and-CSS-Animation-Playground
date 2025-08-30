import style from './Center.module.css';
import Petal from './petal';
const Center = () => {
    return (
        <div className={style.center}>
            {/* <Petal/> */}
            <Petal styles={{ transform: 'rotate(45deg) translate(150px) rotate(-45deg)'}}/>
        
            <Petal styles={{ transform: 'rotate(90deg) translate(150px) rotate(-90deg)'}}/>
            <Petal styles={{ transform: 'rotate(135deg) translate(150px) rotate(-135deg)'}}/>
            <Petal styles={{ transform: 'rotate(180deg) translate(150px) rotate(-180deg)'}}/>
            <Petal styles={{ transform: 'rotate(225deg) translate(150px) rotate(-225deg)'}}/>
            <Petal styles={{ transform: 'rotate(270deg) translate(150px) rotate(-270deg)'}}/>

            <Petal styles={{ transform: 'rotate(315deg) translate(150px) rotate(-315deg)'}}/>

            <Petal styles={{ transform: 'rotate(360deg) translate(150px) rotate(-360deg)'}}/>
        </div>
    )
}

export default Center;