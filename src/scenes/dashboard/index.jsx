import Header from "../../components/Header.jsx";
import {Box} from "@mui/material";

function Dashboard() {
    return (
        <Box sx={{m: '20px'}}>
            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Header title="DASHBOARD" subTitle="Welcome to your dashboard."/>
            </Box>
        </Box>
    )
}

export default Dashboard;
