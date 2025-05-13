function MemberStat(props) {
    return (
        <div>
                <p>Member Status: {props.memberStatus ? "Thank you for being a premium member!" : "Upgrade to premium to enjoy exclusive features!"}</p>
        </div>
        
        );
    }



export default MemberStat;
