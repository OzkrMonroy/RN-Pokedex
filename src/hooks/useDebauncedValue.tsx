import { useEffect, useState } from 'react'

export const useDebauncedValue = ( inputValue: string = '', time: number = 500 ) => {
  const [debauncedValue, setDebauncedValue] = useState(inputValue)

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setDebauncedValue(inputValue)
    }, time);

    return () => {
      clearTimeout(timeOut)
    }
  }, [inputValue])

  return debauncedValue
}
