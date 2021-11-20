type FormPropsType = {
    setCity: React.Dispatch<React.SetStateAction<string>>
    getWeather: (e: any) => void,
    city: string
}

const Form = ({ city, setCity, getWeather }: FormPropsType) => {
    return (
        <form onSubmit={getWeather}>
            <input type="text" name="city" placeholder="City name"
                onChange={e => setCity(e.target.value)}
                value={city} />
            <br />
            <button type="submit">
                Get Weather info
            </button>
        </form>
    );
};

export default Form;