import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import './Signup.css';

function Signup() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [email, setEmail] = useState('');
  const [emailaddress, setEmailaddress] = useState('');
  const [phone, setPhone] = useState('');

  // 오류메시지 상태저장
  const [userNameMessage, setUserNameMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [phoneMessage, setPhoneMessage] = useState('');

  // 유효성 검사
  const [isUserName, setIsUserName] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  const [selectedcollegeData, setSelectedcolledgeData] = useState('');
  // const router = useRouter()
  //{college_name: '대림대학교',college_email: '@emali.daelim.ac.kr'});

  // 이름
  const onChangeName = (event) => {
    setUserName(event.target.value);
    if (event.target.value.length < 2 || event.target.value.length > 8) {
      setUserNameMessage('2글자 이상 8글자 미만으로 입력해주세요.');
      setIsUserName(false);
    } else {
      setUserNameMessage('');
      setIsUserName(true);
    }
  };

  // 이메일
  const onChangeEmail = (e) => {
    const emailRegex = /^[a-zA-Z0-9]*$/;
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage('이메일 형식에 맞게 다시 입력해주세요');
      setIsEmail(false);
    } else {
      setEmailMessage('');
      setIsEmail(true);
    }
  };

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
  const onChangePassword = (e) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/;
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage('숫자,영문자,특수문자 조합으로 8자리 이상 입력해주세요');
      setIsPassword(false);
    } else {
      setPasswordMessage('');
      setIsPassword(true);
    }
  };

  //비밀번호 확인
  const onChangePasswordConfirm = (e) => {
    const passwordConfirmCurrent = e.target.value;
    setPasswordConfirm(passwordConfirmCurrent);

    if (password === passwordConfirmCurrent) {
      setPasswordConfirmMessage('비밀번호 일치');
      setIsPasswordConfirm(true);
    } else {
      setPasswordConfirmMessage('비밀번호가 일치하지않습니다.');
      setIsPasswordConfirm(false);
    }
  };

  //대학 드롭다운
  const selectList = [
    { college_name: '대림대', college_email: '@emali.daelim.ac.kr' },
    { college_name: '연성대', college_email: '@email.email' },
    { college_name: '안양대', college_email: '@email' },
  ];

  const handleChange = (event) => {
    const collegeName = selectList.find((data) => data.college_name === event.target.value);
    setSelectedcolledgeData(collegeName);
  };

  //핸드폰 번호
  const handlePress = (e) => {
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(e.target.value)) {
      setPhone(e.target.value);
      setIsPhone(false);
      setPhoneMessage('다시입력해주세요');
    }
  };

  useEffect(() => {
    if (phone.length === 10) {
      setPhone(phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
      setIsPhone(true);
      setPhoneMessage('');
    }
    if (phone.length === 13) {
      setPhone(phone.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
      setIsPhone(true);
      setPhoneMessage('');
    }
  }, [phone]);

  // 중복체크
  const idCheck = (e) => {
    e.preventDefault();
    axios({
      url: `http://localhost:8080/college-mate/user/join/${username}/idcheck`,
      method: 'post',
    })
      .then((res) => {
        if (res.data === true) {
          //중복체크 버튼 비활성화
          setIsUserName(true);
          setUserNameMessage('중복입니다.');
          // 가능합니다.
        } else {
          setIsUserName(false);
          setUserNameMessage('사용 가능합니다.');
        }
      })
      .catch((res) => {
        console.log(res);
      });
  };

  const emailCheck = (e) => {
    e.preventDefault();
    axios({
      url: `http://localhost:8080/college-mate/user/join/${email + emailaddress}/emailcheck`,
      method: 'post',
    })
      .then((res) => {
        if (res.data === true) {
          // 사용가능합니다 + 인증코드
        } else {
          // 중복입니다.
        }
      })
      .catch((res) => {
        console.log(res);
      });
  };

  // 값 보내주기
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios({
        url: 'http://localhost:8080/college-mate/user/join',
        method: 'post',
        data: null,
        params: {
          id: username,
          password: password,
          collegeName: selectedcollegeData.college_name,
          email: email + emailaddress,
          phone: phone,
        },
      });
      // 성공했을 시
      // router.push('/college-mate/login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={onSubmit} className="form">
      <div className="title_box">
        <h3 className="title">회원가입</h3>
      </div>
      <div className="id_box">
        <TextField
          id="standard-basic"
          label="아이디"
          className="id common"
          onChange={onChangeName}
          value={username || ''}
        />
        <button type="submit" className="id_button" onClick={idCheck} disabled={!isUserName}>
          중복 체크
        </button>
        <div className="Message">
          {username.length > 0 && (
            <span className={`message ${isUserName ? 'success' : 'error'}`}>{userNameMessage}</span>
          )}
        </div>
      </div>
      <div className="password_box">
        <TextField
          id="standard-password-input"
          label="비밀번호"
          className="password common"
          type="password"
          placeholder=""
          onChange={onChangePassword}
          value={password || ''}
        />
        <div className="Message">
          {password.length > 0 && (
            <span className={`message ${isPassword ? 'success' : 'error'}`}>{passwordMessage}</span>
          )}
        </div>
      </div>
      <div className="passwordconfirm_box">
        <TextField
          id="standard-password-input"
          label="비밀번호 확인"
          className="passwordconfirm common"
          type="password"
          placeholder=""
          onChange={onChangePasswordConfirm}
        />
        <div className="Message">
          {passwordConfirm.length > 0 && (
            <span className={`message ${isPasswordConfirm ? 'success' : 'error'}`}>
              {passwordConfirmMessage}
            </span>
          )}
        </div>
      </div>
      <div className="select_box">
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="selected-college-label">대학교</InputLabel>
          <Select
            labelId="selected-college-label"
            id="selected-college"
            label="대학교"
            className="select"
            onChange={handleChange}
            value={selectedcollegeData.college_name || ''}
          >
            {selectList.map((college_name) => (
              <MenuItem value={college_name.college_name}>{college_name.college_name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="email_box">
        <TextField
          id="standard-basic"
          label="이메일"
          className="email"
          onChange={onChangeEmail}
          value={email || ''}
        />
        <TextField
          id="standard-basic"
          label="이메일주소"
          className="emailaddress"
          onChange={onChangeAddress}
          value={emailaddress || ''}
          disabled
        />
        <button type="submit" className="emali_button" onClick={emailCheck} disabled={!isEmail}>
          이메일 인증
        </button>
        <div className="Message">
          {email.length > 0 && (
            <span className={`message ${isEmail ? 'success' : 'error'}`}>{emailMessage}</span>
          )}
        </div>
      </div>
      <div className="phone_box">
        <TextField
          id="standard-basic"
          label="전화번호"
          className="phone common"
          onChange={handlePress}
          value={phone}
        />
        <div className="Message">
          {phone.length > 0 && (
            <span className={`message ${isPhone ? 'success' : 'error'}`}>{phoneMessage}</span>
          )}
        </div>
      </div>
      <div className="button_box">
        <button
          type="submit"
          className="button"
          disabled={!(isUserName && isEmail && isPassword && isPasswordConfirm && isPhone)}
        >
          회원 가입
        </button>
      </div>
      <div className="link_login">
        <Link to="/college-mate/login">로그인화면으로</Link>
      </div>
    </form>
  );
}

export default Signup;
