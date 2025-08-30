import style from './Petal.module.css';

type PetalProps = {
    styles?: React.CSSProperties;
}

const Petal = ({styles}: PetalProps) => {
    return (
        <div className={style.petal} style={styles}>
            circle
        </div>
    );
};

export default Petal;