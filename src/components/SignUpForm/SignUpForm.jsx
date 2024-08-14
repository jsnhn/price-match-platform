import { useState } from 'react'
import { signUp } from '../../utilities/users-service'

export default function SignUpForm({ setUser }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password:'',
        confirm: '',
        error: '',
    })
    const disable = formData.password !== formData.confirm // disable is storing true or false. if the password doesnt match then disable is true


    function handleChange(evt) {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value,
            error: ''
        });
    }

    // handleSubmit = async (evt) => {
    //     evt.preventDefault()
    //     try {
    //         const formData = {...this.state}
    //         delete formData.confirm
    //         delete formData.error

    //         const user = await signUp(formData)// we are waiting for the code in user-service and users-api
    //         console.log(user)
    //     } catch {
    //         this.setState({
    //             error: 'Sign Up Failed - Try Again'
    //         })
    //     }
    // }

    const handleSubmit = async (evt) => {
        evt.preventDefault(); // won't refresh the page
        try {
            const userData = {...formData} // making a unique copy
            delete userData.confirm
            delete userData.error

            const user = await signUp(userData); // code will now stop because of await - the flow of execution will go to user services because up sighup(userdata)
            setUser(user);
        } catch {
            setFormData({
                ...formData,
                error: 'Sign Up Failed - Try Again'
            });
        }
    };

    return (
        <div>
            <div className="form-container">
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    <label>Password</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                    <label>Confirm</label>
                    <input type="password" name="confirm" value={formData.confirm} onChange={handleChange} required />
                    <button type="submit" disabled={disable}>SIGN UP</button>
                </form>
            </div>
            <p className="error-message">&nbsp;{formData.error}</p>
        </div>
    )
}