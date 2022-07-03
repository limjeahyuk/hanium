import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Mycontent() {
  const talent_list = [
    {
      seller: '박수정',
      buyer: '박수정2',
      content: '수업입니다.',
      deadline: '3일',
      date: '22.05.01',
      point: '100p',
      hide: 'o',
    },
    {
      seller: '박수정',
      buyer: '박수정2',
      content: '수업입니다.',
      deadline: '3일',
      date: '22.05.01',
      point: '100p',
      hide: 'o',
    },
    {
      seller: '박수정',
      buyer: '박수정2',
      content: '수업입니다.',
      deadline: '3일',
      date: '22.05.01',
      point: '100p',
      hide: 'o',
    },
    {
      seller: '박수정',
      buyer: '박수정2',
      content: '수업입니다.',
      deadline: '3일',
      date: '22.05.01',
      point: '100p',
      hide: 'o',
    },
    {
      seller: '박수정',
      buyer: '박수정2',
      content: '수업입니다.',
      deadline: '3일',
      date: '22.05.01',
      point: '100p',
      hide: 'o',
    },
    {
      seller: '박수정',
      buyer: '박수정2',
      content: '수업입니다.',
      deadline: '3일',
      date: '22.05.01',
      point: '100p',
      hide: 'o',
    },
    {
      seller: '박수정',
      buyer: '박수정2',
      content: '수업입니다.',
      deadline: '3일',
      date: '22.05.01',
      point: '100p',
      hide: 'o',
    },
    {
      seller: '박수정',
      buyer: '박수정2',
      content: '수업입니다.',
      deadline: '3일',
      date: '22.05.01',
      point: '100p',
      hide: 'o',
    },
  ];

  const [startDate, setStartDate] = useState(new Date('2021/02/02'));
  const [endDate, setEndDate] = useState(new Date('2022/02/02'));

  return (
    <div>
      <div className='title'>
        <h3>재능 내역</h3>
      </div>
      <div>
        <div className='content_box'>
          <div className='talent_input_box'>
            {/* <input className='date' placeholder='2022/05/01' />
            <span>~</span>
            <input className='date' placeholder='2022/05/09' /> */}
            <div className='date'>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
              />
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
              />
            </div>
            <input className='search_input' />
            <SearchIcon className='search' />
          </div>
          <div className='talent_list'>
            <table>
              <thead>
                <tr>
                  <th>판매자</th>
                  <th>구매자</th>
                  <th>내용</th>
                  <th>기한</th>
                  <th>포인트</th>
                  <th>날짜</th>
                  <th>숨김</th>
                </tr>
              </thead>
              <tbody>
                {talent_list.map((value) => (
                  <tr>
                    <td>{value.seller}</td>
                    <td>{value.buyer}</td>
                    <td>{value.content}</td>
                    <td>{value.deadline}</td>
                    <td>{value.point}</td>
                    <td>{value.date}</td>
                    <td>{value.hide}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mycontent;
