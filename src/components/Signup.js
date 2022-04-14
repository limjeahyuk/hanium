import React, { useEffect, useState } from 'react';

import TextField from '@mui/material/TextField';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';

function Signup() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [email, setEmail] = useState('')
    const [emailaddress, setEmailaddress] = useState('');
    const [phone, setPhone] = useState('');

    // 오류메시지 상태저장
    const [userNameMessage, setUserNameMessage] = useState("");
    const [passwordMessage, setPasswordMessage] = useState('')
    const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('')
    const [emailMessage, setEmailMessage] = useState('')
    const [phoneMessage, setPhoneMessage] = useState('')

    // 유효성 검사
    const [isUserName, setIsUserName] = useState(false);
    const [isPassword, setIsPassword] = useState(false)
    const [isPasswordConfirm, setIsPasswordConfirm] = useState(false)
    const [isEmail, setIsEmail] = useState(false)
    const [isPhone, setIsPhone] = useState(false)
    const [selectedcollegeData, setSelectedcolledgeData] = useState({
        college_name: '대림',
        college_email: '@emali.daelim.ac.kr',
    });
    // const router = useRouter()

    // 이름
    const onChangeName = (event) => {
        setUserName(event.target.value)
        if (event.target.value.length < 1 || event.target.value.length > 8) {
            setUserNameMessage('1글자 이상 8글자 미만으로 입력해주세요.')
            setIsUserName(false)
        } else {
            setUserNameMessage('올바른 이름 형식입니다')
            setIsUserName(true)
        }
    }

    // 이메일
    const onChangeEmail = e => {
        const emailRegex = 
        /^[a-zA-Z0-9]*$/
        const emailCurrent = e.target.value
        setEmail(emailCurrent)
    
        if (!emailRegex.test(emailCurrent)) {
          setEmailMessage('이메일 형식에 맞게 다시 입력해주세요')
          setIsEmail(false)
        } else {
          setEmailMessage('올바른 이메일 형식')
          setIsEmail(true)
        }
    }

    // data 안에 있는 name 찾아줌.
    const onChangeAddress = (event) => {
        const collegeName = event.target.value;
        const findCollegeName = selectList.find((data) => data.college_name === collegeName);
        setSelectedcolledgeData(findCollegeName);
    };

    useEffect(() => {
        setEmailaddress(selectedcollegeData.college_email);
    }, [selectedcollegeData]);

    useEffect(() => {}, []);
    

    //비밀번호
    const onChangePassword = e => {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/
        const passwordCurrent = e.target.value
        setPassword(passwordCurrent)
    
        if (!passwordRegex.test(passwordCurrent)) {
          setPasswordMessage('숫자,영문자,특수문자 조합으로 8자리 이상 입력해주세요')
          setIsPassword(false)
        } else {
          setPasswordMessage('안전한 비밀번호에요')
          setIsPassword(true)
        }
    }

    //비밀번호 확인
    const onChangePasswordConfirm = e => {
        const passwordConfirmCurrent = e.target.value
        setPasswordConfirm(passwordConfirmCurrent)
      
        if (password === passwordConfirmCurrent) {
            setPasswordConfirmMessage('비밀번호 일치')
            setIsPasswordConfirm(true)
        } else {
            setPasswordConfirmMessage('비밀번호가 일치하지않습니다.')
            setIsPasswordConfirm(false)
        }
    }

    //대학 드롭다운
    const selectList = [{ college_name:"대림", college_email:"@emali.daelim.ac.kr"},{college_name: "연성", college_email:"@email.email"},{college_name: "안양", college_email: "@email"}];

    const handleChange = event => {
        const collegeName = selectList.find(data => data.college_name === event.target.value);
        setSelectedcolledgeData(collegeName);
    };

    //핸드폰 번호
    const handlePress = (e) => {
        const regex = /^[0-9\b -]{0,13}$/;
        if (regex.test(e.target.value)) {
          setPhone(e.target.value);
          setPhoneMessage('다시입력해주세요')
          setIsPhone(false);
        }else{
            setPhoneMessage('입력완료')
            setIsPhone(true);
        }
    }
    useEffect(() => {
        if (phone.length === 10) {
            setPhone(phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
        }
        if (phone.length === 13) {
            setPhone(phone.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
        }
      }, [phone]);

    // 값 보내주기
    const onSubmit = async e => {
        e.preventDefault()
        try {
            await axios
            .post('',{
                id : username,
                password : password,
                collegeName : selectedcollegeData.college_name, 
                email : email,
                phone : phone
            })
            .then((res) => {
                console.log('response:', res)
                if (res.status === 200) {
                 //   router.push('/sign_up/profile_start')
                }
            })
        } catch (err) {
            console.error(err)
        }
    }

    return(
        <form onSubmit={onSubmit}>
            <div>
                <h3>회원가입</h3>
            </div>
            <div>
                <TextField id="standard-basic" label="아이디" name="username" onChange={onChangeName} value={username} />
                {username.length > 0 && <span className={`message ${isUserName ? 'success' : 'error'}`}>{userNameMessage}</span>}
            </div>
            <div>
                <TextField id="standard-password-input" label="비밀번호" type="password" name="password" placeholder='' onChange={onChangePassword} value={password}/>
                {password.length > 0 && (<span className={`message ${isPassword ? 'success' : 'error'}`}>{passwordMessage}</span>)}
            </div>
            <div>
                <TextField id="standard-password-input" label="비밀번호 확인" type="password" name="passwordcofirm" placeholder='' onChange={onChangePasswordConfirm}/>
                {passwordConfirm.length > 0 && (<span className={`message ${isPasswordConfirm ? 'success' : 'error'}`}>{passwordConfirmMessage}</span>)}
            </div> 
            <div>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="selected-college-label">대학</InputLabel>
                    <Select
                        labelId="selected-college-label"
                        id="selected-college"
                        value={selectedcollegeData.college_name}
                        label="대학이름"
                        onChange={handleChange}
                        name="college_name"
                        >
                        {selectList.map((college_name)=> (
                            <MenuItem value={college_name.college_name}>{college_name.college_name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
            <div>
                <TextField id="standard-basic" label="이메일" name="email" onChange={onChangeEmail} value={email} />
                {email.length > 0 && <span className={`message ${isEmail ? 'success' : 'error'}`}>{emailMessage}</span>}

                <TextField id="standard-basic" label="이메일주소" name="emailAddress" onChange={onChangeAddress} value={emailaddress} disabled />
                <button type='submit' className='emali_button'>이메일 인증</button>
            </div>
            <div>
                <TextField id="standard-basic" label="전화번호" name="phone" onChange={handlePress} value={phone} />
                {phone.length > 0 && <span className={`message ${isPhone ? 'success' : 'error'}`}>{phoneMessage}</span>}
            </div>
            <div>
                <button type='submit' className='button' disabled={!(isUserName && isEmail && isPassword && isPasswordConfirm && isPhone)}>회원 가입하기</button>
            </div>
        </form>
    );
}


export default Signup;