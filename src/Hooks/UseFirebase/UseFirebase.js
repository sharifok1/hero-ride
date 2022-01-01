import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut ,signInWithEmailAndPassword , updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializationFirebase from "../../Authentication/Firebase/Firebase.init";


initializationFirebase()


const useFirebase =()=>{

    const [user, setUser]=useState({});
    const [isLoading, setIsLoading]=useState(true);
    const [firebaseError, setFirebaseError]=useState('')
    const [successMsg, setSuccessMsg]=useState('')
    // const [admin, setAdmin]=useState(false);
    const auth = getAuth();
    
    ///create  new account by email ---------------
    const createAccount =(email, password,name,photoURL,navigate,rider) =>{
      console.log(name, email,password,rider)
      
      setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setSuccessMsg('congratulations!! Account successfully created')
        setFirebaseError('');
        const newUser = {email, displayName:name};
        setUser(newUser);

        //save use to the database-------------------saveduser
        // savedUser(email, name, 'POST')
        //update profile
        updateProfile(auth.currentUser, {
          displayName: name, photoURL:photoURL
        }).then(() => {
          if(rider){
            navigate('/Profile')
            console.log('yes')
        }
        else{
            navigate('/Course')
        }
        }).catch((error) => {
        }); 
        // console.log(rider)
       
        
      })
      .catch((error) => {
        setFirebaseError(error.message);
      })
      .finally(()=> setIsLoading(false)
      )
    }
    
    //log in email password ------------------------ 
    const passwordLogin = (email, password, history,location )=>{
      setIsLoading(true)
       signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
       history.replace('/')
     })
        .catch((error) => {
          setFirebaseError(error.message);
        })
        .finally(()=> setIsLoading(false));
        
      }
   
//On auth state change-------------------------state change
      useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } 
        else {
            setUser({})
        }
        setIsLoading(false)
          });
          return unsubscribe;
      },[auth]);

    //signOut------------------------------loguot
    const logOut=()=>{
      const doit = window.confirm('Are you sure You want to loged out?');
      if(doit){
        const auth = getAuth();
         signOut(auth)
         .then(() => {
         }).catch((error) => {
          setFirebaseError(error.message);
        })
        .finally(()=> setIsLoading(false))
      }
        
    };
    // // saved user in database---------------------//
    // const savedUser=(email,displayName, method)=>{
    //   const user = {email, displayName};
    //   const url='https://blooming-basin-45530.herokuapp.com/users'
    //   fetch(url,{
    //     method:method,
    //     headers:{
    //         'content-type':'application/JSON'
    //      },
    //      body:JSON.stringify(user)
    //   })
    //   .then(res=>{

    //   })
    // }
    // //  admin --------------------------call admin
    //  useEffect(()=>{
    //    const url = `https://blooming-basin-45530.herokuapp.com/users/${user.email}`
    //    fetch(url)
    //    .then(res=>res.json())
    //    .then(data=>setAdmin(data.admin))
    //  },[user.email]);

    return{
        user,
        // admin,
        createAccount,
        passwordLogin,
        logOut,
        isLoading,
        firebaseError,
        successMsg,
        setFirebaseError,
        

    }

}
export default useFirebase;