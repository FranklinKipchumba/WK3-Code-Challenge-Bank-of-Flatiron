import styles from './transaction.module.css'

export function Transaction(){
    const onTransaction = e => {
        e.preventDefault()
    }
    return(
        <div className={styles.TransactionCont}>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Amount</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}