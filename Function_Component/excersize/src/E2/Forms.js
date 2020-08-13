import React, {useEffect} from 'react'
import { useDataLayerValue } from './DataLayer';
import { useForm } from "react-hook-form";

function Forms() {
    const [{username, password}, dispatch] = useDataLayerValue();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
      dispatch({
        type: "SET_USERNAME_AND_PASSWORD",
        username: data.username,
        password: data.password
      });
      // dispatch({
      //   type: "SET_PASSWORD",
      // });
    }
    var user = <h1>___.{username}.___</h1>;
    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" id="username" name="username" ref={register({ required: true, maxLength: 30 })} />
          <input type="password" id="password" name="password" ref={register({ required: true, maxLength: 12 })} />
          {errors.name && errors.name.type === "required" && <span>REQUIRED</span>}
          {errors.name && errors.name.type === "maxLength" && <span>MAX LENGTH EXCEEDED</span> }
          <input type="submit" />
        </form>
        {user}
      </div>
      );
}
export default Forms;
