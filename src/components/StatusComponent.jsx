/* eslint-disable react/prop-types */
const StatusComponent = ({ incomeStatus, expenseStatus, balanceAmount }) => {
  return (
    <>
      <div className='stats shadow'>
        <div className='stat place-items-center'>
          <div className='stat-title'>Income</div>
          <div className='stat-value'>{incomeStatus}</div>
        </div>

        <div className='stat place-items-center'>
          <div className='stat-title'>Expense</div>
          <div className='stat-value'>{expenseStatus}</div>
        </div>

        <div className='stat place-items-center'>
          <div className='stat-title'>Balance</div>
          <div className='stat-value text-secondary'>{balanceAmount}</div>
        </div>
      </div>
    </>
  )
}

export default StatusComponent
