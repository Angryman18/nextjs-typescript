import React, { FC } from "react";

import { formData } from "./interface";

interface Props {
  handleSubmit: (e: React.SyntheticEvent ,formData: formData) => void;
}

const initialState: formData = {
  fullname: "",
  email: "",
  password: "",
  confPassword: "",
  termsAndConditions: false,
};

const Forms: FC<Props> = ({ handleSubmit }) => {
  const [formData, setFormData] = React.useState<formData>({ ...initialState });

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const value: string = (e.target as HTMLInputElement).value;
    const name: string = (e.target as HTMLInputElement).name;
    setFormData({...formData, [name]: value });
  };

  const handleCheckBoxChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const name: string = (e.target as HTMLInputElement).name;
    setFormData({...formData, [name]: (e.target as HTMLInputElement).checked });
  };

  return (
    <div className='text-black'>
      <form onSubmit={(e) => handleSubmit(e, formData)}>
        <input
          required
          minLength={3}
          maxLength={30}
          className='input-field'
          placeholder='Full Name'
          type='text'
          id='fullname'
          name='fullname'
          value={formData?.fullname}
          onChange={handleChange}
        />
        <input
          required
          minLength={3}
          maxLength={30}
          className='input-field'
          placeholder='Email ID'
          type='email'
          id='email'
          name='email'
          // pattern='/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/'
          value={formData?.email}
          onChange={handleChange}
        />
        <input
          required
          minLength={3}
          maxLength={30}
          className='input-field'
          placeholder='Password'
          type='password'
          id='password'
          name='password'
          value={formData?.password}
          onChange={handleChange}
        />
        <input
          required
          minLength={3}
          maxLength={40}
          className='input-field'
          placeholder='Confirm Password'
          type='password'
          id='password'
          name='confPassword'
          value={formData?.confPassword}
          onChange={handleChange}
        />
        <div className='flex gap-x-2 items-start'>
          <input
            value={formData.termsAndConditions ? "checked" : "unchecked"}
            onChange={handleCheckBoxChange}
            name='termsAndConditions'
            className='checkbox-field my-1'
            type='checkbox'
            id='termsAndConditions'
          />
          <span className='text-sm my-0 py-0'>Agree with the Terms & Regulation.</span>
        </div>
        <button className='submit-button'>Join the Hackthon</button>
      </form>
    </div>
  );
};
export default Forms;
