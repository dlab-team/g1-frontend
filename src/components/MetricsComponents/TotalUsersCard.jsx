const TotalUsersCard = ({ title, count }) => {
  return (
    <div className='bg-white p-4 rounded shadow text-center'>
      <p className='text-lg font-semibold text-title-500'>{count}</p>
      <p className='text-title-500'>{title}</p>
    </div>
  )
}

export default TotalUsersCard
