import { Box, Button } from "@mui/material";

export const BannerComponent = ({Data}) => {
  return (
    <div className="">
      <Box
        id="Banner-Component"
        sx={{
          backgroundColor: `${Data.backgroundColor}`,
          width: "100%",
          height: "auto",
        }}
        className="rounded-4"
      >
        <div className=" px-4 py-4">
          <h3 className="m-0 py-1 fw-bold Banner-Heading">{Data.head}</h3>
          <div className="row m-0 p-0">
            <div className="col-7 m-0 p-0 text-start ">
              <p className="m-0 py-1 fw-medium">{Data.description}</p>
              <Button
                sx={{
                  color: `${Data.buttonTextColor}`,
                  backgroundColor: `${Data.buttonColor}`,
                  fontSize: "10px",
                }}
                className="my-2 fw-semibold"
              >
                {Data.button}
              </Button>
            </div>
            <div className="col-5 m-0 p-0 text-end align-content-center">
              <img
                src={Data.img}
                className="img-fluid"
                alt="banner"
                height="auto"
                width="100%"
              />
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
};
