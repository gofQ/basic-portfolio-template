import { useEffect, useRef } from 'react'

const useScrollTop = ({navigate}) => {
    const headerRef=useRef(null)

    useEffect(() => {
        headerRef.current.scrollIntoView({behavior:'smooth'})
    }, [navigate]);

    return headerRef

}

export default useScrollTop