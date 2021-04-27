import { useEffect } from 'react'

const useGetDocumentTitlePrice = () => {
  useEffect(() => {
    document.title = `DoubleMoon`
  })
}
export default useGetDocumentTitlePrice
