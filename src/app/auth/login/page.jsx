"use client";

import ButtonUI from "@/components/common/ButtonUI";
import InputUI from "@/components/common/InputUI";
import Services from "@/services";
import { errorToast, successToast } from "@/utils/toaster";
import { Card } from "@nextui-org/react";
import { useEffect } from "react";

const Login = () => {
  
  const handleLogin = async (data) => {
    console.log('Button CLicked!!')
    try {
      const response = await Services.login();
      console.log('response113', response)
      // cookieUtils.setCookie("token", response.token);
      // setStorageItem("user", response);
      // setUser(response);
      // router.push("/");
      successToast("Login successfully!");
    } catch (error) {
      errorToast(error);
    }
  };

  // useEffect(() => {
  //   handleLogin()
  // }, [])
  
  return (
    <div className="auth_container py-10">
        <Card className="p-5 border" shadow="none">
          <h1 className="text-2xl font-semibold">Login</h1>
          <form className="space-y-5 mt-5">
            {/* <InputUI
              name="username"
              label="Username"
              placeholder="Enter username"
              // register={register}
              // errors={errors}
            /> */}
            {/* <InputUI
              name="password"
              label="Password"
              placeholder="Enter password"
              type="password"
              // register={register}
              // errors={errors}
            /> */}
            <ButtonUI type="submit" onClick={handleLogin} fullWidth>
              Login
            </ButtonUI>
          </form>
        </Card>
      </div>
  )
}

export default Login