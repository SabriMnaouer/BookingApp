import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/1200px-New_york_times_square-terabass.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>NewYork</h1>
          <h2>875 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://media-assets.vanityfair.it/photos/644c24f7cd60f0ca3be60db8/3:2/w_6000,h_4000,c_limit/AdobeStock_251121174.jpeg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Tokyo</h1>
          <h2>731 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/42/Samuel_Beckett_Bridge_At_Sunset_Dublin_Ireland_%2897037639%29_%28cropped%29.jpeg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Museumsinsel_Berlin_Juli_2021_1_%28cropped%29.jpg/1200px-Museumsinsel_Berlin_Juli_2021_1_%28cropped%29.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Berlin</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Lac_nuit_02.jpg/800px-Lac_nuit_02.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Tunis</h1>
          <h2>532 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
