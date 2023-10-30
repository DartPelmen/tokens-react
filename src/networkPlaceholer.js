import img from './avatar-homme.png'

const networkPlaceholder = ()=>{
    const elements = [];
    for(let i = 0; i < 10; i++){
        elements.push({image: img, user:"Jhon Smith", message:"Lorem Ipsum"})}
    return elements
}
export default networkPlaceholder;