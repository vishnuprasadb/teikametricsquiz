export default (timeInSeconds:number) => {
    let dateObj = new Date(timeInSeconds * 1000);
    let hours = dateObj.getUTCHours(); 
    let minutes = dateObj.getUTCMinutes(); 
    let seconds = dateObj.getSeconds(); 

    let readableTimeString:string = ""
    if (hours){
        readableTimeString += hours.toString().padStart(2, '0') + "hr "
    }
    if (minutes){
        readableTimeString += minutes.toString().padStart(2, '0') + "min "
    }
    if (seconds){
        readableTimeString += seconds.toString().padStart(2, '0') + "seconds "
    }
    return readableTimeString
}