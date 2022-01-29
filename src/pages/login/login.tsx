import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Grid, Typography, InputLabel, FormHelperText, FormControl, Box} from '@mui/material';
import {makeStyles} from '@mui/styles';
import LogoIcon from '../../assets/images/eniac_logo.png'
import LoginBackground from '../../assets/images/login_background.jpg'
import LoginLogo from '../../assets/images/login_logo.svg'
import CustomInput from "../../components/Input";
import CButton from "../../components/Button";
import {fetchLoginAction} from "../../redux/authentication/actions";
import {ApplicationState} from "../../redux";

const useStyles = makeStyles(() => ({
    formWrapper: {
        maxWidth: '450px',
        display: 'flex',
        alignItems: 'center',
        margin: '0 auto',
        direction: 'rtl'
    },
    loginBackground: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: 'auto',
        background: `url(${LoginBackground}) no-repeat center center`,
        backgroundSize: `cover`,
    },
    '@media (max-width: 800px)': {
        loginBackground: {
            display:'none',
        },
        formWrapper:{
            margin:'0px 10px',
        }
    },
    loginLogo: {
        maxWidth: '500px',
        height: 'auto',
        margin: '0 auto'
    },
    formIcon: {
        margin: '0 auto',
        display: 'flex'
    },
}));

const LoginView = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {loading} = useSelector(({authentication}: ApplicationState) => authentication);
    const [formError, setFormError] = useState<any>({})
    const [formValue, setFormValue] = useState({
        username: undefined,
        password: undefined,
    })


    const validate = () => {
        let _errors = {}
        let hasError = false
        Object.keys(formValue).map((item: any) => {
            // @ts-ignore
            if (!formValue[item]) {
                _errors = {..._errors, [item]: 'این مقدار اجباری است'}
                hasError = true
            }
        })
        setFormError(_errors)
        if (!hasError) submitForm()
    }

    const submitForm = async () => {
        // @ts-ignore
        dispatch(fetchLoginAction(formValue))
    }

    const handleFormValue = ({target: {name, value}}: any) => {
        setFormValue({...formValue, [name]: value})
    }

    return (
      <Grid container style={{height: "100vh"}}>
          <Grid item md={6} xs={12} className={classes.loginBackground}>
              <img className={classes.loginLogo} src={LoginLogo} alt="logo"/>
          </Grid>
          <Grid item md={6} xs={12} className={classes.formWrapper}>
              <Grid container>
                  <Grid item xs={12}>
                      <Box my={3}>
                          <img className={classes.formIcon} src={LogoIcon} alt="logo"/>
                      </Box>
                  </Grid>
                  <Grid item xs={12}>
                      <Box my={1}>
                          <Box my={1}>
                              <InputLabel>نام کاربری</InputLabel>
                          </Box>
                          <FormControl variant="outlined" className={''} fullWidth>
                              <CustomInput
                                placeholder={''} name={'username'}
                                onChange={handleFormValue} type={'text'}
                              />
                              <FormHelperText className={'text-right'} error={true}>
                                  {formError['username']}
                              </FormHelperText>
                          </FormControl>
                      </Box>
                  </Grid>
                  <Grid item xs={12}>
                      <Box my={1}>
                          <Box my={1}>
                              <InputLabel>رمز عبور</InputLabel>
                          </Box>
                          <FormControl variant="outlined" className={''} fullWidth>
                              <CustomInput
                                placeholder={''} name={'password'}
                                onChange={handleFormValue} type={'password'}
                              />
                              <FormHelperText className={'text-right'} error={true}>
                                  {formError['password']}
                              </FormHelperText>
                          </FormControl>
                      </Box>
                  </Grid>
                  <Grid item xs={12}>
                      <Box my={3}>
                          <CButton
                            variant={'contained'} color={'primary'} onClick={validate} fullWidth disabled={loading}
                          >
                              <Typography>تایید</Typography>
                          </CButton>
                      </Box>
                  </Grid>
                  <Grid item xs={12}>

                  </Grid>
              </Grid>
          </Grid>
      </Grid>
    );
};

export default LoginView;
