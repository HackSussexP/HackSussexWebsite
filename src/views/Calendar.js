import React from 'react';

const Calendar = () => {

  const eventStyling = {
    border: '0',
    width: '100%',
    height: '100vh',
    frameborder: '0',
    scrolling: 'no'

  }
  return(
    <div className="container-fluid p-3">
      <h2 className="text-center display-5">Calendar</h2>
      <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FLondon&showTitle=0&showNav=1&showDate=1&src=Y180N2JjOTJkMzhmNTNjYjc3Mjk5NDUwZTI4ODBjNDI3NDBmZDNmMTQ2MmUzNWEwZmZiMzc4N2NlMmFhYWUxYjcwQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZW4udWsjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%233F51B5&color=%230B8043" style={eventStyling}></iframe>
    </div>
  )
}

export default Calendar;