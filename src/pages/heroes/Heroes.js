import React, {useEffect, useState} from 'react';
import axios from 'axios';
import api from '../../utils/api';

export const Heroes = (props) => {
    const [heroes, setHeroes] = useState([]);

    useEffect(() => {
        getHeroes();
    }, []); // <-- 두번째 파라미터에 빈 배열을 넣어주면, componentDidMount와 같은 역할을 한다.

    // async를 키워드를 사용하면 비동기로 동작한다.
    // async 안에는 반드시 await가 있어야 한다.
    // async 뒤에는 반드시 promise가 와야 한다.
    // await는 promise가 리턴될때까지 기다렸다가 결과를 받아서 리턴한다.
    const getHeroes = async () => {
        // axios 사용.
        // const host = 'ec2-15-164-134-124.ap-northeast-2.compute.amazonaws.com:8000';
        const protocol = '/api/user/heroes';
        // const response = await axios.get('http://${host}${protocol}');
        const response = await api.get('/api/user/heroes');
        console.log(response);
        setHeroes(response.data.data);
    };

    return (
        <div className="row">
            {heroes.map(hero => (
                <div className="col-6 col-sm-4 col-md-3 p-1 p-sm-2 p-md-3" key={hero.id}>
                    <div className="card">
                        <img src={hero.photo ? hero.photo : process.env.PUBLIC_URL + '/images/baseline-face-24px.svg'}
                             style={{width: '100%'}} alt={hero.name}></img>
                        <div className="card-body">
                            <h5 className="card-title">{hero.name}</h5>
                            <p className="card-text">email: {hero.email}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}