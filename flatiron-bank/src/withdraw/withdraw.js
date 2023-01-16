import styles from './withdraw.module.css'
export function Withdraw(){
    const onWithdraw = e => {
        e.preventDefault()

        console.log(e.target)
        const acId = e.target.acId.value
        const amount = e.target.amount.value
        console.log(`Id ${acId} amount ${amount}`)
    }
    return(
        <div className={styles.WithCont}>
            <h1>Withdraw Amount</h1>
            <form onSubmit={onWithdraw}>
                    <input type='number' placeholder='Account Id' name='acId'/>
                    <input type='number' placeholder='Amount' name='amount'/>
                    <input type='submit' value='Withdraw' />
            </form>
        </div>
    )
}