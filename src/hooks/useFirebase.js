import { useEffect, useState } from 'react';
import initAppAuth from '../Pages/Login/Firebase/firebase.init';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
} from 'firebase/auth';

initAppAuth();

const useFirebase = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const registerUser = (email, password, name, history) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError('');
        const newUser = { email, displayName: name };
        // trigger useEffect
        setUser(newUser);
        // Save user to mongodb
        saveUser(email, name, 'POST');
        // update to firebase
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});

        history.replace('/');
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };

  const loginUser = (email, password, location, history) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || '/';
        history.replace(destination);
        setError('');
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };

  const signInWithGoogle = (location, history) => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        // save to mongodb
        saveUser(user.email, user.displayName, 'PUT');
        setError('');
        // redirects
        const destination = location?.state?.from || '/';
        history.replace(destination);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };

  // observe user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  const logout = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };

  // upsert user to db
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch('https://vast-citadel-43169.herokuapp.com/users', {
      method: method,
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert('successfully registered');
        }
      });
  };
  // console.log(user?.email);
  // check admin
  useEffect(() => {
    fetch(`https://vast-citadel-43169.herokuapp.com/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAdmin(data.admin);
      });
  }, [user]);

  // load products
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://vast-citadel-43169.herokuapp.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return {
    user,
    registerUser,
    loginUser,
    logout,
    loading,
    error,
    signInWithGoogle,
    products,
    setProducts,
    admin,
  };
};
export default useFirebase;
