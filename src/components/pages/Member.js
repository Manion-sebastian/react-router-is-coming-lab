import { useParams } from "react-router-dom"

export default function Member(props) {
    let { houseId, memberId } = useParams()
    const currentHouse = props.house.find((house) => (
        house.id.toString() === houseId
    ))
    const person = currentHouse.people.find((person) => (
        person.id.toString() === memberId
    ))
    return (
        <div className="page">
            <div className="header">
                <h2>{person.name}</h2>
            </div>
            <div className="desc">
                {person.description}
            </div>
        </div>
    )
}