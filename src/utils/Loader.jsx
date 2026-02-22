import CircularProgress from "@mui/material/CircularProgress";

const Loader = ({ size = 80, thickness = 3 }) => {
  return (
    <div className="flex items-center justify-center">
      <CircularProgress
        size={size}
        thickness={thickness}
        sx={{
          color: "#4A69E2",
        }}
      />
    </div>
  );
};

export default Loader;
