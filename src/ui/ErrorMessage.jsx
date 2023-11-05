const ErrorMessage = ({ children }) => {
  return (
    <h2 className="my-4 text-center text-3xl font-semibold text-red-600">
      {children}
    </h2>
  );
};

export default ErrorMessage;
