// import React from "react";
// import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import "./UserAuth.css";
// import axios from "axios";
// import { useNavigate } from 'react-router-dom';

// const UserAuth = () => {
// 	const [isSignup, setIsSignUp] = useState(true);
// 	const [email, setEmail] = useState("");
// 	const [password, setPassword] = useState("");
// 	const [name, setName] = useState("");

// 	const navigate = useNavigate();

// 	const handleSubmit = async (e) => {
// 		e.preventDefault()
// 		try {
// 			const res = await axios.post("http://localhost:5000/signUp", { email, name, password });
// 			if (res.status === 201) {
// 				localStorage.setItem('id', res.data.user._id)
// 				localStorage.setItem('name', res.data.user.name)
// 				navigate(`/User/${res.data.user._id}`);
// 			}
// 		}
// 		catch (err) {
// 			console.log(err)
// 			if (err.response.status === 401) {
// 				alert(err.response.data.error)
// 			}
// 			else {
// 				alert("Internal Server Error")
// 			}
// 		}
// 	};

// 	const loginValidate = async (e) => {
// 		e.preventDefault()
// 		try {
// 			const res = await axios.post("http://localhost:5000/logIn", { email, password })
// 			if (res.status === 201) {
// 				localStorage.setItem('id', res.data.user._id)
// 				localStorage.setItem('name', res.data.user.name)
// 				navigate('/')
// 			}
// 		} catch (err) {
// 			console.log(err)
// 			if (err.response.status === 401 || err.response.status === 402) {
// 				alert(err.response.data.error)
// 			}
// 			else {
// 				alert("Internal Server Error")
// 			}
// 		}
// 	}

// 	return (
	
// 		<div className="form-head">
// 			{isSignup ? (
// 				<>
// 					<center className="login-head">Login</center>
// 					<br />
// 					<p className="p">
// 						{" "}
// 						Don't have an account?{" "}
// 						<a
// 							className=".a"
// 							style={{ color: "blue", cursor: "pointer" }}
// 							onClick={() => setIsSignUp(false)}
// 						>
// 							Sign up
// 						</a>
// 					</p>
// 					<Form onSubmit={loginValidate}>
// 						<Form.Group controlId="formBasicEmail">
// 							<Form.Label>Email Id</Form.Label>
// 							<Form.Control
// 								value={email}
// 								onChange={(e) => setEmail(e.target.value)}
// 								type="email"
// 								placeholder="Enter email"
// 							/>
// 						</Form.Group>
// 						<br />

// 						<Form.Group controlId="formBasicPassword">
// 							<Form.Label>Password</Form.Label>
// 							<Form.Control
// 								value={password}
// 								onChange={(e) => setPassword(e.target.value)}
// 								type="password"
// 								placeholder="Password"
// 							/>
// 						</Form.Group>
// 						<br />
// 						<Form.Group controlId="formBasicCheckbox">
// 							<Form.Check
// 								type="checkbox"
// 								label="Remember me"
// 							/>
// 						</Form.Group>
// 						<br />
// 						<Button
// 							className="Button"
// 							type="submit"
// 						>
// 							Log In
// 						</Button>
// 						<br />
// 						<br />
// 					</Form>
// 				</>
// 			) : (
// 				<>
// 					<center className="login-head">Sign Up</center>
// 					<p className=".p">
// 						{" "}
// 						Already have an account?{" "}
// 						<a
// 							className=".a"
// 							style={{ color: "blue", cursor: "pointer" }}
// 							onClick={() => setIsSignUp(true)}
// 						>
// 							Log In
// 						</a>
// 					</p>
// 					<Form onSubmit={handleSubmit}>
// 						<Form.Group controlId="formBasicEmail">
// 							<Form.Label>Name</Form.Label>
// 							<Form.Control
// 								value={name}
// 								onChange={(e) => setName(e.target.value)}
// 								type="text"
// 								placeholder="Enter name"
// 								required
// 							/>
// 						</Form.Group>
// 						<br />
// 						<Form.Group controlId="formBasicEmail">
// 							<Form.Label>Email Id</Form.Label>
// 							<Form.Control
// 								value={email}
// 								onChange={(e) => setEmail(e.target.value)}
// 								type="email"
// 								placeholder="Enter email"
// 								required
// 							/>
// 						</Form.Group>
// 						<br />

// 						<Form.Group controlId="formBasicPassword">
// 							<Form.Label>Password</Form.Label>
// 							<Form.Control
// 								value={password}
// 								onChange={(e) => setPassword(e.target.value)}
// 								type="password"
// 								placeholder="Password"
// 								required
// 							/>
// 						</Form.Group>
// 						<br />
// 						<Form.Group controlId="formBasicCheckbox">
// 							<Form.Check
// 								type="checkbox"
// 								label="Remember me"
// 							/>
// 						</Form.Group>
// 						<br />
// 						<Button
// 							className="Button"
// 							type="submit"
// 						>
// 							Sign Up
// 						</Button>
// 					</Form>
// 				</>
// 			)}
// 		</div>
// 	);
// };

// export default UserAuth;




import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./UserAuth.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const UserAuth = () => {
    const [isSignup, setIsSignUp] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/signUp", { email, name, password });
            if (res && res.status === 201 && res.data && res.data.user && res.data.user._id) {
                localStorage.setItem('id', res.data.user._id);
                localStorage.setItem('name', res.data.user.name);
                navigate(`/User/${res.data.user._id}`);
            } else {
                console.error("Invalid response from server");
                alert("Failed to sign up. Please try again later.");
            }
        } catch (err) {
            console.error(err);
            if (err.response && err.response.status === 401) {
                alert(err.response.data.error);
            } else {
                alert("Internal Server Error");
            }
        }
    };

    const loginValidate = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/logIn", { email, password })
            if (res && res.status === 201 && res.data && res.data.user && res.data.user._id) {
                localStorage.setItem('id', res.data.user._id)
                localStorage.setItem('name', res.data.user.name)
                navigate('/')
            } else {
                console.error("Invalid response from server");
                alert("Failed to log in. Please try again later.");
            }
        } catch (err) {
            console.error(err);
            if (err.response && (err.response.status === 401 || err.response.status === 402)) {
                alert(err.response.data.error);
            } else {
                alert("Internal Server Error");
            }
        }
    }

    return (
        <div className="form-head">
            {isSignup ? (
                <>
                    <center className="login-head">Login</center>
                    <br />
                    <p className="p">
                        {" "}
                        Don't have an account?{" "}
                        <a
                            className=".a"
                            style={{ color: "blue", cursor: "pointer" }}
                            onClick={() => setIsSignUp(false)}
                        >
                            Sign up
                        </a>
                    </p>
                    <Form onSubmit={loginValidate}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email Id</Form.Label>
                            <Form.Control
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="Enter email"
                            />
                        </Form.Group>
                        <br />

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Group>
                        <br />
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check
                                type="checkbox"
                                label="Remember me"
                            />
                        </Form.Group>
                        <br />
                        <Button
                            className="Button"
                            type="submit"
                        >
                            Log In
                        </Button>
                        <br />
                        <br />
                    </Form>
                </>
            ) : (
                    <>
                        <center className="login-head">Sign Up</center>
                        <p className=".p">
                            {" "}
                            Already have an account?{" "}
                            <a
                                className=".a"
                                style={{ color: "blue", cursor: "pointer" }}
                                onClick={() => setIsSignUp(true)}
                            >
                                Log In
                            </a>
                        </p>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    placeholder="Enter name"
                                    required
                                />
                            </Form.Group>
                            <br />
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email Id</Form.Label>
                                <Form.Control
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    placeholder="Enter email"
                                    required
                                />
                            </Form.Group>
                            <br />

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    placeholder="Password"
                                    required
                                />
                            </Form.Group>
                            <br />
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check
                                    type="checkbox"
                                    label="Remember me"
                                />
                            </Form.Group>
                            <br />
                            <Button
                                className="Button"
                                type="submit"
                            >
                                Sign Up
                            </Button>
                        </Form>
                    </>
                )}
        </div>
    );
};

export default UserAuth;
