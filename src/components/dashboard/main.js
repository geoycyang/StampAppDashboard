// import { getAuth, signOut } from "firebase/auth";
// import { useNavigate } from 'react-router-dom';
// import Button from '@mui/material/Button';
// import useUser from '../../hooks/UseUser';
// import {useState} from 'react';

// export default function Main() {
//     const navigate = useNavigate();
//     const {user, isLoading, setUser} = useUser();
//     const [error, setError] = useState();

//     const handleClick = async (e) => {
//         e.preventDefault();
//         try {
//             await signOut(getAuth());
//             navigate('/login');
//           } catch (error) {
//             setError(error.message);
//           }
//       };

//     return (
//         <>
//             <Button variant="outlined" onClick={handleClick}>Logout</Button>
//         </>
//     );
// }