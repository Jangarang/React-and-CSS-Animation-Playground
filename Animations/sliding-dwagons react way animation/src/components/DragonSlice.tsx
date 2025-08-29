import  AnimatedImage  from './AnimatedImage';
import styles from "./DragonSlider.module.css";
import { dragons } from "../data";

const DragonSlider = () =>  {
    console.log(dragons.length);
    return (
        <div className={styles.slider} style={{ ["--quantity" as any]: dragons.length }}>
            {dragons.map((dragon, i) => (
            <AnimatedImage
                key={i}
                src={dragon.src}
                alt={dragon.alt}
                className={styles.item}
                position={i + 1}
            />
      ))}
        </div>
    );
};

export default DragonSlider;
