import styles from './balance.module.css'
export function Balance(){
    const onBalance = e => {
        e.preventDefault()

        console.log(e.target)
        const acId = e.target.acId.value
        const pin = e.target.pin.value
        console.log(`Id ${acId} Pin ${pin}`)
    }
    return(
        <div className={styles.BalCont}>
            <h1>Balance Amount</h1>
            <form onSubmit={onBalance}>
                    <input type='number' placeholder='Account Id' name='acId'/>
                    <input type='number' placeholder='Pin' name='pin'/>
                    <input type='submit' value='Balance' />
            </form>
        </div>
    )
}