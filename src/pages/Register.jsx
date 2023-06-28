import React from 'react';
import img from '../Images/add-image.png'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from "../utils/firebase"
import { db } from "../utils/firebase"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [err, setErr] = React.useState(false)
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault(); // It will let the page to not refresh
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)
            const storageRef = ref(storage, displayName);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on(
                (error) => {
                    setErr(true);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateProfile(res.user, {
                            displayName,
                            photoURL: downloadURL
                        })
                        await setDoc(doc(db, "users", res.user.uid), {
                            uid: res.user.uid,
                            displayName,
                            email,
                            photoURL: downloadURL
                        });
                        await setDoc(doc(db, "userChat", res.user.uid),{});
                        navigate("/community")
                    });
                        
                })
        } catch (err) {
            console.log(err)
            setErr(true)
        }
    }

    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Smart Farming</span>
                <span className="title">Register</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="display name" />
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <input type="file" id="file" style={{ display: "none" }} />
                    <label htmlFor='file'>
                        <img src={img} />
                        <span>Add your profile image</span>
                    </label>
                    <button>Sign Up</button>
                    {err && <span>Something went wrong!</span>}
                </form>
                <p>Do you already have an account? <Link to ="/community/login">Login</Link></p>
            </div>
        </div>
    )
}
export default Register;