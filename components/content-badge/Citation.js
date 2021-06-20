function Citation(props){
    const {citation}  =props
    console.log(citation)

    return(
      <div className={"font-extralight text-gray-500"}>

           {'\''+citation+'\''}

      </div>
    );
    
}
export default Citation;