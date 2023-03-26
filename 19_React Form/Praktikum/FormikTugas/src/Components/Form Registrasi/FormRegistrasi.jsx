import { useFormik } from "formik"
import './FormRegistrasi.css'
import * as yup from "yup"
import { Link } from 'react-router-dom';


const FormRegistrasi = () => {
    const handleSubmit = () =>{
        alert('Data Registrasi Berhasil Di Input!')
    }

    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            username: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
        onSubmit: handleSubmit,
        validationSchema: yup.object().shape({
            firstname: yup.string().required().min(3).max(12),
            lastname: yup.string().required().min(3).max(12),
            username: yup.string().required().min(3).max(20),
            email: yup.string().required().email(),
            password: yup
            .string()
            .required()
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                // "Kata sandi harus ada huruf besar, huruf kecil, angka, dan karakter spesial"
              ),
            confirmPassword: yup.string()
            .oneOf([yup.ref("password"), null], )
            .required(),
        }),

     })

    
    const handleForm = (e) => {
        const {target} = e
        formik.setFieldValue(target.name, target.value)
    }


    return(
        <form className="col-md-6 mx-auto " onSubmit={formik.handleSubmit} id="form">
        <div className="col-md-12">
            <label htmlFor="validationCustom01" className="form-label">
                Firstname
            </label>
            <input
                type="text"
                className="form-control"
                onChange={handleForm}
                name="firstname"
            />
            </div>

        
        <div className="col-md-12">
            <label htmlFor="validationCustom02" className="form-label">
                Lastname
            </label>
            <input
                type="text"
                className="form-control"
                onChange={handleForm}
                name="lastname"
            />
        </div>
     
        <div className="col-md-12">
            <label className="form-label">
                Username
            </label>
            <input
                type="text"
                className="form-control"
                onChange={handleForm}
                name="username"
            />
        </div>


        <div className="col-md-12">
            <label className="form-label">
                Email 
            </label>
            <input
                type="email"
                className="form-control"
                onChange={handleForm}
                name="email"
            />
        </div>


        <div className="col-md-12">
            <label  className="form-label">
                Password
            </label>
            <input
                type="password"
                className="form-control"
                onChange={handleForm}
                name="password"
            />
        </div>


        <div className="col-md-12">
            <label  className="form-label">
                Confirm Password
            </label>
            <input
                type="password"
                className="form-control"
                onChange={handleForm}
                name="confirmPassword"
            />
        </div>
        <br />
        <div > 
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
            <p>Already have an account? <Link to="/login">Login here</Link></p>

        </div>

      </form>
      

    )
}

export default FormRegistrasi