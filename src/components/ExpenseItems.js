import './ExpenseItem.css'

function ExpenseItem() {
    return (
    <div className="expense-item">
        <div>November 19th 2021</div>
        <div className="expense-item_description">
            <h2>Car Insurance</h2>
            <div className="expense-item__price">$298.09</div>
        </div>
    </div>
    );
}

export default ExpenseItem;