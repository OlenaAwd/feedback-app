import { Circles } from "react-loader-spinner";

export const LoaderSpinner = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Circles
        height="80"
        width="80"
        color="#00BFFF"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        timeout={3000}
      />
    </div>
  );
};
