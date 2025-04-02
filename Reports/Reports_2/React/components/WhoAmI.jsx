import instagramIMG from '../assets/instagram.png'

const WhoAmI = () => (
    <section>
      <h2>Who - am - I</h2>
      <div>
        <p className="subtext">
          ● 웹 또는 앱 개발자가 되기 위해 공부하고 있습니다.<br />
          백엔드 및 서버 유지 관리에 관심이 있습니다.<br /><br />
        </p>
        <p className="subtext">
          ●부산에서 대학밴드 공연 기획을 하고 있습니다.<br /><br />
          <a href="https://www.instagram.com/play.union/">
            <img className="sns-img" src={instagramIMG} alt="Instagram" />
          </a>
          &emsp;<a href="https://www.instagram.com/play.union/">부산대학연합공연 Union 2기 ,3기, 4기, 5기, 6기, 7기 총기획</a><br /><br />
          <a href="https://www.instagram.com/myoy_official/">
            <img className="sns-img" src={instagramIMG} alt="Instagram" />
          </a>
          &emsp;<a href="https://www.instagram.com/myoy_official/">부산대학연합공연 Myoy 2기, 3기 영상심사위원<br /><br /></a><br /><br />
          ● 동물보호관리협회에서 봉사시간 관리를 하고 있습니다.
        </p>
      </div>
    </section>
  );

  export default WhoAmI;