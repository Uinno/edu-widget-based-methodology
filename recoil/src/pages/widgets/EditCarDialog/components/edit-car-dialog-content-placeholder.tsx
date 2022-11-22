import {DialogActions, DialogContent, Skeleton} from "@mui/material";
import Button from "@mui/material/Button";

export const EditCarDialogContentPlaceholder = () => (
    <>
        <DialogContent>
            <Skeleton variant="rectangular" width={400} height={60}
                      sx={{margin: '10px 0', minWidth: '400px'}}/>
            <Skeleton variant="rectangular" width={400} height={60}
                      sx={{margin: '10px 0', minWidth: '400px'}}/>
            <Skeleton variant="rectangular" width={400} height={60}
                      sx={{margin: '10px 0', minWidth: '400px'}}/>
        </DialogContent>
        <DialogActions>
            <Button color="error" disabled={true}>
                Delete
            </Button>
            <Button disabled={true} type="submit" form="edit-car-form">
                Save
            </Button>
        </DialogActions>
    </>
)
