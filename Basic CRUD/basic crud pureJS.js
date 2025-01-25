 const handleInput=(e)=>{
    console.log("change occurs here")
    console.log(e.target.name)
    console.log(e.target.value)
    e.target.value= "something"
 }