import { useState, useEffect } from 'react'
import NotificationCard from '../components/NotificationComponents/NotificationCard'
import ToggleButton from '../components/NotificationComponents/ToggleButton'
import MarkAsReadButton from '../components/NotificationComponents/ReadButton'
import notificationsData from '../components/NotificationComponents/NotificationsTest.json'
import SidebarComponent from '../components/Navbar/Sidebar'

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([])
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)

  useEffect(() => {
    setNotifications(notificationsData.sections);
  }, [])

  const handleToggleNotifications = () => {
    setNotificationsEnabled((prevEnabled) => !prevEnabled)
    console.log(
      notificationsEnabled
        ? 'Notificaciones desactivadas'
        : 'Notificaciones activadas'
    )
  };

  const handleMarkAsRead = () => {
    const updatedNotifications = notifications.map((section) => ({
      ...section,
      notifications: section.notifications.map((notification) => ({
        ...notification,
        read: true,
      })),
    }));
    setNotifications(updatedNotifications);
    console.log('Todas las notificaciones marcadas como leídas')
  }

  const handleDoubleClick = (sectionIndex, notificationIndex) => {
    const updatedNotifications = notifications.map((section, secIdx) => {
      if (secIdx === sectionIndex) {
        return {
          ...section,
          notifications: section.notifications.map((notification, notiIdx) => {
            if (notiIdx === notificationIndex) {
              return { ...notification, read: true };
            }
            return notification;
          }),
        }
      }
      return section
    })
    setNotifications(updatedNotifications)
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

          <div className='block'>
            <ToggleButton
              onClick={handleToggleNotifications}
              isEnabled={notificationsEnabled}
            />
          </div>
        </div>

        <div className='flex justify-end block'>
          <MarkAsReadButton onClick={handleMarkAsRead} />
        </div>
        <div className='space-y-4'>
          {notifications.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h2 className='text-lg font-semibold mb-4 border-b border-gray-200 pb-2'>
                {section.title}
              </h2>
              <div className='space-y-4'>
                {section.notifications.map((notification, notificationIndex) => (
                  <NotificationCard
                    key={notificationIndex}
                    title={notification.title}
                    description={notification.description}
                    time={notification.time}
                    isHighlighted={!notification.read}
                    onDoubleClick={() =>
                      handleDoubleClick(sectionIndex, notificationIndex)
                    }
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NotificationPage
