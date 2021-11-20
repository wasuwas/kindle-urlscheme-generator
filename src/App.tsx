import "./css/App.css";
import "./css/Header.css";
import "./css/Footer.css";
import "./components/Title";
import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results";
import { useState } from "react";
import Loading from "./components/Loading";
import Header from "./components/Header";
import Footer from "./components/Footer";


export type ResultsStateType = {
    country: string;
    cityName: string;
    temperature: string;
    conditionText: string;
    icon: string;
}

function App() {
    const [loading, setLoading] = useState<boolean>(false);
    const [city, setCity] = useState<string>("");
    const [results, setResults] = useState<ResultsStateType>({
        country: "",
        cityName: "",
        temperature: "",
        conditionText: "",
        icon: ""
    });
    const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const apiKey = "dummy";
        fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`)
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                setResults({
                    country: data.location.country,
                    cityName: data.location.name,
                    temperature: data.current.temp_c,
                    conditionText: data.current.condition.text,
                    icon: data.current.condition.icon
                })
                // Initialize input form
                setCity("");
                setLoading(false);
            })
            .catch(err => {
                alert("An Error occurred.");
                console.log(err);
            })
    };
    return (
        <>
            <Header />
            <div className="wrapper">
                <div className="container">
                    <Title />
                    <Form setCity={setCity} getWeather={getWeather} city={city} />
                    {loading ? <Loading /> : <Results results={results} />}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default App;
