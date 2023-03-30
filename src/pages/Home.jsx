import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
        <h1>Welcome to The Phone Cave</h1>
        <Link style={{fontSize: "2rem"}} to="/phones">Phone catalog</Link>
    </div>
  )
}

export default Home