import "bootstrap/dist/css/bootstrap.min.css";

import { Button, Form, Modal, } from "react-bootstrap";
import React, { useState, useRef } from "react";
// import Button from 'react-bootstrap/Button';

function MyVerticallyCenteredModal(props) {
    const [form, setForm] = useState({});
    const formRef = useRef(null);

    const [errors, setErrors] = useState({});

    const handleReset = () => {
        formRef.current.reset();
        props.getuserData()
        props.onHide()
        // setValidated(false);
    };
    // const handleLogout = () => {
    //     setUser({});
    //     setUsername("");
    //     setemaail("");
    //     localStorage.clear();
    // };

    const handleSubmit = (e) => {
        // e.preventDefault();
        // get our new errors
        const newErrors = findFormErrors();
        // Conditional logic:
        if (Object.keys(newErrors).length > 0) {
            // We got errors!
            setErrors(newErrors);
        } else {
            // No errors! Put any logic here for the form submission!
            // putt user data in local storage.
            // const { name, email, phone } = form
            // const myJSON = JSON.stringify([form]);
            //  check existing items from local storage .
            const userData = JSON.parse(localStorage.getItem("user"));
            if (userData && userData.length > 0) {
                // userData.find
                let obj = userData.find(o => o.email === form.email);
                if (obj) {
                    alert("This email is already exists!");
                    return 0

                }
                userData.push(form);
            }
            localStorage.setItem("user", JSON.stringify(userData || [form]));
            handleReset();

            /* 
                        if (localStorage.getItem('email') === "") {
                            // alert('email already exists');
                        } else {
                            alert('enter your email ');
                        } */

            // if ("email" in localStorage) {
            //     alert('email already exists');
            // } else {
            //     // alert('enter your email');
            // }


            //  close modal
            // alert("Thank you for your feedback!");
        }
    };

    const findFormErrors = () => {
        const { name, email, phone } = form;
        const newErrors = {};
        // name errors
        if (!name || name === "") newErrors.name = "cannot be blank!";
        else if (name.length > 30) newErrors.name = "name is too long!";
        // food errors
        if (!email || email === "") newErrors.food = "please enter email!";
        // email: buildFormField(
        //     {
        //         name: "email",
        //         label: "Email",
        //         validation: ["required", "email"]
        //     },
        //     this.mainFormChangeHandler
        // )
        // rating errors
        if (!phone || phone > 1000000000000 || phone < 1000000000)
            newErrors.phone = "must enter correct phone number ";
        // comment errors
        // if (!comment || comment === '') newErrors.comment = 'cannot be blank!'
        // else if (comment.length > 100) newErrors.comment = 'comment is too long!'

        return newErrors;
    };

    const setField = (field, value) => {
        // debugger;
        setForm({
            ...form,
            [field]: value,
        });
    };

    console.log("form", form)

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <h4>User add Modal</h4>
                <Form onSubmit={handleSubmit} ref={formRef}>
                    <Form.Group className="mb-3" controlId="formBasicname">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter name"
                            onChange={(e) => setField("name", e.target.value)}
                            isInvalid={!!errors.name}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.name}
                        </Form.Control.Feedback>
                        <Form.Text className="text-muted">
                            We'll never share your info with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        {/* <nputUserEmail: inputUserEmail }, function (err, user) /> */}
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            onChange={(e) => setField("email", e.target.value)}
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPhone">
                        <Form.Label> Phone</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Phone"
                            onChange={(e) => setField("phone", e.target.value)}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function App(props) {
    const [modalShow, setModalShow] = React.useState(false);
    const userList = JSON.parse(localStorage.getItem("user")) || [];

    const [userData, setUserData] = React.useState(userList);
    // console.log("dddddddddddddd", userData)

    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Add New user
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                getuserData={() => props.getuserData()}
                onHide={() => {

                    setModalShow(false)
                }}


            />
        </>
    );
    // var db = req.db;
    // db.users.findOne({ inputUserEmail: inputUserEmail }, function (err, user) {
    //     if (user) {
    //         console.log("user exists")
    //     } else { console.log("user doesn't exist") };
    //     db.collection('userlist').insert(req.body, function (err, result) {
    //         res.send(
    //             (err === null) ? { msg: '' } : { msg: err }
    //         );
    //     });


}

export default App;
