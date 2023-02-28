import { Grid, Typography, Button, InputBase } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import { Alert } from "@material-ui/lab";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import {
  CallOutlined,
  LocationOn,
  MailOutline,
  PhoneCallbackOutlined,
} from "@material-ui/icons";
import emailjs from '@emailjs/browser';
const { PublicKey, ServiceKey, TemplateKey } = require('../../configg.json');

const Contact = () => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
  // useSelector((state) => state.screenSize.value);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
         emailjs.sendForm(ServiceKey, TemplateKey, {
            name: name,
            email: email,
            message: message}, PublicKey)
           .then((result) => {
               console.log(result.text);
               e.target.reset()
           }, (error) => {
               console.log(error.text);
           });
       };

  return (
    <>
      <div id="contact"
        style={{
          minHeight: "77vh",
          width: "100%",
          marginBottom: isDesktopOrLaptop ? "35px" : "30px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Grid
            item
            xs={isDesktopOrLaptop ? 8 : 12}
            style={{
              backgroundColor: "white",
              height: "100%",
              padding: isDesktopOrLaptop ? "40px 0px" : "25px 17px 0px 12px",
            }}
          >
            <>
              <Grid container>
                <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                <Typography
                  style={{
                      color: "#16063b",
                      fontFamily: "-apple-system, BlinkMacSystemFont",
                      fontSize: "32px",
                      fontWeight: "bold",
                    }}
                    >
                  Contact Us
                </Typography>
                    </div>
              </Grid>
              <Grid container>
              <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                <Typography
                  style={{
                    color: "#808080",
                    fontFamily: "-apple-system, BlinkMacSystemFont",
                    fontSize: "16px",
                    lineHeight: 1.5,
                  }}
                >
                  Have any questions? We'd love to hear from you.
                </Typography>
                </div>
              </Grid>
              <Grid
                style={{
                  borderRadius: "15px",
                  boxShadow: "0 0 11px 0 #00000027",
                  backgroundColor: "#fff",
                  padding: "20px 20px 28px 20px",
                  marginTop: isDesktopOrLaptop ? "40px" : "30px",
                  display: isDesktopOrLaptop ? "flex" : "",
                  alignItems: "center",
                }}
              >
                <Grid xs={isDesktopOrLaptop ? 8 : 12}>
                  <Grid container>
                    <Grid
                      item
                      xs={isDesktopOrLaptop ? 6 : 12}
                      style={{
                        paddingRight: isDesktopOrLaptop ? "10px" : "0px",
                      }}
                    >
                      <Typography
                        style={{
                          color: "#808080",
                          fontFamily: "-apple-system, BlinkMacSystemFont",
                          fontSize: isDesktopOrLaptop ? "16px" : "14px",
                          paddingBottom: "10px",
                        }}
                      >
                        Name*
                      </Typography>
                      <div
                        style={{
                          border:
                            alertOpen && name === ""
                              ? "solid 1.5px #e50303"
                              : "solid 1.5px #808080",
                          borderRadius: "5px",
                          height: isDesktopOrLaptop ? "55px" : "37px",
                          display: "flex",
                          alignItems: "center",
                          paddingLeft: "10px",
                          paddingRight: "10px",
                        }}
                      >
                        <InputBase
                          value={name}
                          placeholder="Name"
                          fullWidth
                          required
                          margin="normal"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                          style={{}}
                        />
                      </div>
                      {alertOpen && name === "" ? (
                        <Typography
                          style={{
                            color: "#e50303",
                            fontSize: "12px",
                            fontWeight: "-apple-system, BlinkMacSystemFont",
                          }}
                        >
                          *This field cannot be empty.
                        </Typography>
                      ) : null}
                    </Grid>
                    <Grid
                      item
                      xs={isDesktopOrLaptop ? 6 : 12}
                      style={{
                        paddingLeft: isDesktopOrLaptop ? "10px" : "0px",
                        paddingTop: isDesktopOrLaptop ? "0" : "20px",
                      }}
                    >
                      <Typography
                        style={{
                          color: "#808080",
                          fontFamily: "-apple-system, BlinkMacSystemFont",
                          fontSize: isDesktopOrLaptop ? "16px" : "14px",
                          paddingBottom: "10px",
                        }}
                      >
                        Email*
                      </Typography>
                      <div
                        style={{
                          border:
                            alertOpen && email === ""
                              ? "solid 1.5px #e50303"
                              : "solid 1.5px #808080",
                          borderRadius: "5px",
                          height: isDesktopOrLaptop ? "55px" : "37px",
                          display: "flex",
                          alignItems: "center",
                          paddingLeft: "10px",
                          paddingRight: "10px",
                        }}
                      >
                        <InputBase
                          label="Email"
                          value={email}
                          placeholder="Email"
                          fullWidth
                          margin="normal"
                          required
                          InputLabelProps={{
                            shrink: true,
                          }}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                      </div>
                      {alertOpen && email === "" ? (
                        <Typography
                          style={{
                            color: "#e50303",
                            fontSize: "12px",
                            fontWeight: "Overpass",
                          }}
                        >
                          *This field cannot be empty.
                        </Typography>
                      ) : null}
                    </Grid>
                  </Grid>

                  <Typography
                    style={{
                      color: "#808080",
                      fontFamily: "Overpass",
                      fontSize: isDesktopOrLaptop ? "16px" : "14px",
                      paddingBottom: "10px",
                      paddingTop: "20px",
                    }}
                  >
                    *Message
                  </Typography>
                  <div
                    style={{
                      border:
                        alertOpen && message === ""
                          ? "solid 1.5px #e50303"
                          : "solid 1.5px #808080",
                      borderRadius: "5px",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      height: isDesktopOrLaptop ? "220px" : "159px",
                    }}
                  >
                    <InputBase
                      label="Message"
                      multiline
                      value={message}
                      placeholder={"Your message"}
                      fullWidth
                      margin="normal"
                      required
                      InputLabelProps={{
                        shrink: true,
                      }}
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                    />
                  </div>
                  {alertOpen && message === "" ? (
                    <Typography
                      style={{
                        color: "#e50303",
                        fontSize: "12px",
                        fontWeight: "Overpass",
                      }}
                    >
                      *This field cannot be empty.
                    </Typography>
                  ) : null}
                  <Grid
                    item
                    xs={12}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      paddingTop: "25px",
                    }}
                  >
                    <Button
                      variant="contained"
                      style={{
                        borderRadius: "22.5px",
                        backgroundColor: "#0040ff",
                        color: "#f8f8f8",
                        fontSize: "16px",
                        fontFamily: "-apple-system, BlinkMacSystemFont",
                        textTransform: "capitalize",
                        display: "flex",
                        alignItems: "center",
                      }}
                    //   onClick={async () => {
                    //     if (
                    //       name === "" ||
                    //       email === "" ||
                    //       message === ""
                    //     ) {
                    //       setAlertOpen(true);
                    //     } else {
                    //       setAlertOpen(false);
                    //       console.log(
                    //         name,
                    //         email,
                    //         message
                    //       );
                    //     }
                    //   }}
                    onClick={sendEmail}
                    >
                      Submit
                      <MailOutlineIcon style={{ paddingLeft: "8px" }} />
                    </Button>
                  </Grid>
                </Grid>
                <Grid xs={isDesktopOrLaptop ? 1 : 12} />
                <Grid
                  xs={isDesktopOrLaptop ? 3 : 12}
                  style={{ marginTop: isDesktopOrLaptop ? 0 : "15px" }}
                >
                  <Grid xs={12}>
                    <Typography
                      style={{
                        color: "#808080",
                        fontFamily: "-apple-system, BlinkMacSystemFont",
                        fontSize: isDesktopOrLaptop ? "16px" : "14px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <CallOutlined style={{ paddingRight: "10px" }} />
                      0333 090 2471
                    </Typography>
                  </Grid>
                  <Grid xs={12} style={{ paddingTop: "10px" }}>
                    <Typography
                      style={{
                        color: "#808080",
                        fontFamily: "-apple-system, BlinkMacSystemFont",
                        fontSize: isDesktopOrLaptop ? "16px" : "14px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <MailOutline style={{ paddingRight: "10px" }} />
                      info@microtechsciences.com
                    </Typography>
                  </Grid>
                  <Grid xs={12} style={{ paddingTop: "10px" }}>
                    <Typography
                      style={{
                        color: "#808080",
                        fontFamily: "-apple-system, BlinkMacSystemFont",
                        fontSize: isDesktopOrLaptop ? "16px" : "14px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <LocationOn style={{ paddingRight: "10px" }} />
                      Unit 3 Barnfield Way, Lancashire, BB5 5WJ
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </>
          </Grid>
        </div>
      </div>
    </>
  );
};
export default Contact;
