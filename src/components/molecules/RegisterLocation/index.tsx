const RegisterLocation = ({ formValues, setFormValues }: any) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <input
        type="text"
        name="firstName"
        placeholder="teste3"
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="teste3"
        onChange={handleChange}
      />
    </div>
  );
};

export default RegisterLocation;
