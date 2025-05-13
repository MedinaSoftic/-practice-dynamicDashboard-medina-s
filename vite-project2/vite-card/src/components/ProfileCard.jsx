function ProfileCard(props) {
    return(
        <div className="card">
            <h1>Name: {props.name}</h1>
            <p>Age: {props.age}</p>
            <p>Bio: {props.bio}</p>
        </div>
    )
}
export default ProfileCard;