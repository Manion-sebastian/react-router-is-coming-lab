import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function House(props) {
    let { houseId } = useParams()

    const house = props.house.find((house) => (
        house.id.toString() === houseId
    ))
    
    console.log(house)

    const allMembers = house.people.map((person, i) => {
        return (
            <li key={`personIdKey${i}`}>
                <p>{person.name}</p>
                <Link to={`/houses/${house.id}/members/${person.id}`}>Details</Link> 
            </li>
        )
    })
    return (
        <div className="page">
            <div className="header">
                <h2>{house.name}</h2>
            </div>
            <ul className="list">
                {allMembers}
            </ul>
        </div>
    )
}