export function NewCustomer() {
    return (
        <div>
            <h1>Create New Account</h1>
            <form>
                <div>
                    <input type='number' placeholder='Account Id' />
                </div>
                <div>
                    <input type='text' placeholder='Account Name' />
                </div>
                <div>
                    <input type='number' placeholder='Balance' />
                </div>
                <div>
                    <input type='submit' value='Create' />
                </div>
            </form>
        </div>
    )
}