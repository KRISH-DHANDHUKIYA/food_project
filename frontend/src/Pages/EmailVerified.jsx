// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// const EmailVerified = () => {
//     const { token } = useParams();
//     const [message, setMessage] = useState("Verifying...");

//     useEffect(() => {
//         const verifyEmail = async () => {
//             try {
//                 const res = await axios.get(`http://localhost:1000/api/verify/${token}`);
//                 toast.success("Email verified successfully!");
//                 setMessage("✅ Email verified. You can now log in.");
//             } catch (err) {
//                 setMessage("❌ Invalid or expired token.");
//                 toast.error(err.response?.data?.message || "Verification failed.");
//             }
//         };

//         verifyEmail();
//     }, [token]);

//     return (
//         <div className="text-center mt-5">
//             <h2>{message}</h2>
//             <a href="/" className="btn btn-success mt-3">Go to Home</a>
//         </div>
//     );
// };

// export default EmailVerified;



