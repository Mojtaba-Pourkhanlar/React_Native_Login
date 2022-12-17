import { StyleSheet, Text, View } from "react-native";
import { Formik } from "formik";
import CustomText from "../shared/CustomText";
import CustomInput from "../shared/CustomInput";
import { CustomButton } from "../shared";
import * as Yup from "yup";
import ToastManager, { Toast } from "toastify-react-native";
import { useEffect } from "react";
import { LoginUse } from "../services/users";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email required")
    .email("Email address is invalid"),
  password: Yup.string()
    .required("Password required")
    .min(6, "Password need to be 6 characters or more"),
});

export const LoginScreen = ({ navigation, route }) => {
  useEffect(() => {
    if (route.params.successRegister) {
      Toast.success("ثبت نام موفقیت آمیز بود");
    }
  }, []);

  const hangelUserLogin = async (user) => {
    try {
      const status = await LoginUse(user);
      if (status === 200) {
        Toast.success("ورود موفقیت آمیز بود");
      } else {
        Toast.error("ایمیل یا رمز عبور صحیح نمی باشد");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <ToastManager />
      <CustomText color="#DCC500" size={45} styles={styles.textLogin}>
        LOGIN
      </CustomText>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(user) => hangelUserLogin(user)}
        validationSchema={validationSchema}>
        {({ errors, touched, handleChange, handleSubmit }) => (
          <>
            <>
              <CustomInput
                placeholder="Email"
                autoComplete="email"
                onChange={handleChange("email")}
              />
              <CustomText
                visible={touched.email}
                error={errors.email}
              />
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
              <CustomText
                visible={touched.password}
                error={errors.password}
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
    position: "absolute",
    top: 100,
  },
});
