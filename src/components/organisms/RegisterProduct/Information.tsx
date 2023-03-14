const Information = ({ formValues, setFormValues }: any) => {
  const handleChange = (e: any) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <input
        type="text"
        name="firstName"
        placeholder="teste11111"
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="teste1111"
        onChange={handleChange}
      />
    </div>
  );
};

export default Information;
