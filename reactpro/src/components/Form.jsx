function froms() {

    function formSubmit(event) {
        // event.preventDefault();
        // alert("Submitted");
        const formElement = document.querySelector('#myForm');
         const formData = new FormData(formElement);
        const firstName = formData.get('fname');
        const lastName = formData.get('lname');
        document.getElementById('formDataDisplay').innerText = `First Name: ${firstName}, Last Name: ${lastName}`;
        
    }
    function formClear(event) {
        
        document.getElementById('myForm').reset();
        document.getElementById('formDataDisplay').innerText = '';
    }
  return <div>

        <h1 style={{color:'red' , fontFamily: "-moz-initial" , fontSize : "80px"}} id="formDataDisplay"></h1>
        <form id="myForm"  method="post">
          <label className="label" htmlFor="fname">First name:</label><br/>
          <input className="formControl" type="text" id="fname" name="fname" required/><br/>
          <label className="label"  htmlFor="lname">Last name:</label><br/>
          <input   className="formControl" type="text" id="lname" name="lname" required/><br/><br/>
            <input className="submitButton" onClick={formSubmit} type="button" value="Submit"/>
            <input  className="clearButton" onClick={ (e) => formClear(e) } type="button" value="Clear"/>
          </form>
          
  </div>;
}
export default froms;