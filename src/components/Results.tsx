import {ResultsStateType } from "../App";
type ResultsPropsType = {
    results: ResultsStateType;
}

const Results = ({ results }: ResultsPropsType) => {
    const { cityName, country, temperature, conditionText, icon } = results;
    return (
        <>
            <h1>Weather Info</h1>
            <div>
                {cityName && <div className="results-city">{cityName}</div>}
                {country && <div className="results-country">{country}</div>}
                {temperature && <div>{temperature}<span>℃</span></div>}
                {conditionText &&
                    <div>
                        <img src={icon} alt="icon" />
                        <span>{conditionText}</span>
                    </div>
                }

            </div>
        </>
    );
}
export default Results;