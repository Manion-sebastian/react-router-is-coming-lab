
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <nav>
            <Link to={'/'}>HOME</Link>{" | "}
            <Link to={'/houses'}>HOUSES</Link>
            
        </nav>
    )
}