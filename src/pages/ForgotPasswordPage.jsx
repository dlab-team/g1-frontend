import { useState } from 'react'
import ResetPassword from '../components/ResetPassword'
import Modal from '../components/Modal'

const ForgotPasswordPage = () => {
  const [isModalVisible, setModalVisible] = useState(false)

  const handleResetPasswordSubmit = () => {
    setModalVisible(true)
  }

  return (
    <div>
      {!isModalVisible ? (<ResetPassword onSubmit={handleResetPasswordSubmit}/>) : (
        <Modal />
      )}
    </div>
  )
}

export default ForgotPasswordPage;
