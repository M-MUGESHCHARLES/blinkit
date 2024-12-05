import SyncLoader from "react-spinners/SyncLoader";

export const LoaderBounce = () => {

    const override = {
    };

  return (
    <>
      <SyncLoader
        color="#F8CB46"
        loading={true}
        cssOverride={override}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  );
};
