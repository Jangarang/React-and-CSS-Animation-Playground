import style from './Center.module.css';
import Petal from './petal';
const Center = () => {
    return (
        <div className={style.center}>
            {/* <Petal/> */}
            <Petal styles={{ transform: 'rotate(45deg) translate(150px)'}}/>
            <Petal styles={{ transform: 'rotate(90deg) translate(150px) rotate(-90deg)'}}/>
            {/* <Petal styles={{ transform: 'rotate(135deg)'}}/>
            <Petal styles={{ transform: 'rotate(180deg)'}}/>
            <Petal styles={{ transform: 'rotate(225deg)'}}/>
            <Petal styles={{ transform: 'rotate(270deg)'}}/>

            <Petal styles={{ transform: 'rotate(315deg)'}}/>

            <Petal styles={{ transform: 'rotate(360deg)'}}/> */}
        </div>
    )
}

export default Center;