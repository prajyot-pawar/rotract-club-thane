import { useState, useContext } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../services/Firebase"; 
import { setDoc, doc , updateDoc } from "firebase/firestore";
import { AuthContext } from "../../utils/auth-context";
import { useLocation } from "react-router-dom";


interface ImageUploadProps {
     onImageUrlChange: (url: string) => void;
   }
   

   const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUrlChange }) => {
     
  const { currentUserId } = useContext(AuthContext);
    // State to store uploaded file
    const [file, setFile] = useState<File | null>(null);
    const [percent, setPercent] = useState<number>(0);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.files && event.target.files[0]) {
            setFile(event.target.files[0]); 
        }
    }

    const handleUpload = () => {
        if (!file) {
            alert("Please upload an image first!");
            return;
        }

        const storageRef = ref(storage, `/files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );

                // update progress
                setPercent(percent);
            },
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {    
                    console.log("URL is getting passed")   
                    onImageUrlChange(url);
                });
            }
        );
    };

    return (
        <div>
            <input type="file" onChange={handleChange} accept="image/*" />
            <button onClick={handleUpload}>Upload </button>
            <p>{percent} % done</p>
        </div>
    );
}

export default ImageUpload;
