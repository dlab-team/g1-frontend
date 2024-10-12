import { useState, useEffect } from 'react'
import NotificationCard from '../components/NotificationComponents/NotificationCard'
import ToggleButton from '../components/NotificationComponents/ToggleButton'
import MarkAsReadButton from '../components/NotificationComponents/ReadButton'
import notificationsData from '../components/NotificationComponents/NotificationsTest.json'
import SidebarComponent from '../components/Navbar/Sidebar'

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([])

  useEffect(() => {
    setNotifications(notificationsData.sections)
  }, [])

  const handleMarkAsRead = () => {
    console.log('Marcar todo como leído')
  }

  return (
    <div className='flex'>
      {/* Sidebar */}
      <div className='w-16 sm:w-24 md:w-64 fixed left-0 top-0 h-full z-10 bg-white'>
        <SidebarComponent />
      </div>

      {/* Main content */}
      <div className='flex-grow ml-24 sm:ml-24 md:ml-64 p-6 max-w-4xl mx-auto'>
        <div className='flex flex-col items-center justify-center mb-6 border-b border-gray-200 pb-4 tablet:flex-row tablet:justify-between tablet:border-b tablet:pb-4 mobile:border-b-0 mobile:pb-0'>
          <h1 className='font-workSans italic text-3xl font-semibold text-center tablet:text-left'>
            Notificaciones
          </h1>
          <div className='hidden tablet:block'>
            <ToggleButton />
          </div>
        </div>
        <div className='flex justify-end hidden tablet:block'>
          <MarkAsReadButton onClick={handleMarkAsRead} />
        </div>
        <div className='space-y-4'>
          {notifications.map((section, index) => (
            <div key={index}>
              <h2 className='text-lg font-semibold mb-4 border-b border-gray-200 pb-2'>
                {section.title}
              </h2>
              <div className='space-y-4'>
                {section.notifications.map((notification, idx) => (
                  <NotificationCard
                    key={idx}
                    title={notification.title}
                    description={notification.description}
                    time={notification.time}
                    isHighlighted={index < 2 && idx < 2}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;
