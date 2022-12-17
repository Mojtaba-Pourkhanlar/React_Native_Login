import { StyleSheet, Text, View } from "react-native";
import { Formik } from "formik";
import CustomText from "../shared/CustomText";
import CustomInput from "../shared/CustomInput";
import { CustomButton } from "../shared";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email required")
    .email("Email address is invalid"),
  password: Yup.string()
    .required("Password required")
    .min(6, "Password need to be 6 characters or more"),
});

export const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <CustomText color="#DCC500" size={45} styles={styles.textLogin}>
        LOGIN
      </CustomText>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}>
        {({ errors, touched, handleChange, handleSubmit }) => (
          <>
            <>
              <CustomInput
                placeholder="Email"
                autoComplete="email"
                onChange={handleChange("email")}
              />
              {touched.email ? (
                <CustomText
                  color="#F32314"
                  size={20}
                  styles={{ marginBottom: 15, left: 0 }}>
                  {errors.email}
                </CustomText>
              ) : (
                <View style={{ marginBottom: 10 }} />
              )}
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
              {touched.password ? (
                <CustomText
                  color="#F32314"
                  size={20}
                  styles={{ marginBottom: 15, left: 0 }}>
                  {errors.password}
                </CustomText>
              ) : (
                <View style={{ marginBottom: 10 }} />
              )}
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
