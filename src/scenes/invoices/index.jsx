import {DataGrid} from "@mui/x-data-grid";
import {Box, Typography, useTheme} from "@mui/material";
import Header from "../../components/Header.jsx";
import {tokens} from "../../theme.js";
import {mockDataInvoices} from "../../data/mokeData.js";
function Invoices() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        { field: "id", headerName: "ID", flex: 0.5 },
        { field: "registrarId", headerName: "Registrar ID" },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1,
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
        },
        {
            field: "cost",
            headerName: "Cost",
            flex: 1,
            renderCell: (params) => (
                <Typography>
                    {params.row.cost}
                </Typography>
            )
        },
        {
            field: "date",
            headerName: "Date",
            flex: 1,
        },
    ];

    return (
        <Box sx={{m: '20px'}}>
            <Header title="Invoices" subTitle="Lists of Invoices Balances."/>
            <Box
                sx={{
                    m: '40px 0 0 0',
                    height: '75vh',
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[200]} !important`,
                    },
                }}
            >
                <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
            </Box>
        </Box>
    )
}

export default Invoices;
