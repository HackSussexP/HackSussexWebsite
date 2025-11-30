import styles from "./polaroid.module.css"
import PolaroidBackground from "../../assets/misc/polaroid-template.png"
import { useState } from "react"

const Polaroid = ({image, rotate}) =>
{

    const [polaroid, setImage] = useState(image)

    return(
        <div className={styles.polaroid} style={{transform: `rotate(${rotate})`}}>
            <img className={styles.polaroidTemplate} src={PolaroidBackground}></img>
            <img className={styles.polaroidImage} src={polaroid}></img>
        </div>
    )
}

export default Polaroid;