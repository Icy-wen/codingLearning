import { useEffect, useState } from "react";
import "./Weather.css";
import AMapLoader from "@amap/amap-jsapi-loader";
function Weather() {
  const [city, setCity] = useState("北京市");
  const [weather, setWeather] = useState({});
  const [futureWeather, setFutureWeather] = useState([]);
  const dataObj={
    "1":"星期一",
    "2":"星期二",
    "3":"星期三",
    "4":"星期四",
    "5":"星期五",
    "6":"星期六",
    "7":"星期日",
  }
  useEffect(() => {
    window._AMapSecurityConfig = {
      securityJsCode: "3850cee00e4e9debb7834c7e7affa624",
    };
    AMapLoader.load({
      key: "cef932dd38f4531e782153c3b0140e38", // 申请好的Web端开发者Key，首次调用 load 时必填
      version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: ["AMap.Scale"], //需要使用的的插件列表，如比例尺'AMap.Scale'，支持添加多个如：['...','...']
    }).then((AMap) => {
      //高德地图插件已生效
      // 获取城市定位
      getLocalCity(AMap);
    });
  }, []);
  const getLocalCity = (AMap) => {
    AMap.plugin("AMap.CitySearch", function () {
      var citySearch = new AMap.CitySearch();
      citySearch.getLocalCity(function (status, result) {
        if (status === "complete" && result.info === "OK") {
          // 查询成功，result即为当前所在城市信息
          console.log(result);
          setCity(result.city);
          //获取所在城市的天气
          getWeather(AMap, result.city);
          getFutureWeather(AMap, result.city);
        }
      });
    });
  };
  const getWeather = (AMap, myCity) => {
    //加载天气查询插件
    AMap.plugin("AMap.Weather", function () {
      //创建天气查询实例
      var weather = new AMap.Weather();
      //执行实时天气信息查询
      weather.getLive(myCity, function (err, data) {
        console.log(err, data);
        //err 正确时返回 null
        //data 返回实时天气数据，返回数据见下表
        setWeather(data);
      });
    });
  };
  const getFutureWeather = (AMap, myCity) => {
    //加载天气查询插件
    AMap.plugin("AMap.Weather", function () {
      //创建天气查询实例
      var weather = new AMap.Weather();
      //执行实时天气信息查询
      weather.getForecast(myCity, function (err, data) {
        console.log(err,data.forecasts);
        //err 正确时返回 null
        //data 返回天气预报数据，返回数据见下表
        setFutureWeather(data.forecasts);
        console.log()
      });
    });
  };
  return (
    <div className="weather">
      <div className="hd">
        <div className="city">
          <i className="iconfont icon-position-mark"></i>
          <div className="beijing">{city}</div>
        </div>
        <div className="changeCity">
          <button className="chang-btn">
            <div className="btn-content">
              <i className="iconfont icon-chengshi"></i>
              <div className="change">切换城市</div>
            </div>
          </button>
        </div>
      </div>
      <div className="bd">
        <div className="today">
          <div className="today-temperature">
            <div className="temp-info">{weather.temperature}℃</div>
            <div className="weather-info">{weather.weather}</div>
          </div>
          <div className="today-wind">
            <ul className="wind-list">
              <li>
                <i className="iconfont icon-shidu"></i>
                <p className="discrib">湿度</p>
                <p>{weather.humidity}</p>
              </li>
              <li>
                <i className="iconfont icon-fengxiang"></i>
                <p className="discrib">风向</p>
                <p>{weather.windDirection}</p>
              </li>
              <li>
                <i className="iconfont icon-fengli"></i>
                <p className="discrib">风力</p>
                <p>{weather.windPower}</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="future">
          <div className="future-title">三日天气预报</div>
          <ul className="future-list">
            {futureWeather.slice(1, 4).map((item, index) => (
              <li key={index} className="future-item">
                <div className="week">{dataObj[item.week]}</div>
                <div className="pic">
                  <img 
                    src={`./${item.dayWeather}.png`} 
                    alt={item.weather}
                  />
                </div>
                <div className="max-min">
                  {item.dayTemp}℃/{item.nightTemp}℃
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="tendency"></div>
      </div>
    </div>
  );
}
export default Weather;
