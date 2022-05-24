import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home4 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // autoplaySpeed: 2000
  };

  const wordsData = [
    {
      id: 1,
      profileImg: "/Images/st1.jpg",
      testimony:
        " The Ginger & Moringa shea is really good and I love the scent. It has helped clear my dark spots and also helped with my acne. This product is really true to what it does , love it ❤️. Am glad I joined the nokware family #nokwareskin",
      name: "Failt",
    },
    {
      id: 2,
      profileImg: "/Images/st2.jpeg",
      testimony:
        "My skin literally feels so smooth each time I use the neem oil soap. My acne has reduced, and no new ones are popping up. I am really happy about this product. I can boldly recommend this to my friends...thanks team nokware",
      name: "Banabas",
    },
    {
      id: 3,
      profileImg: "/Images/st3.jpeg",
      testimony:
        " I'm just happy that this is actually fading my dark spots and helping with my hyperpigmentation. I had to get 3 sets because I use it for my hair too, for softness and for that extra body glow.Thanks Nokware",
      name: "Nike",
    },
    {
      id: 4,
      profileImg: "/Images/st4.jpeg",
      testimony:
        "I was introduced to this brand from a YouTuber. Since I started using the activated charcoal black soap, my skin is brighter & Smooth. OMG the results gave me life that I finally found something good for my skin!",
      name: "Jack Jamison",
    },
    {
      id: 5,
      profileImg: "/Images/st5.jpeg",
      testimony:
        "  Nokware's soap is absolutely amazing, it leaves my skin feeling smooth and moist. It is a lot and all you need is a small amount each time so this will last you a long time. The packaging is also very detailed and beautiful!",
      name: "Mariam Abu",
    },
  ];
  return (
    <Container>
      <h1>Words On The Streets</h1>
      <Wrapper {...settings}>
        {wordsData?.map((props) => {
          return (
            <div key={props.id}>
              <Hold>
                <img src={props.profileImg} alt="imag" />
                <h4> {props.testimony} </h4>
                <strong> {props.name} </strong>
              </Hold>
            </div>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default Home4;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 100px;
  font-family: poppins;
  h1 {
    font-weight: 800;
    font-size: 30px;
    @media (max-width: 768px) {
      font-size: 22px;
    }
  }
`;

const Wrapper = styled(Slider)`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 40px 0;

  img {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background-color: darkcyan;
    margin-bottom: 30px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 85%;
  }
  h4 {
    font-size: 18px;
    color: #949494;
    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
`;

const Hold = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
