import Input from "./Input";
import {useForm} from "react-hook-form";
import { yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

const project = yup.object({
  username: yup.string().required(),
  phonenumber:yup.string().required().matches(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,"phone number is not valid"),
  email: yup.string().required().email("email is not valid"),
  password: yup.string().min(6),
  confirmPassword:yup.string().oneOf([yup.ref("password")],"Password must be matched")
})
function App(){
  const{
    handleSubmit,
    register,
    formState:{errors},
  }=useForm({
    resolver:yupResolver(project),});
  
    const formSubmit=(data) =>{
    };

  return (
    <div className="sign-up">
      <div>
      <h1>Sign Up</h1>
      </div>
      <form onSubmit={handleSubmit(formSubmit)}>
        
    <Input 
    id="username"
    label="Username"
    type="text"
    placeholder="Enter username"
    register={{...register("username")}}
    errorMessage={errors.username?.message}
    />
     <Input 
    id="phonenumber"
    label="Phonenumber"
    type="text"
    placeholder="Enter a phone number"
    register={{...register("phonenumber")}}
    errorMessage={errors.phonenumber?.message}
    />
     <Input 
    id="email"
    label="Email"
    type="text"
    placeholder="Enter valid email"
    register={{...register("email")}}
    errorMessage={errors.email?.message}
    />
     <Input 
    id="password"
    label="Password"
    type="text"
    placeholder="Enter password"
    register={{...register("password")}}
    errorMessage={errors.password?.message}
    />
     <Input 
    id="confirmPassword"
    label="Confrim password"
    type="text"
    placeholder="Confrim Password"
    register={{...register("confirmPassword")}}
    errorMessage={errors.confirmPassword?.message}
    />
    <button>Sign up</button>
      </form>
      
    </div>
  );
}

export default App;
