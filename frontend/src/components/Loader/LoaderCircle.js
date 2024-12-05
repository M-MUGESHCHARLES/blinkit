import PulseLoader from "react-spinners/PulseLoader";

export const LoaderCircle = () => {
  return (
    <>
      <PulseLoader
        color="#F8CB46"
        loading={true}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  );
};
