import { Link } from 'react-router-dom'

export default function Houses(props) {

    const allHouses = props.house.map((house, i) => {
        return (

                <div key={`divHouseKey${i}`}>
                    <h1>{house.name}</h1>
                    <Link key={`ListKey${i}`} to={`/houses/${house.id}`}>Details</Link>
                </div>            
        
        )
    })

    return (
        <div>
            <div className="header">
                <h2>Game of Thrones Houses</h2>
            </div>
            <ul className="list">
                A list of houses
                {allHouses}
            </ul>
        </div>
    )
}