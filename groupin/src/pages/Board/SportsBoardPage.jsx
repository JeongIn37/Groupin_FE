import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Division from '../components/Division';
import '../CSS/BoardPage.css';
import BoardList from '../components/Board/BoardList';

const SportsBoardPage = () => {
    return (
        <>
        <Header />
        <div className='container'>
        <table>
            <thead>
                <tr>
                    <th><Division text="소분류" list1="야구" list2="축구" list3="배구"/></th>
                    <th>ㅤ</th>
                    <th><Division text="지역별" list1="서울/경기" list2="부산/경남" list3="대구/경북"/></th>
                    <th>ㅤ</th>
                    <th><Division text="최신순" list1="오래된순" list2="인기순" list3="댓글순"/></th>
                </tr>
            </thead>
        </table>
        </div>
        <BoardList title="스포츠"/>
        <br></br>
        <br></br>
        <br></br>
        <Footer />
        </>
    );
};

export default SportsBoardPage;