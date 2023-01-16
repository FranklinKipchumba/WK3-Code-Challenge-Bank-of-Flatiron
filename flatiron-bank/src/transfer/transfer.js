import styles from './transfer.module.css'
export function Transfer(){
    const onTransfer = e => {
        e.preventDefault()

        console.log(e.target)
        const acId = e.target.acId.value
        const amount = e.target.amount.value
        console.log(`Id ${acId} amount ${amount}`)
    }
    return(
        <div className={styles.TransCont}>
            <h1>Transfer Amount</h1>
            <form onSubmit={onTransfer}>
                    <input type='number' placeholder='Account Id' name='acId'/>
                    <input type='number' placeholder='Amount' name='amount'/>
                    <input type='submit' value='Transfer' />
            </form>
        </div>
    )
}