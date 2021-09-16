import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AttachMoneyOutlinedIcon from "@material-ui/icons/AttachMoneyOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import TimerOutlinedIcon from "@material-ui/icons/TimerOutlined";
import PauseOutlinedIcon from "@material-ui/icons/PauseOutlined";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import MailIcon from "@material-ui/icons/Mail";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import ClearIcon from "@material-ui/icons/Clear";
import TelegramIcon from "@material-ui/icons/Telegram";
import ReceiptOutlinedIcon from "@material-ui/icons/ReceiptOutlined";
import QueryBuilderOutlinedIcon from "@material-ui/icons/QueryBuilderOutlined";
import AddToPhotosOutlinedIcon from "@material-ui/icons/AddToPhotosOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import ErrorOutlineRoundedIcon from "@material-ui/icons/ErrorOutlineRounded";
import Badge from "@material-ui/core/Badge";
import Divider from "@material-ui/core/Divider";
import Chart from "./Chart";

const useStyles = makeStyles({
  cont: {
    justifyContent: "center",
  },
  main: {
    height: 1100,
    width: 1200,
    backgroundColor: "#deeff0",
    marginTop: "20px",
    borderRadius: "20px",
  },
  topbar: {
    display: "flex",
  },
  contentbar: {
    display: "flex",
    height: 950,
    marginTop: "-85px",
  },
  rightside: {
    height: 1013,
    marginTop: "-1px",
  },
  timeline: {},
});

export default function Sidebar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid container className={classes.cont}>
      <Grid container className={classes.main}>
        <Grid container>
          <Grid item xs={12}>
            <Paper
              className={classes.topbar}
              style={{ backgroundColor: "#6e768f" }}
            >
              <div className={classes.topbar} style={{ padding: "7px" }}>
                <Typography
                  style={{
                    padding: "5px",
                    marginLeft: "10px",
                    color: "#ccd1d1",
                    fontWeight: "800",
                    fontSize: "18px",
                    marginTop: "7px",
                  }}
                >
                  tackkle
                </Typography>
                <Typography
                  style={{
                    color: "white",
                    padding: "10px",
                    fontSize: "13px",
                    marginLeft: "5px",
                    marginTop: "7px",
                    fontWeight: "500",
                  }}
                >
                  Dashboard
                </Typography>
                <Typography
                  style={{
                    padding: "10px",
                    marginLeft: "5px",
                    color: "#ccd1d1",
                    fontSize: "13px",
                    marginTop: "7px",
                    fontWeight: "500",
                  }}
                >
                  Projects
                </Typography>
                <Typography
                  style={{
                    padding: "10px",
                    marginLeft: "5px",
                    color: "#ccd1d1",
                    fontSize: "13px",
                    marginTop: "7px",
                    fontWeight: "500",
                  }}
                >
                  Clients
                </Typography>
                <Typography
                  style={{
                    padding: "10px",
                    marginLeft: "5px",
                    color: "#ccd1d1",
                    fontSize: "13px",
                    marginTop: "7px",
                    fontWeight: "500",
                  }}
                >
                  Invoices
                </Typography>
              </div>

              <AttachMoneyOutlinedIcon
                style={{
                  backgroundColor: "#9996bc",
                  borderRadius: "5px",
                  color: "whitesmoke",
                  padding: "3px",
                  marginTop: "18px",
                  marginLeft: "350px",
                }}
              ></AttachMoneyOutlinedIcon>

              <TimerOutlinedIcon
                style={{
                  color: "whitesmoke",
                  padding: "7px",
                  backgroundColor: "#f80659e0",
                  fontSize: "medium",
                  marginTop: "17px",
                  marginLeft: "5px",
                }}
              ></TimerOutlinedIcon>
              <Typography
                style={{
                  color: "#d5cfcf",
                  padding: "5px",
                  backgroundColor: "#f80659e0",
                  marginTop: "17px",
                  marginBottom: "18px",
                  fontSize: "12px",
                }}
              >
                Timer:
              </Typography>
              <Typography
                style={{
                  color: "white",
                  padding: "3px",
                  backgroundColor: "#f80659e0",
                  marginTop: "17px",
                  marginBottom: "18px",
                  fontWeight: "500",
                }}
              >
                2:10
              </Typography>
              <PauseOutlinedIcon
                style={{
                  color: "#d5cfcf",
                  padding: "7px",
                  backgroundColor: "#e10d56e0",
                  marginTop: "17px",
                  fontSize: "medium",
                }}
              ></PauseOutlinedIcon>

              <Badge
                badgeContent={4}
                color="primary"
                style={{ marginTop: "18px" }}
              >
                <NotificationsOutlinedIcon
                  style={{
                    backgroundColor: "#9996bc",
                    borderRadius: "5px",
                    color: "white",
                    fontSize: "17px",
                    padding: "6px",
                    marginTop: "-1px",
                    marginLeft: "5px",
                  }}
                ></NotificationsOutlinedIcon>
              </Badge>
              <Grid
                className={classes.topbar}
                style={{
                  backgroundColor: "#576383",
                  marginLeft: "40px",
                  padding: "5px",
                }}
              >
                <Avatar
                  src="https://www.pikpng.com/pngl/m/4-46401_business-man-png-free-image-download-businessman-png.png"
                  style={{
                    height: "30px",
                    width: "30px",
                    marginTop: "12px",
                    marginLeft: "15px",
                  }}
                ></Avatar>
                <Typography
                  style={{
                    color: "#e8e3e3",
                    fontSize: "13px",
                    marginLeft: "12px",
                    marginTop: "16px",
                  }}
                >
                  Hello, Chris
                </Typography>
                <ExpandMoreOutlinedIcon
                  style={{
                    color: "#d5cfcf",
                    marginLeft: "40px",
                    marginTop: "16px",
                    fontSize: "17px",
                    marginRight: "8px",
                  }}
                ></ExpandMoreOutlinedIcon>
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12} className={classes.contentbar}>
            <Grid item xs={10}>
              <Grid
                item
                xs={12}
                style={{
                  padding: "20px",
                  marginLeft: "25px",
                  marginRight: "25px",
                }}
              >
                <Grid style={{ display: "flex" }}>
                  <Typography
                    variant="h4"
                    style={{ fontWeight: "lighter", color: "#62688b" }}
                  >
                    Dashboard
                  </Typography>
                  <Box
                    style={{
                      backgroundColor: "white",
                      marginLeft: "400px",
                      padding: "8px",
                      borderRadius: "5px",
                      width: "350px",
                    }}
                  >
                    <Box style={{ backgroundColor: "", display: "flex" }}>
                      <div
                        style={{ backgroundColor: "#eae5e5", display: "flex" }}
                      >
                        <Typography
                          style={{
                            color: "#686363",
                            fontSize: "13px",
                            padding: "3px",
                          }}
                        >
                          filipjustic91@gmail.com
                        </Typography>

                        <ClearIcon
                          style={{
                            fontSize: "15px",
                            padding: "5px",
                            marginLeft: "5px",
                            color: "#686363",
                          }}
                        ></ClearIcon>
                      </div>
                      <Typography
                        style={{
                          backgroundColor: "white",
                          color: "#686363",
                          fontSize: "12px",
                          padding: "3px",
                          marginLeft: "5px",
                        }}
                      >
                        matej.jus|
                      </Typography>
                      <TelegramIcon
                        style={{
                          color: "#00adff",
                          backgroundColor: "white",
                          marginLeft: "55px",
                        }}
                      ></TelegramIcon>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                style={{
                  backgroundColor: "white",
                  marginLeft: "45px",
                  marginRight: "40px",
                  display: "flex",
                }}
              >
                <Box style={{ padding: "20px", marginTop: "5px" }}>
                  <Grid style={{ display: "flex" }}>
                    <ReceiptOutlinedIcon
                      style={{
                        padding: "5px",
                        marginTop: "10px",
                        color: "#00000042",
                        marginLeft: "5px",
                      }}
                    ></ReceiptOutlinedIcon>
                    <Typography
                      style={{
                        padding: "4px",
                        fontWeight: "bolder",
                        fontSize: "30px",
                        color: "#7b7f93",
                      }}
                    >
                      5
                    </Typography>
                  </Grid>
                  <Typography
                    style={{
                      fontSize: "13px",
                      color: "#7b7f93",
                      marginLeft: "10px",
                    }}
                  >
                    OPEN INVOICES
                  </Typography>
                </Box>
                <div
                  style={{
                    borderLeft: "2.5px solid #e6dfdf",
                    height: "50px",
                    marginTop: "40px",
                    marginLeft: "10px",
                  }}
                ></div>

                <Box
                  style={{
                    padding: "25px",
                    marginTop: "5px",
                    marginBottom: "10px",
                  }}
                >
                  <Grid style={{ display: "flex" }}>
                    <AttachMoneyOutlinedIcon
                      style={{
                        padding: "10px",
                        marginTop: "4px",
                        color: "#10b2ba",
                        fontSize: "23px",
                      }}
                    ></AttachMoneyOutlinedIcon>
                    <Typography
                      style={{
                        padding: "1px",
                        fontWeight: "1000",
                        marginLeft: "-10px",
                        fontSize: "30px",
                        color: "#7b7f93",
                      }}
                    >
                      14,215
                    </Typography>
                  </Grid>
                  <Typography
                    style={{
                      fontSize: "12px",
                      color: "#7b7f93",
                      marginLeft: "15px",
                    }}
                  >
                    {" "}
                    INVOICES AMOUNT
                  </Typography>
                </Box>

                <div
                  style={{
                    borderLeft: "2.5px solid #e6dfdf",
                    height: "50px",
                    marginTop: "40px",
                    marginLeft: "10px",
                  }}
                ></div>

                <Box style={{ padding: "25px" }}>
                  <Grid style={{ display: "flex" }}>
                    <AttachMoneyOutlinedIcon
                      style={{
                        padding: "10px",
                        marginTop: "7px",
                        color: "#f50057",
                      }}
                    ></AttachMoneyOutlinedIcon>
                    <Typography
                      style={{
                        padding: "4px",
                        fontWeight: "bolder",
                        fontSize: "30px",
                        color: "#7b7f93",
                        marginLeft: "-10px",
                      }}
                    >
                      10,215
                    </Typography>
                  </Grid>
                  <Typography
                    style={{
                      fontSize: "13px",
                      color: "#7b7f93",
                      marginLeft: "15px",
                    }}
                  >
                    AMOUNT OVERDUE
                  </Typography>
                </Box>

                <div
                  style={{
                    borderLeft: "2.5px solid #e6dfdf",
                    height: "50px",
                    marginTop: "40px",
                    marginLeft: "10px",
                  }}
                ></div>

                <Box style={{ padding: "25px" }}>
                  <Grid style={{ display: "flex" }}>
                    <QueryBuilderOutlinedIcon
                      style={{
                        padding: "10px",
                        marginTop: "7px",
                        color: "#26b8ab",
                      }}
                    ></QueryBuilderOutlinedIcon>
                    <Typography
                      style={{
                        padding: "4px",
                        fontWeight: "bolder",
                        fontSize: "30px",
                        color: "#7b7f93",
                        marginLeft: "-5px",
                      }}
                    >
                      19
                    </Typography>
                  </Grid>
                  <Typography
                    style={{
                      fontSize: "13px",
                      color: "#7b7f93",
                      marginLeft: "15px",
                    }}
                  >
                    HOURS TRACKED
                  </Typography>
                </Box>

                <div
                  style={{
                    borderLeft: "2.5px solid #e6dfdf",
                    height: "50px",
                    marginTop: "40px",
                    marginLeft: "10px",
                  }}
                ></div>

                <Box style={{ padding: "25px" }}>
                  <Grid style={{ display: "flex" }}>
                    <AddToPhotosOutlinedIcon
                      style={{
                        padding: "10px",
                        marginTop: "7px",
                        color: "#f65959",
                      }}
                    ></AddToPhotosOutlinedIcon>
                    <Typography
                      style={{
                        padding: "4px",
                        fontWeight: "bolder",
                        fontSize: "30px",
                        color: "#7b7f93",
                      }}
                    >
                      8
                    </Typography>
                  </Grid>
                  <Typography
                    style={{
                      fontSize: "13px",
                      color: "#7b7f93",
                      marginLeft: "15px",
                    }}
                  >
                    OPEN PROJECTS
                  </Typography>
                </Box>
              </Grid>

              <Grid
                item
                xs={12}
                style={{
                  padding: "10px",
                  marginLeft: "25px",
                  marginRight: "25px",
                  marginTop: "10px",
                }}
              >
                <Grid style={{ display: "flex" }}>
                  <Typography
                    variant="h6"
                    style={{
                      fontWeight: "lighter",
                      color: "#62688b",
                      marginLeft: "10px",
                    }}
                  >
                    Team Members
                  </Typography>
                  <Grid style={{ display: "flex", marginLeft: "590px" }}>
                    <Typography
                      style={{
                        fontWeight: "lighter",
                        marginLeft: "60px",
                        fontSize: "13px",
                        color: "#7b7f93",
                        fontWeight: "300",
                        marginTop: "7px",
                      }}
                    >
                      Sort by:
                    </Typography>
                    <Typography
                      style={{
                        color: "#0acbcb",
                        fontSize: "14px",
                        marginTop: "7px",
                        marginLeft: "3px",
                      }}
                    >
                      Recent
                    </Typography>
                    <ExpandMoreOutlinedIcon
                      style={{
                        color: "#0acbcb",
                        marginLeft: "15px",
                        fontSize: "20px",
                        marginTop: "6px",
                      }}
                    ></ExpandMoreOutlinedIcon>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Box
                  style={{
                    backgroundColor: "white",
                    marginLeft: "45px",
                    padding: "17px",
                    borderTopLeftRadius: "5px",
                    borderTopRightRadius: "5px",
                    display: "flex",
                    marginRight: "40px",
                  }}
                >
                  <Avatar
                    src="https://pngimage.net/wp-content/uploads/2018/06/john-doe-png.png"
                    style={{ height: "50px", width: "50px" }}
                  ></Avatar>
                  <Typography
                    style={{
                      fontSize: "13px",
                      fontWeight: "700",
                      padding: "10px",
                      color: "#7b7f93",
                      marginLeft: "10px",
                      marginTop: "5px",
                    }}
                  >
                    Mark Spencer
                  </Typography>
                  <LocalOfferIcon
                    style={{
                      color: "#a2a2b8",
                      padding: "8px",
                      marginLeft: "50px",
                      fontSize: "18px",
                      marginTop: "7px",
                    }}
                  ></LocalOfferIcon>
                  <Typography
                    style={{
                      fontSize: "13px",
                      color: "#7b7f93",
                      padding: "10px",
                      marginLeft: "-5px",
                      marginTop: "5px",
                    }}
                  >
                    Design,Development
                  </Typography>
                  <TimerOutlinedIcon
                    style={{
                      color: "#7b7f93",
                      padding: "8px",
                      marginLeft: "60px",
                      fontSize: "20px",
                      fontWeight: "800",
                      marginTop: "5px",
                    }}
                  ></TimerOutlinedIcon>
                  <Typography
                    style={{
                      color: "#7b7f93",
                      fontSize: "13px",
                      padding: "5px",
                      marginTop: "8px",
                    }}
                  >
                    This Week: 1h: 12m
                  </Typography>
                  <ExpandMoreOutlinedIcon
                    style={{
                      color: "grey",
                      padding: "5px",
                      fontSize: "17px",
                      marginTop: "8px",
                    }}
                  ></ExpandMoreOutlinedIcon>
                  <AvatarGroup style={{ marginLeft: "50px", marginTop: "7px" }}>
                    <Avatar
                      style={{
                        width: "30px",
                        height: "30px",
                        fontSize: "12px",
                        backgroundColor: "#f50057",
                      }}
                    >
                      H
                    </Avatar>
                    <Avatar
                      style={{
                        width: "30px",
                        height: "30px",
                        fontSize: "12px",
                        backgroundColor: "#19cae1",
                      }}
                    >
                      B
                    </Avatar>
                    <Avatar
                      style={{
                        width: "30px",
                        height: "30px",
                        fontSize: "12px",
                        backgroundColor: "#18dfad",
                      }}
                    >
                      G
                    </Avatar>
                  </AvatarGroup>

                    <MoreVertIcon
                    style={{
                      color: "#bdbdbd",
                      backgroundColor: "#958f8f42",
                      padding: "4px",
                      borderRadius: "5px",
                      marginTop: "10px",
                      marginLeft: "80px",
                    }}
                  ></MoreVertIcon>
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Box
                  style={{
                    backgroundColor: "white",
                    marginLeft: "45px",
                    padding: "17px",
                    display: "flex",
                    marginRight: "40px",
                    marginTop: "2px",
                  }}
                >
                  <Avatar
                    src="https://www.freshfields.com/49ba0a/globalassets/profile-images/m/mitstifer_rebecca_1000x840_thumbnail.png?width=312&process=always&format=png"
                    style={{ height: "50px", width: "50px" }}
                  ></Avatar>
                  <Typography
                    style={{
                      fontSize: "13px",
                      fontWeight: "700",
                      padding: "10px",
                      color: "#7b7f93",
                      marginLeft: "10px",
                      marginTop: "5px",
                    }}
                  >
                    Rebbeca K.Quinn
                  </Typography>
                  <LocalOfferIcon
                    style={{
                      color: "#a2a2b8",
                      padding: "8px",
                      marginLeft: "30px",
                      fontSize: "18px",
                      marginTop: "7px",
                    }}
                  ></LocalOfferIcon>
                  <Typography
                    style={{
                      fontSize: "13px",
                      color: "#7b7f93",
                      padding: "10px",
                      marginLeft: "-5px",
                      marginTop: "5px",
                    }}
                  >
                    CopyWriting,Photography
                  </Typography>
                  <TimerOutlinedIcon
                    style={{
                      color: "#7b7f93",
                      padding: "8px",
                      marginLeft: "30px",
                      fontSize: "20px",
                      fontWeight: "800",
                      marginTop: "5px",
                    }}
                  ></TimerOutlinedIcon>
                  <Typography
                    style={{
                      color: "#7b7f93",
                      fontSize: "13px",
                      padding: "5px",
                      marginTop: "8px",
                    }}
                  >
                    This Week: 9h: 25m
                  </Typography>
                  <ExpandMoreOutlinedIcon
                    style={{
                      color: "grey",
                      padding: "5px",
                      fontSize: "17px",
                      marginTop: "8px",
                    }}
                  ></ExpandMoreOutlinedIcon>
                  <AvatarGroup style={{ marginTop: "5px", marginLeft: "55px" }}>
                    <Avatar
                      style={{
                        width: "30px",
                        height: "30px",
                        fontSize: "12px",
                        backgroundColor: "#f50057",
                      }}
                    >
                      H
                    </Avatar>
                    <Avatar
                      style={{
                        width: "30px",
                        height: "30px",
                        fontSize: "12px",
                        backgroundColor: "#19cae1",
                      }}
                    >
                      B
                    </Avatar>
                  </AvatarGroup>
                  <MoreVertIcon
                    style={{
                      color: "#bdbdbd",
                      backgroundColor: "#958f8f42",
                      padding: "4px",
                      borderRadius: "5px",
                      marginTop: "10px",
                      marginLeft: "103px",
                    }}
                  ></MoreVertIcon>
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Box
                  style={{
                    backgroundColor: "white",
                    marginLeft: "45px",
                    padding: "17px",
                    display: "flex",
                    marginRight: "40px",
                    marginTop: "2px",
                    borderBottomLeftRadius: "5px",
                    borderBottomRightRadius: "5px",
                  }}
                >
                  <Avatar
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnmR6_Xu37nXZAPZ9wBouDqVX0GUT692Ef456G-H0IiHKZla7kKuFAxHNjBfzj5T6b-y0&usqp=CAU"
                    style={{ height: "50px", width: "50px" }}
                  ></Avatar>
                  <Typography
                    style={{
                      fontSize: "13px",
                      fontWeight: "700",
                      padding: "10px",
                      color: "#7b7f93",
                      marginLeft: "10px",
                      marginTop: "5px",
                    }}
                  >
                    Damon Martin
                  </Typography>
                  <LocalOfferIcon
                    style={{
                      color: "#a2a2b8",
                      padding: "8px",
                      marginLeft: "50px",
                      fontSize: "18px",
                      marginTop: "7px",
                    }}
                  ></LocalOfferIcon>
                  <Typography
                    style={{
                      fontSize: "13px",
                      color: "#7b7f93",
                      padding: "10px",
                      marginLeft: "-5px",
                      marginTop: "5px",
                    }}
                  >
                    Design,Development
                  </Typography>
                  <TimerOutlinedIcon
                    style={{
                      color: "#7b7f93",
                      padding: "8px",
                      marginLeft: "57px",
                      fontSize: "20px",
                      fontWeight: "800",
                      marginTop: "5px",
                    }}
                  ></TimerOutlinedIcon>
                  <Typography
                    style={{
                      color: "#7b7f93",
                      fontSize: "13px",
                      padding: "5px",
                      marginTop: "8px",
                    }}
                  >
                    This Week: 10h: 33m
                  </Typography>
                  <ExpandMoreOutlinedIcon
                    style={{
                      color: "grey",
                      padding: "5px",
                      fontSize: "17px",
                      marginTop: "8px",
                    }}
                  ></ExpandMoreOutlinedIcon>
                  <AvatarGroup style={{ marginTop: "5px", marginLeft: "50px" }}>
                    <Avatar
                      style={{
                        width: "30px",
                        height: "30px",
                        backgroundColor: "#d5d522",
                      }}
                    >
                      S
                    </Avatar>
                  </AvatarGroup>
                  <MoreVertIcon
                    style={{
                      color: "#bdbdbd",
                      backgroundColor: "#958f8f42",
                      padding: "4px",
                      borderRadius: "5px",
                      marginTop: "10px",
                      marginLeft: "125px",
                    }}
                  ></MoreVertIcon>
                </Box>
              </Grid>
              <Grid item xs={12} style={{ display: "flex" }}>
                <Grid
                  item
                  xs={4}
                  style={{
                    backgroundColor: "white",
                    marginLeft: "45px",
                    marginTop: "30px",
                    padding: "15px",
                    borderRadius: "5px",
                  }}
                >
                  <Grid>
                    <Grid style={{ display: "flex" }}>
                      <Typography
                        style={{
                          color: "#7b7f93",
                          fontSize: "13px",
                          fontWeight: "500",
                        }}
                      >
                        Top Tasks:
                      </Typography>
                      <Typography
                        style={{
                          marginLeft: "130px",
                          color: "#10bbee",
                          fontWeight: "500",
                          fontSize: "14px",
                        }}
                      >
                        15 days{" "}
                      </Typography>
                      <ExpandMoreOutlinedIcon
                        style={{
                          color: "#10bbee",
                          marginLeft: "8px",
                          fontSize: "14px",
                          marginTop: "5px",
                        }}
                      ></ExpandMoreOutlinedIcon>
                    </Grid>
                    <Chart />
                  
                  </Grid>
                  <Grid
                    style={{
                      display: "flex",
                      padding: "5px",
                      marginTop: "20px",
                    }}
                  >
                    <CheckBoxOutlineBlankIcon
                      style={{
                        backgroundColor: "#9494cb",
                        color: "#9494cb",
                        padding: "0.08px",
                        borderRadius: "5px",
                        fontSize: "16px",
                        marginTop: "3px",
                      }}
                    ></CheckBoxOutlineBlankIcon>
                    <Grid style={{ display: "flex", marginLeft: "5px" }}>
                      <Typography
                        style={{ color: "#a09797", fontSize: "13px" }}
                      >
                        Redesigning Tackkle -{" "}
                      </Typography>
                      <Typography
                        style={{
                          fontWeight: "1000",
                          color: "#7b7f93",
                          fontSize: "14px",
                        }}
                      >
                        {" "}
                        $4,750.00
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid style={{ display: "flex", padding: "5px" }}>
                    <CheckBoxOutlineBlankIcon
                      style={{
                        backgroundColor: "#2ac9c9",
                        color: "#2ac9c9",
                        padding: "0.08px",
                        borderRadius: "5px",
                        fontSize: "16px",
                      }}
                    ></CheckBoxOutlineBlankIcon>
                    <Grid style={{ display: "flex", marginLeft: "5px" }}>
                      <Typography
                        style={{ color: "#a09797", fontSize: "13px" }}
                      >
                        CopyWriting Nike Email -{" "}
                      </Typography>
                      <Typography
                        style={{
                          fontWeight: "1000",
                          color: "#7b7f93",
                          fontSize: "14px",
                        }}
                      >
                        $3,750.00
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid style={{ display: "flex", padding: "5px" }}>
                    <CheckBoxOutlineBlankIcon
                      style={{
                        backgroundColor: "#f0176480",
                        color: "#f0176480",
                        padding: "0.08px",
                        borderRadius: "5px",
                        fontSize: "16px",
                      }}
                    ></CheckBoxOutlineBlankIcon>
                    <Grid style={{ display: "flex", marginLeft: "5px" }}>
                      <Typography
                        style={{ color: "#a09797", fontSize: "13px" }}
                      >
                        Redeveloping Red Bull -{" "}
                      </Typography>
                      <Typography
                        style={{
                          fontWeight: "1000",
                          color: "#7b7f93",
                          fontSize: "14px",
                        }}
                      >
                        $2,000.00
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid
                  item
                  xs={4}
                  style={{
                    backgroundColor: "white",
                    marginLeft: "15px",
                    marginTop: "30px",
                    padding: "15px",
                    borderRadius: "5px",
                  }}
                >
                  <Grid item xs={12}>
                    <Grid style={{ display: "flex" }}>
                      <Typography
                        style={{
                          color: "#7b7f93",
                          fontSize: "13px",
                          fontWeight: "500",
                        }}
                      >
                        Client Status:
                      </Typography>
                      <Typography
                        style={{
                          marginLeft: "110px",
                          color: "#10bbee",
                          fontWeight: "500",
                          fontSize: "14px",
                        }}
                      >
                        All Time{" "}
                      </Typography>
                      <ExpandMoreOutlinedIcon
                        style={{
                          color: "#10bbee",
                          marginLeft: "8px",
                          fontSize: "14px",
                          marginTop: "5px",
                        }}
                      ></ExpandMoreOutlinedIcon>
                    </Grid>
                    <Grid
                      style={{
                        display: "flex",
                        padding: "5px",
                        marginTop: "35px",
                      }}
                    >
                      <Avatar
                        style={{
                          backgroundColor: "#e80a6d",
                          height: "30px",
                          width: "30px",
                          fontSize: "13px",
                          fontWeight: "600",
                        }}
                      >
                        L
                      </Avatar>
                      <Typography
                        style={{
                          fontWeight: "800",
                          color: "grey",
                          marginLeft: "10px",
                          marginTop: "5px",
                          fontSize: "0.85rem",
                        }}
                      >
                        {" "}
                        Lyn Emps
                      </Typography>
                      <CheckBoxOutlinedIcon
                        style={{
                          color: "#25e8e8",
                          marginLeft: "65px",
                          marginTop: "5px",
                          fontSize: "1.1rem",
                        }}
                      ></CheckBoxOutlinedIcon>
                      <Typography
                        style={{
                          marginLeft: "5px",
                          marginTop: "5px",
                          fontSize: "0.9rem",
                        }}
                      >
                        $4,750.00
                      </Typography>
                    </Grid>
                    <Divider style={{ marginTop: "5px" }} />

                    <Grid
                      style={{
                        display: "flex",
                        padding: "5px",
                        marginTop: "15px",
                      }}
                    >
                      <Avatar
                        style={{
                          backgroundColor: "#a113f0",
                          height: "30px",
                          width: "30px",
                          fontSize: "13px",
                          fontWeight: "600",
                        }}
                      >
                        S
                      </Avatar>
                      <Typography
                        style={{
                          fontWeight: "800",
                          color: "grey",
                          marginLeft: "10px",
                          marginTop: "5px",
                          fontSize: "0.85rem",
                        }}
                      >
                        {" "}
                        Some Company
                      </Typography>
                      <ErrorOutlineRoundedIcon
                        style={{
                          color: "#e80a6d",
                          marginLeft: "25px",
                          marginTop: "5px",
                          fontSize: "1.1rem",
                        }}
                      ></ErrorOutlineRoundedIcon>
                      <Typography
                        style={{
                          marginLeft: "5px",
                          marginTop: "5px",
                          fontSize: "0.9rem",
                        }}
                      >
                        $2,155.00
                      </Typography>
                    </Grid>
                    <Divider style={{ marginTop: "7px" }} />

                    <Grid
                      style={{
                        display: "flex",
                        padding: "5px",
                        marginTop: "15px",
                      }}
                    >
                      <Avatar
                        style={{
                          backgroundColor: "#07b3e1",
                          height: "30px",
                          width: "30px",
                          fontSize: "13px",
                          fontWeight: "600",
                        }}
                      >
                        N
                      </Avatar>
                      <Typography
                        style={{
                          fontWeight: "800",
                          color: "grey",
                          marginLeft: "10px",
                          marginTop: "5px",
                          fontSize: "0.85rem",
                        }}
                      >
                        {" "}
                        Nike
                      </Typography>
                      <ErrorOutlineRoundedIcon
                        style={{
                          color: "#e80a6d",
                          marginLeft: "95px",
                          marginTop: "5px",
                          fontSize: "1.1rem",
                        }}
                      ></ErrorOutlineRoundedIcon>
                      <Typography
                        style={{
                          marginLeft: "5px",
                          marginTop: "5px",
                          fontSize: "0.9rem",
                        }}
                      >
                        $9,000.00
                      </Typography>
                    </Grid>

                    <Divider style={{ marginTop: "7px" }} />

                    <Grid
                      style={{
                        display: "flex",
                        padding: "5px",
                        marginTop: "15px",
                      }}
                    >
                      <Avatar
                        style={{
                          backgroundColor: "#a113f0",
                          height: "30px",
                          width: "30px",
                          fontSize: "13px",
                          fontWeight: "600",
                        }}
                      >
                        Z
                      </Avatar>
                      <Typography
                        style={{
                          fontWeight: "800",
                          color: "grey",
                          marginLeft: "10px",
                          marginTop: "5px",
                          fontSize: "0.85rem",
                        }}
                      >
                        {" "}
                        Zonda P.LTD
                      </Typography>
                      <CheckBoxOutlinedIcon
                        style={{
                          color: "#25e8e8",
                          marginLeft: "55px",
                          marginTop: "5px",
                          fontSize: "1.1rem",
                        }}
                      ></CheckBoxOutlinedIcon>
                      <Typography
                        style={{
                          marginLeft: "5px",
                          marginTop: "5px",
                          fontSize: "0.9rem",
                        }}
                      >
                        $662.00
                      </Typography>
                    </Grid>

                    <Divider style={{ marginTop: "7px" }} />

                    <Grid
                      style={{
                        display: "flex",
                        padding: "5px",
                        marginTop: "15px",
                      }}
                    >
                      <Avatar
                        style={{
                          backgroundColor: "#13be7b",
                          height: "30px",
                          width: "30px",
                          fontSize: "13px",
                          fontWeight: "600",
                        }}
                      >
                        B
                      </Avatar>
                      <Typography
                        style={{
                          fontWeight: "800",
                          color: "grey",
                          marginLeft: "10px",
                          marginTop: "5px",
                          fontSize: "0.85rem",
                        }}
                      >
                        Balkon Brothers
                      </Typography>
                      <CheckBoxOutlinedIcon
                        style={{
                          color: "#25e8e8",
                          marginLeft: "45px",
                          marginTop: "5px",
                          fontSize: "1.1rem",
                        }}
                      ></CheckBoxOutlinedIcon>

                      <Typography
                        style={{
                          marginLeft: "5px",
                          marginTop: "5px",
                          fontSize: "0.9rem",
                        }}
                      >
                        $55.00
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid
                  item
                  xs={4}
                  style={{
                    backgroundColor: "white",
                    marginLeft: "15px",
                    marginTop: "30px",
                    padding: "15px",
                    borderRadius: "5px",
                    marginRight: "40px",
                  }}
                >
                  <Grid item xs={12}>
                    <Grid style={{ display: "flex" }}>
                      <Typography
                        style={{
                          color: "#7b7f93",
                          fontSize: "13px",
                          fontWeight: "500",
                        }}
                      >
                        Logged Hours:
                      </Typography>
                      <Typography
                        style={{
                          marginLeft: "80px",
                          color: "#10bbee",
                          fontWeight: "500",
                          fontSize: "14px",
                        }}
                      >
                        This Week{" "}
                      </Typography>
                      <ExpandMoreOutlinedIcon
                        style={{
                          color: "blue",
                          marginLeft: "8px",
                          fontSize: "14px",
                          marginTop: "5px",
                        }}
                      ></ExpandMoreOutlinedIcon>
                    </Grid>
                    <Grid
                      style={{
                        display: "flex",
                        padding: "5px",
                        marginTop: "35px",
                      }}
                    >
                      <Avatar
                        style={{
                          backgroundColor: "#e80a6d",
                          height: "30px",
                          width: "30px",
                          fontSize: "13px",
                          fontWeight: "600",
                        }}
                      >
                        L
                      </Avatar>
                      <Typography
                        style={{
                          fontWeight: "800",
                          color: "grey",
                          marginLeft: "10px",
                          marginTop: "5px",
                          fontSize: "0.85rem",
                        }}
                      >
                        {" "}
                        Design:
                      </Typography>
                      <Typography
                        style={{ fontSize: "0.75rem", marginTop: "6px" }}
                      >
                        Project mana...
                      </Typography>

                      <Typography
                        style={{
                          marginLeft: "25px",
                          marginTop: "5px",
                          fontSize: "0.9rem",
                        }}
                      >
                        01h:45m
                      </Typography>
                    </Grid>
                    <Divider style={{ marginTop: "7px" }} />

                    <Grid
                      style={{
                        display: "flex",
                        padding: "5px",
                        marginTop: "15px",
                      }}
                    >
                      <Avatar
                        style={{
                          backgroundColor: "#07b3e1",
                          height: "30px",
                          width: "30px",
                          fontSize: "13px",
                          fontWeight: "600",
                        }}
                      >
                        N
                      </Avatar>
                      <Typography
                        style={{
                          fontWeight: "800",
                          color: "grey",
                          marginLeft: "10px",
                          marginTop: "5px",
                          fontSize: "0.85rem",
                        }}
                      >
                        {" "}
                        CopyWriting:
                      </Typography>
                      <Typography
                        style={{ fontSize: "0.75rem", marginTop: "6px" }}
                      >
                        Nike...
                      </Typography>

                      <Typography
                        style={{
                          marginLeft: "37px",
                          marginTop: "5px",
                          fontSize: "0.9rem",
                        }}
                      >
                        06h:23m
                      </Typography>
                    </Grid>
                    <Divider style={{ marginTop: "7px" }} />

                    <Grid
                      style={{
                        display: "flex",
                        padding: "5px",
                        marginTop: "15px",
                      }}
                    >
                      <Avatar
                        style={{
                          backgroundColor: "#e80a6d",
                          height: "30px",
                          width: "30px",
                          fontSize: "13px",
                          fontWeight: "600",
                        }}
                      >
                        L
                      </Avatar>
                      <Typography
                        style={{
                          fontWeight: "800",
                          color: "grey",
                          marginLeft: "10px",
                          marginTop: "5px",
                          fontSize: "0.85rem",
                        }}
                      >
                        {" "}
                        Design:
                      </Typography>
                      <Typography
                        style={{ fontSize: "0.75rem", marginTop: "6px" }}
                      >
                        Project mana...
                      </Typography>

                      <Typography
                        style={{
                          marginLeft: "25px",
                          marginTop: "5px",
                          fontSize: "0.9rem",
                        }}
                      >
                        01h:30m
                      </Typography>
                    </Grid>

                    <Divider style={{ marginTop: "7px" }} />

                    <Grid
                      style={{
                        display: "flex",
                        padding: "5px",
                        marginTop: "15px",
                      }}
                    >
                      <Avatar
                        style={{
                          backgroundColor: "#e80a6d",
                          height: "30px",
                          width: "30px",
                          fontSize: "13px",
                          fontWeight: "600",
                        }}
                      >
                        L
                      </Avatar>
                      <Typography
                        style={{
                          fontWeight: "800",
                          color: "grey",
                          marginLeft: "10px",
                          marginTop: "5px",
                          fontSize: "0.85rem",
                        }}
                      >
                        {" "}
                        Design:
                      </Typography>
                      <Typography
                        style={{ fontSize: "0.75rem", marginTop: "6px" }}
                      >
                        Project mana...
                      </Typography>

                      <Typography
                        style={{
                          marginLeft: "25px",
                          marginTop: "5px",
                          fontSize: "0.9rem",
                        }}
                      >
                        00h:23m
                      </Typography>
                    </Grid>

                    <Divider style={{ marginTop: "7px" }} />
                  </Grid>
                  <Grid
                    style={{
                      display: "flex",
                      padding: "5px",
                      marginTop: "28px",
                      backgroundColor: "#7583b2",
                      width: "285px",
                      marginBottom: "-15px",
                      marginLeft: "-15px",
                      marginRight: "-30px",
                      borderBottomLeftRadius: "5px",
                      borderBottomRightRadius: "5px",
                    }}
                  >
                    <Typography
                      style={{
                        fontWeight: "800",
                        color: "whitesmoke",
                        marginLeft: "10px",
                        marginTop: "5px",
                        fontSize: "1.0rem",
                      }}
                    >
                      {" "}
                      Total:
                    </Typography>

                    <Typography
                      style={{
                        marginLeft: "160px",
                        marginTop: "5px",
                        fontSize: "0.9rem",
                        color: "whitesmoke",
                        fontSize: "1.0rem",
                        fontWeight: "900",
                        marginRight: "20px",
                      }}
                    >
                      21:55:14
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2}>
              <Grid item xs={12}>
                <Paper
                  className={classes.rightside}
                  style={{ backgroundColor: "#7583b2", padding: "10px" }}
                >
                  <Typography
                    style={{
                      color: "whitesmoke",
                      fontWeight: "lighter",
                      marginTop: "20px",
                      marginLeft: "10px",
                      marginBottom: "30px",
                    }}
                  >
                    Recent Activity
                  </Typography>

                  <Grid style={{ marginLeft: "10px" }}>
                    <div
                      style={{
                        borderLeft: "1px solid #66697d",
                        marginLeft: "6px",
                        height: "30px",
                        marginTop: "14px",
                        marginBottom: "-43px",
                      }}
                    ></div>
                    <FiberManualRecordIcon
                      style={{
                        color: "#5c6076",
                        fontSize: "13px",
                        marginTop: "40px",
                      }}
                    ></FiberManualRecordIcon>
                    <Button
                      style={{
                        backgroundColor: "#5c6076",
                        borderRadius: "25px",
                        marginLeft: "10px",
                        fontSize: "10px",
                        color: "white",
                        width: "40px",
                      }}
                    >
                      12, APR
                    </Button>
                    <div
                      style={{
                        borderLeft: "1px solid #66697d",
                        marginLeft: "6px",
                        height: "50px",
                        marginTop: "-14px",
                        marginBottom: "-21px",
                      }}
                    ></div>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{
                      display: "flex",
                      marginTop: "20px",
                      marginLeft: "9px",
                    }}
                  >
                    <Grid item xs={2}>
                      <PauseCircleFilledIcon
                        style={{
                          color: "#c28ae6c4",
                          border: "none",
                          fontSize: "20px",
                        }}
                      ></PauseCircleFilledIcon>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography
                        style={{
                          fontSize: "13px",
                          color: "white",
                          fontWeight: "lighter",
                        }}
                      >
                        Stopped timer for{" "}
                      </Typography>
                      <div
                        style={{
                          borderLeft: "1px solid #66697d",
                          marginLeft: "-20px",
                          height: "60px",
                          marginTop: "-1px",
                          marginBottom: "-55px",
                        }}
                      ></div>
                      <Typography
                        style={{
                          fontSize: "13px",
                          color: "white",
                          fontWeight: "lighter",
                          textDecoration: "underline",
                        }}
                      >
                        Ux & Ui Redesign
                      </Typography>

                      <Typography
                        style={{ fontSize: "10px", color: "#eaeaea" }}
                      >
                        12 minutes ago
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    style={{
                      display: "flex",
                      marginTop: "20px",
                      marginLeft: "10px",
                    }}
                  >
                    <Grid item xs={2}>
                      <PlayCircleFilledWhiteIcon
                        style={{ color: "#1ceebd", fontSize: "15px" }}
                      ></PlayCircleFilledWhiteIcon>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography
                        style={{
                          fontSize: "13px",
                          color: "white",
                          fontWeight: "lighter",
                        }}
                      >
                        Started timer for{" "}
                      </Typography>
                      <div
                        style={{
                          borderLeft: "1px solid #66697d",
                          marginLeft: "-20px",
                          height: "60px",
                          marginTop: "-5px",
                          marginBottom: "-57px",
                        }}
                      ></div>
                      <Typography
                        style={{
                          fontSize: "13px",
                          color: "white",
                          fontWeight: "lighter",
                          textDecoration: "underline",
                        }}
                      >
                        Ux & Ui Redesign
                      </Typography>
                      <Typography
                        style={{ fontSize: "10px", color: "#eaeaea" }}
                      >
                        12 minutes ago
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    style={{
                      display: "flex",
                      marginTop: "20px",
                      marginLeft: "10px",
                    }}
                  >
                    <Grid item xs={2}>
                      <MailIcon
                        style={{ color: "white", fontSize: "15px" }}
                      ></MailIcon>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography
                        style={{
                          fontSize: "13px",
                          color: "white",
                          fontWeight: "lighter",
                        }}
                      >
                        Sent invoice to
                      </Typography>
                      <div
                        style={{
                          borderLeft: "1px solid #66697d",
                          marginLeft: "-20px",
                          height: "60px",
                          marginTop: "-5px",
                          marginBottom: "-55px",
                        }}
                      ></div>
                      <Typography
                        style={{
                          fontSize: "13px",
                          color: "white",
                          fontWeight: "lighter",
                          textDecoration: "underline",
                        }}
                      >
                        Filip Justic
                      </Typography>
                      <Typography
                        style={{ fontSize: "10px", color: "#eaeaea" }}
                      >
                        12 minutes ago
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    style={{
                      display: "flex",
                      marginTop: "20px",
                      marginLeft: "10px",
                    }}
                  >
                    <Grid item xs={2}>
                      <PlayCircleFilledWhiteIcon
                        style={{ color: "#1ceebd", fontSize: "15px" }}
                      ></PlayCircleFilledWhiteIcon>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography
                        style={{
                          fontSize: "13px",
                          color: "white",
                          fontWeight: "lighter",
                        }}
                      >
                        Started timer for{" "}
                      </Typography>
                      <div
                        style={{
                          borderLeft: "1px solid #66697d",
                          marginLeft: "-20px",
                          height: "60px",
                          marginTop: "-5px",
                          marginBottom: "-55px",
                        }}
                      ></div>
                      <Typography
                        style={{
                          fontSize: "13px",
                          color: "white",
                          fontWeight: "lighter",
                          textDecoration: "underline",
                        }}
                      >
                        Ux & Ui Redesign
                      </Typography>
                      <Typography
                        style={{ fontSize: "10px", color: "#eaeaea" }}
                      >
                        12 minutes ago
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    style={{
                      display: "flex",
                      marginTop: "20px",
                      marginLeft: "10px",
                    }}
                  >
                    <Grid item xs={2}>
                      <CheckCircleIcon
                        style={{ color: "#3393e6", fontSize: "16px" }}
                      ></CheckCircleIcon>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography
                        style={{
                          fontSize: "13px",
                          color: "white",
                          fontWeight: "lighter",
                        }}
                      >
                        Invoice paid
                      </Typography>
                      <div
                        style={{
                          borderLeft: "1px solid #66697d",
                          marginLeft: "-20px",
                          height: "67px",
                          marginTop: "-5px",
                          marginBottom: "-63px",
                        }}
                      ></div>
                      <Typography
                        style={{
                          fontSize: "13px",
                          color: "white",
                          fontWeight: "lighter",
                          textDecoration: "underline",
                        }}
                      >
                        Filip Justic
                      </Typography>
                      <Typography
                        style={{ fontSize: "10px", color: "#eaeaea" }}
                      >
                        12 minutes ago
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid style={{ marginLeft: "10px" }}>
                    <FiberManualRecordIcon
                      style={{
                        color: "#66697d",
                        fontSize: "13px",
                        marginTop: "25px",
                        marginLeft: "1px",
                      }}
                    ></FiberManualRecordIcon>

                    <Button
                      style={{
                        backgroundColor: "#5c6076",

                        borderRadius: "25px",
                        marginLeft: "10px",
                        fontSize: "10px",
                        color: "white",
                      }}
                    >
                      11, APR
                    </Button>
                    <div
                      style={{
                        borderLeft: "1px solid #66697d",
                        marginLeft: "6px",
                        height: "50px",
                        marginTop: "-14px",
                        marginBottom: "-21px",
                      }}
                    ></div>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    style={{
                      display: "flex",
                      marginTop: "20px",
                      marginLeft: "10px",
                    }}
                  >
                    <Grid item xs={2}>
                      <ErrorIcon
                        style={{ color: "#f50057", fontSize: "15px" }}
                      ></ErrorIcon>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography
                        style={{
                          fontSize: "13px",
                          color: "white",
                          fontWeight: "lighter",
                        }}
                      >
                        Invoice for NIKE Ltd.
                      </Typography>
                      <div
                        style={{
                          borderLeft: "1px solid #66697d",
                          marginLeft: "-20px",
                          height: "60px",
                          marginTop: "-5px",
                          marginBottom: "-55px",
                        }}
                      ></div>
                      <Typography
                        style={{
                          fontSize: "13px",
                          color: "white",
                          fontWeight: "lighter",
                        }}
                      >
                        is overdue 51 days !
                      </Typography>
                      <Typography
                        style={{ fontSize: "10px", color: "#eaeaea" }}
                      >
                        12 minutes ago
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    style={{
                      display: "flex",
                      marginTop: "20px",
                      marginLeft: "10px",
                    }}
                  >
                    <Grid item xs={2}>
                      <CheckCircleIcon
                        style={{ color: "#3393e6", fontSize: "15px" }}
                      ></CheckCircleIcon>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography
                        style={{
                          fontSize: "13px",
                          color: "white",
                          fontWeight: "lighter",
                        }}
                      >
                        Invoice paid
                      </Typography>
                      <Typography
                        style={{
                          fontSize: "13px",
                          color: "white",
                          fontWeight: "lighter",
                          textDecoration: "underline",
                        }}
                      >
                        Filip Justic
                      </Typography>
                      <div
                        style={{
                          borderLeft: "1px solid #66697d",
                          marginLeft: "-20px",
                          height: "100px",
                          marginTop: "-25px",
                          marginBottom: "-70px",
                        }}
                      ></div>
                      <Typography
                        style={{ fontSize: "10px", color: "#eaeaea" }}
                      >
                        12 minutes ago
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
