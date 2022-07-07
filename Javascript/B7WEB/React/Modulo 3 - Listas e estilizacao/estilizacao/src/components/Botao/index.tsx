import styles from './Botao.module.css'

export const Botao = ()=>{
    return (
       <div className={styles.square}>
        <button className={styles.botao}>Texto qualquer</button>
        <p className={styles.subtitle}>Legenda</p>
       </div>
    )
}