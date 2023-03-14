export const RegisterPhotos = ({ formValues, setFormValues }: any) => {
    const handleChange = (e: any) => {
      setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };
  
    return (
      <div>
        <input
          type="text"
          name="firstName"
          placeholder="teste2"
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="teste2"
          onChange={handleChange}
        />
      </div>
    );
  };
  

  