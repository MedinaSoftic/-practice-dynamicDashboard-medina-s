function Dates(){
    const currentDate = new Date().toLocaleDateString("en-US")    
    return(
        <div>
            <h1>{currentDate}</h1>
        </div>
    )
        }


export default Dates;