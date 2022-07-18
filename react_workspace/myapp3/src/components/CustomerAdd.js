import { useRef, useState } from "react";
import {post} from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const CustomerAdd  = () => {
    const fileRef = useRef(null);
    const usernameRef = useRef(null);
    const birthdayRef = useRef(null);
    const jobRef = useRef(null);

    const addCustomer = () => {
        console.log('addCustomer() ==> ');
        const url = '/api/customerUplaod/';
        const formData = new FormData();
        formData.append('filename', file.name);
        formData.append('file', file);
        formData.append('username', usernameRef.current.value);
        formData.append('birthday', birthdayRef.current.value);
        formData.append('job',jobRef.current.value);


        console.log(`forData confirm:  ${file.name} 
        ,${usernameRef.current.value}
        ,${birthdayRef.current.value}
        ,${jobRef.current.value}`);

        const config = {
            headers:{
                'content-type' : 'mutipart/form-data'
            }
        }

        return post(url, formData, config);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addCustomer();
        window.location.reload();
    }

    //react boot : Modal component
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //file save function 
    const [file, setFile] = useState(null);
    const saveFile = (e) => {
        return setFile(e.target.files[0]);
    }

    return(
        <>
            <Button variant="primary" onClick={handleShow}>
                고객정보 추가
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>사용자 정보 추가</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="file"
                        name = "file"
                        ref = {fileRef}
                        onChange = {saveFile}
                    />
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control
                        type="text"
                        name = "username"
                        ref = {usernameRef}
                    />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Birthday</Form.Label>
                    <Form.Control
                        type="date"
                        name = "birthday"
                        ref = {birthdayRef}
                    />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Job</Form.Label>
                    <Form.Select aria-label="Default select example" name = "job" ref = {jobRef}>
                        <option defaultValue="대학생">대학생</option>
                        <option value="개발자">개발자</option>
                        <option value="연구원">연구원</option>
                    </Form.Select>

                    </Form.Group>
                    <Modal.Footer>
               
                    <Button type = "submit" variant="primary" >
                        저장
                    </Button>
                    <Button type = "reset" variant="secondary" onClick={handleClose}>
                        취소
                    </Button>
                    </Modal.Footer>
                </Form>
                </Modal.Body>
                
            </Modal>
        </>
    )
}

export default CustomerAdd;