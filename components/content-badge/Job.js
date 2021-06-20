function Job (props){
   const  {departement,travail,color} = props;

   return (<div className ="flex flex-col">
      <div>
          <p className={"text-xl text-"+color+"-500" }>{departement}</p>
      </div>
      <div>
        <p>{travail}</p>
      </div>
   </div>)
}
export default Job;