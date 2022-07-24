import { useParams } from "react-router-dom"

export const Cliente = () => {
  
  const { id } = useParams();
  
  return(
    <div>
      <b>{id}</b>
    </div>
  )
}