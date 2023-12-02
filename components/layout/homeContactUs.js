import * as React from 'react';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import { TextField, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { ArrowForward, LocalPhone, LocationOn, AttachFile } from '@mui/icons-material';
import Container from '@mui/material/Container';

export default function ContactForm() {
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [sendStatus, setSendStatus] = useState(false);
    const [sendMsg, setSendMsg] = useState(false);


    React.useEffect(() => {
        if (!sendStatus) {
            return;
        }
        if (nameError.length === 0 && emailError.length === 0) {
            if (nameError.length === 0 && emailError.length === 0) {
                emailjs.sendForm('service_mofw6rg', 'template_t5tck8k', form.current, 'YsDE9eO5fpfnq44Mw')
                    .then((result) => {
                        console.log(result.text);
                        setSendMsg(true);
                    }, (error) => {
                        console.log(error.text);
                    });
                form.current.user_name.value = "";
                form.current.user_company.value = "";
                form.current.user_email.value = "";
                form.current.user_phone.value = "";
                form.current.user_notes.value = "";
            }
        }

    }, [sendStatus])

    const form = useRef();

    function isEmail(val) {
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regEmail.test(val)) {
            return true;
        }
    }

    const sendEmail = (e) => {
        e.preventDefault();

        if (form.current.user_name.value.length === 0) {
            setNameError("Name is not valid")
            setSendStatus(false);
        } else {
            setNameError("")
            setSendStatus(true);
        }

        if (form.current.user_email.value.length === 0) {
            setEmailError("Email is not valid");
            setSendStatus(false);
        } else if (isEmail(form.current.user_email.value)) {
            setEmailError("Email is not valid @");
            setSendStatus(false);
        } else {
            setEmailError("");
            setSendStatus(true);
        }
    };
    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "6a041038-e614-4977-8135-a57412123d11");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
        }
    }
    return (
        <Grid container className="contact-block" alignItems="end">
            <Grid item xs={12} md={8} sx={{ p: 5, pt: 9 }} className="left-col">
                <h3>Tell Us About Your Project</h3>
                <form component="form" sx={{ '& > :not(style)': { m: 1 }, }} noValidate autoComplete="off" ref={form} onSubmit={handleSubmit}>
                    <Stack className='text-field' direction='row' spacing={3}>
                        <TextField id="contactName" name="user_name" label="Name" size="small" variant="outlined" required />
                        {nameError && <span className="name">Name is required</span>}

                        <TextField id="contactCompany" name="user_company" label="Company" size="small" variant="outlined" />
                    </Stack>
                    <Stack className='text-field' direction='row' spacing={3} sx={{ mb: 3 }}>
                        <TextField id="contactEmail" name="user_email" label="Email" size="small" variant="outlined" required />
                        {emailError && <span className="email">Valid Email is required</span>}

                        <TextField id="contactPhone" name="user_phone" label="Phone" size="small" variant="outlined" />
                    </Stack>
                    <Stack className='text-section' direction='row' spacing={3} sx={{ mb: 3 }}>
                        <TextField id="contactNotes" name="user_notes" label="Notes" size="small" variant="outlined" multiline rows={4} />
                    </Stack>
                    <Stack className='attach-btn' direction='row' spacing={3} sx={{ mb: 3 }}>
                    </Stack>
                    <Button type="submit" className="icon-right-btn" variant="contained" endIcon={<ArrowForward />}>Send Details</Button>
                    {sendMsg && <h3 style="color: green;font-size: 16px;">Email has been sent successfully...</h3>}
                </form>
            </Grid>
            <Grid item xs={12} md={4} sx={{ pb: 5 }} className="right-col">
                <p className='contactUS-text'><LocationOn /> Suite 142, 139 Cardigan St <br></br>Carlton VIC 3053</p>
                <Button className="icon-left-btn contactUS-text" variant="contained" startIcon={<LocalPhone />}>(+61) 3 9119 3003</Button>
            </Grid>
        </Grid>
    );
}