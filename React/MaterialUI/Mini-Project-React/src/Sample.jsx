import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

export default function Sample()
{
    return (
        <>
      <div>
        <h1>Material UI</h1>
        <br /> <br />
        <Stack spacing={2} direction="row">
          <Button variant="text" color="error" size="large">Text</Button>
          <Button variant="contained" color="success" size="medium" endIcon={<SendIcon/>}>Send</Button>
          <Button variant="outlined" color="secondary" size="small" startIcon={<DeleteIcon />}>Delete</Button>
        </Stack>
      </div>
    </>
    )
}