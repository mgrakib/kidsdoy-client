import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} | KidsDoy`
    },[title])
}
export default useTitle;