import { motion } from 'framer-motion';

type AnimatedImageProps = {
    src: string;
    alt?: string;
    onClick?: () => void;
    delay?: number;
    className: string;
    position?: number;
};

const AnimatedImage = (
    {src, alt = "", onClick, delay = 0, className, position}: AnimatedImageProps) => {
    return (
        <div 
            className={className}
             style={{ ["--position" as any]: position }} // pass into CSS var // pass into CSS var
        >
        <motion.img
            src={src}
            alt={alt}
            onClick={onClick}
            whileHover={{ scale: 1.1}} 
        />
        </div>
    );
};

export default AnimatedImage;