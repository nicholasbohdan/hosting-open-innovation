import React from 'react';
import { Col } from 'reactstrap';

const Banner = () => {
    return(
        <div>

            {/* gambar > kiri */}
            <Col xl="4" lg="6" md="12">
                <div>
                    <img
                        src='https://static.wikia.nocookie.net/divided-destiny/images/8/86/Avatar_Aang.png/revision/latest?cb=20200131101151'
                        alt=""
                    />
                </div>
            </Col>

            {/* teks dn tombol > kanan */}
            <Col xl="4" lg="6" md="12">
                <div>
                    <h4>Kalbe Idea Platform</h4>
                    <p>
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div>
                        <button>Submit Idea</button>
                        <button>Learn More</button>
                    </div>
                </div>
            </Col>
        </div>
    )
}
export default Banner