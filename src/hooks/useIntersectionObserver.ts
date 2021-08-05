import { useCallback, useEffect, useRef } from 'react'

interface useIntersectionObserverResult {
  observer: IntersectionObserver | null
  observeRef: (target: Element | null) => void
  elements: Element[]
}

function useIntersectionObserver (callback: IntersectionObserverCallback, options?: IntersectionObserverInit): useIntersectionObserverResult {
  const observer = useRef<IntersectionObserver | null>(null)
  const elements = useRef<Element[]>([])

  useEffect(() => {
    if (observer.current != null) {
      observer.current.disconnect()
    }

    console.log('init IntersectionObserver')

    observer.current = new IntersectionObserver(callback, options)

    elements.current.forEach((element) => observer.current?.observe(element))

    return () => observer.current?.disconnect()
  }, [options, elements])

  const observeRef = useCallback((element) => (element !== null) && elements.current.push(element), [])

  return { observeRef, observer: observer.current, elements: elements.current }
}

export default useIntersectionObserver
