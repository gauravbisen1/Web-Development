import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({ info }) {
    const INIT_URL = "https://media.istockphoto.com/id/1322531760/photo/city-and-clouds.webp?a=1&b=1&s=612x612&w=0&k=20&c=SaYS0QfEMUEFo24m3QoO80-u9iwuvxFXoZHcfF-JhWA=";
    const HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1674407866481-a39b2239f771?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1498847559558-1e4b1a7f7a2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFJhaW58ZW58MHx8MHx8fDA%3D";

    return (
        <div className="InfoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}{
                                info.humidity > 80 ? <ThunderstormIcon></ThunderstormIcon> : info.temp > 15 ? <SunnyIcon></SunnyIcon> : <AcUnitIcon></AcUnitIcon>
                            }
                        </Typography>
                        <Typography variant="body2" color='text.secondary' component={"span"}>
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>Humidity = {info.humidity}</p>
                            <p>Max Temp = {info.tempMax}&deg;C</p>
                            <p>Min Temp = {info.tempMin}&deg;C</p>
                            <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
} 