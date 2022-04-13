import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function Signup() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [email, setEmail] = useState('')
    const [college_name, setCollege_name] = useState('');
    const [phone, setPhone] = useState('');

    // 오류메시지 상태저장
    const [nameMessage, setNameMessage] = useState("");
    const [passwordMessage, setPasswordMessage] = useState('')
    const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('')
    const [emailMessage, setEmailMessage] = useState('')
    // const [collegeMessage, setCollegeMessage] = useState('')
    const [phoneMessage, setPhoneMessage] = useState('')

    // 유효성 검사
    const [isName, setIsName] = useState(false);
    const [isPassword, setIsPassword] = useState(false)
    const [isPasswordConfirm, setIsPasswordConfirm] = useState(false)
    const [isEmail, setIsEmail] = useState(false)
    // const [isCollege, setIsCollege] = useState(false)
    const [isPhone, setIsPhone] = useState(false)
    // const router = useRouter()

    // 이름
    const onChangeName = (event) => {
        setName(event.target.value)
        if (event.target.value.length < 2 || event.target.value.length > 5) {
            setNameMessage('2글자 이상 5글자 미만으로 입력해주세요.')
            setIsName(false)
        } else {
            setNameMessage('올바른 이름 형식입니다')
            setIsName(true)
        }
    }

    // 이메일
    const onChangeEmail = e => {
        const emailRegex =
          /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
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

    //비밀번호
    const onChangePassword = e => {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{10,25}$/
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
    const handleChange = event => {
        setCollege_name(event.target.value);
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

    const onSubmit = async e => {
        e.preventDefault()
        try {
            await axios
            .post('',{
                username: name,
                password: password,
                college_name: college_name,
                email: email,
                phone: phone
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
                <TextField id="standard-basic" label="아이디" name="username" onChange={onChangeName} />
                {name.length > 0 && <span className={`message ${isName ? 'success' : 'error'}`}>{nameMessage}</span>}
            </div>
            <div>
                <TextField id="standard-password-input" label="비밀번호" type="password" name="password" placeholder='숫자,영문자,특수문자 조합으로 10자리 이상' onChange={onChangePassword}/>
                {password.length > 0 && (
                    <span className={`message ${isPassword ? 'success' : 'error'}`}>{passwordMessage}</span>
                )}
            </div>
            <div>
                <TextField id="standard-password-input" label="비밀번호 확인" type="password" name="passwordcofirm" placeholder='' onChange={onChangePasswordConfirm}/>
                {passwordConfirm.length > 0 && (
                    <span className={`message ${isPasswordConfirm ? 'success' : 'error'}`}>{passwordConfirmMessage}</span>
                )}
            </div> 
            <div>
                <Select
                    labelId="demo-simple-select-disabled-label"
                    id="demo-simple-select-disabled"
                    value={college_name}
                    label="college_name"
                    onChange={handleChange}
                    name="college_name"
                    >
                    <MenuItem value="">
                        대림대학교
                    </MenuItem>
                    <MenuItem value={10}>대림대학교</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </div>
            <div>
                <TextField id="standard-basic" label="이메일" name="email" onChange={onChangeEmail} />
                {email.length > 0 && <span className={`message ${isEmail ? 'success' : 'error'}`}>{emailMessage}</span>}
                <button type='submit'>이메일 인증</button>
            </div>
            <div>
                <TextField id="standard-basic" label="전화번호" name="phone" onChange={handlePress} value={phone} />
                {phone.length > 0 && <span className={`message ${isPhone ? 'success' : 'error'}`}>{phoneMessage}</span>}
            </div>
            <div>
                <button type='submit' className='button' disabled={!(isName && isEmail && isPassword && isPasswordConfirm && isPhone)}>회원 가입하기</button>
            </div>
        </form>
    );
}


export default Signup;