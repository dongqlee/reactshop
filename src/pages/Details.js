import { useParams } from "react-router-dom"

export default function Details(props) {

  const {bests} = props
  const {id} = useParams()
  return(
    <div>
      <h2>Detail Page</h2>
      <img src={bests[id].image} alt='' style={{width: 280}} />
      <h4>{bests[id].title}</h4>
      <p>{bests[id].desc}</p>
      <p>{bests[id].price}원</p>
    </div>
  )
}