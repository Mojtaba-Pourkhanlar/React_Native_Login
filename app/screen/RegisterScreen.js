import { useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { Formik } from "formik";
import CustomInput from "../shared/CustomInput";
import CustomText from "../shared/CustomText";
import { CustomButton } from "../shared";
import * as Yup from "yup";
import ToastManager, { Toast } from "toastify-react-native";
import { registerUser } from "../services/users";

const validationSchema = Yup.object().shape({
  fullname: Yup.string().required("Username required"),
  email: Yup.string()
    .required("Email required")
    .email("Email address is invalid"),
  password: Yup.string()
    .required("Password required")
    .min(6, "Password need to be 6 characters or more"),
  passwordConfirmation: Yup.string()
    .required("Confirm the Password")
    .oneOf([Yup.ref("password"), null], "Password do not match"),
});

export const RegisterScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const handleUserRegister = async (user) => {
    try {
      setLoading(true);
      const status = await registerUser(user);
      if (status === 201) {
        setLoading(false);
        navigation.navigate("Login", { successRegister: true });
      } else {
        setLoading(false);
        Toast.warn("An error occurred, please try again");
        console.log("Server error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <ToastManager />

      <Formik
        initialValues={{
          fullname: "",
          email: "",
          password: "",
          passwordConfirmation: "",
        }}
        onSubmit={(user) => {
          handleUserRegister(user);
        }}
        validationSchema={validationSchema}>
        {({ errors, touched, handleChange, handleSubmit }) => (
          <>
            <>
              <CustomInput
                placeholder="Username"
                onChange={handleChange("fullname")}
                name="account-circle"
              />
              <CustomText visible={touched.fullname} error={errors.fullname} />
            </>

            <>
              <CustomInput
                placeholder="Email"
                autoComplete="email"
                onChange={handleChange("email")}
              />
              <CustomText visible={touched.email} error={errors.email} />
            </>

            <>
              <CustomInput
                placeholder="Password"
                autoComplete="password"
                keyboardType="numeric"
                name="onepassword"
                secureTextEntry
                onChange={handleChange("password")}
              />
              <CustomText visible={touched.password} error={errors.password} />
            </>

            <>
              <CustomInput
                placeholder="Password Confirmation"
                keyboardType="numeric"
                name="onepassword"
                secureTextEntry
                onChange={handleChange("passwordConfirmation")}
              />
              <CustomText
                visible={touched.passwordConfirmation}
                error={errors.passwordConfirmation}
              />
            </>

            <View style={{ width: "90%", alignItems: "center" }}>
              <CustomButton
                title="Submit"
                onPress={handleSubmit}
                color="#9C27B0"
              />
            </View>
          </>
        )}
      </Formik>
      {loading ? (
        <ActivityIndicator
          style={{ flex: 1 }}
          size="large"
          color="#08342E"
          animating={loading}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0D1024",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  textLogin: {
    // position: "absolute",
    // top: 80,
  },
});
