import { useState } from "react";
import './ContactUs.css' 

const ContactUs = () => {
      const [firstName, setfirstName] = useState('');
      const [lastName, setlastName] = useState('');
      const [email, setemail] = useState('');
      const [help, sethelp] = useState('');
     

      const onSubmit = () => {
        alert(` Nama: ${firstName}\n Lastname: ${lastName}\n Email: ${email}\n help question: ${help}`);
       
        
    }

    const handleSubmit = event => {
      event.preventDefault();
      
    };




    return(
    <form onChange={handleSubmit} className="form">
        <div className="container content">
          <div className="row">
              <div className="col-6 mt-5">
                <h1 className="mt-5">Contact Us</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt quis,
                  explicabo quam numquam molestias esse assumenda a
                </p>
                <p>
                  ccusamus eius eum totam modi quidem iure facilis reiciendis nobis
                  perferendis, veritatis iste libero
                </p>
              </div>
              <div className="col-6 mt-5">
                  <div className="row mt-5">
                      <div className="col">
                          <label htmlFor="exampleInputName" className="form-label">
                            First Name*
                          </label>
                        <input
                          type="text"
                          className="form-control"
                          style={{ height: 75, width: "100%" }}
                          aria-label="First name"
                          value={firstName}
                          onChange={(e) => setfirstName(e.target.value)}
                        />
                      </div>
                    <div className="col">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          style={{ height: 75, width: "100%" }}
                          aria-label="Last name"
                          value={lastName}
                          onChange={(e) => setlastName(e.target.value)}
                        />
                    </div>
                  </div>
                <div className="row mt-2 mt-3">
                    <div className="col">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                          Email*
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          style={{ height: 75 }}
                          aria-label="Last name"
                          value={email}
                          onChange={(e) => setemail(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row mt-2 mt-3">
                  <div className="col">
                      <label htmlFor="exampleInputText" className="form-label">
                          What can we help you with?
                      </label>
                      <textarea
                          className="form-control"
                          id="floatingTextarea2"
                          style={{ width: "100%" }}
                          defaultValue={""}
                          value={help}
                          onChange={(e) => sethelp(e.target.value)}
                      />
                  </div>
                </div>
                <div className="row mt-2 mt-3">
                  <div className="col">
                      <button
                          type="button"
                          className="btn btn-success btn-sm"
                          style={{ width: "30%" }}
                          onclick="alert()"
                          onClick={onSubmit}
                          >Submit</button>
                  </div>
                </div>
              </div>
          </div>
        </div>
      
        </form>


    )
}

export default ContactUs