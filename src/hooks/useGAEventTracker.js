import ReactGA from 'react-ga4'

const useGAEventTracker = (event_category = 'General') => {
  const trackEvent = (name, event_action = 'click') => {
    if (process.env.NODE_ENV === 'development') return

    name = name.toLowerCase().replace(/[\s-]+/g, '_') // format the events names

    ReactGA.event(name, { event_category, event_action })
  }

  return trackEvent
}

export default useGAEventTracker
