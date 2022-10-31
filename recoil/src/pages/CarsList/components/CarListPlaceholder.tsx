import {Skeleton} from "@mui/material";

export const CarListPlaceholder = () => (
    <>
        {Array(10)
            .fill(10)
            .map((_, index) => (
                    <Skeleton
                        variant="rectangular"
                        height={65}
                        key={index}
                        sx={{marginBottom: "5px"}}/>
                )
            )}
    </>
)
