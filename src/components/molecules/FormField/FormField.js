import React from 'react';
import styled from 'styled-components';
import { Label } from 'components/atoms/Label/Label';
import { Input } from 'components/atoms/Input/Input';

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;
const FormField = ({ value, label, name, id, type = 'text' }) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input name={name} id={id} type={type} value={value} />
    </Wrapper>
  );
};

export default FormField;
