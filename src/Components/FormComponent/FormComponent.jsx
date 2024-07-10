import { useState } from 'react';

function FormComponent() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));

        validateField(name, value);
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        validateField(name, value);
    };

    const validateField = (name, value) => {
        let errorMessage = '';

        switch (name) {
            case 'firstName':
            case 'lastName':
                if (value.length < 2) {
                    errorMessage = 'Field must have at least 2 characters';
                }
                break;
            case 'email':
                if (value.length < 5) {
                    errorMessage = 'Field must have at least 5 characters';
                }
                break;
            case 'password':
                if (value.length < 8) {
                    errorMessage = 'Password must have at least 8 characters';
                }
                break;
            case 'confirmPassword':
                if (value !== formData.password) {
                    errorMessage = 'Passwords must match';
                }
                break;
            default:
                break;
        }

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: errorMessage,
        }));
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='formContainer'>
            <form>
                <div className='forms'>
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder='Search..'
                    />
                </div>
                {errors.firstName && <span className="error">{errors.firstName}</span>}
                <div className='forms'>
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder='Search..'
                    />
                </div>
                {errors.lastName && <span className="error">{errors.lastName}</span>}
                <div className='forms'>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder='Search..'
                    />
                </div>
                {errors.email && <span className="error">{errors.email}</span>}
                <div className='forms'>
                    <label htmlFor="password">Password:</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        value={formData.password || ''}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder='Search..'
                    />

                    <button type="button" onClick={togglePasswordVisibility}>
                        {showPassword ? 'Hide' : 'Show'}
                    </button>
                </div>
                {errors.password && <span className="error">{errors.password}</span>}
                <div className='forms'>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword || ''}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder='Search..'
                    />

                    <button type="button" onClick={togglePasswordVisibility}>
                        {showPassword ? 'Hide' : 'Show'}
                    </button>
                </div>
                {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
            </form>

            <div>
                <h2>Form Data:</h2>
                <p>First Name: {formData.firstName}</p>
                <p>Last Name: {formData.lastName}</p>
                <p>Email: {formData.email}</p>
                <p>Password: {formData.password ? (showPassword ? formData.password : 'password') : ''}</p>
                <p>Confirm Password: {formData.confirmPassword ? (showPassword ? formData.confirmPassword : 'password') : ''}</p>
            </div>
        </div>
    );
}

export default FormComponent;
