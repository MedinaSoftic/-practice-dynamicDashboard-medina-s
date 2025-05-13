import ProfileCard from "./ProfileCard"

function ProfileContainer(){
    return(
        <div>
            <ProfileCard name="Medina Softic" age="27" bio="A cool bean, likes to code for fun, dog mom. Very friendly, loves to learn new recipes from aroung the world."></ProfileCard>
            <ProfileCard name="Steve" age="undefined" bio= "Steve was originally born on Earth, and eventually became the first human to enter the Overworld, spending multiple years there amongst the villagers"></ProfileCard>
            <ProfileCard name="Alex" age="undefined" bio="Alex is the main female character in Minecraft while Steve is her male counterpart. She has not only been a part of Minecraft but has also made appearances in other games like Super Smash Bros."></ProfileCard>
            <ProfileCard name="Happy Ghast(TED)" age="20" bio="Happy ghasts can only be encountered by submerging a dried ghast in water and waiting for it to hydrate into a juvenile, known as a ghastling."></ProfileCard>
        </div>
    )
}
export default ProfileContainer;