import React from 'react'
import Increase from './components/PTIT_CNTT4_IT104_SESSION18_Bai1/Increase'
import UserList from './components/PTIT_CNTT4_IT104_SESSION18_Bai2/UserList'
import LoginForm from './components/PTIT_CNTT4_IT104_SESSION18_Bai3/LoginForm'
import ColorPicker from './components/PTIT_CNTT4_IT104_SESSION18_Bai4/ColorPicker'
import InputText from './components/PTIT_CNTT4_IT104_SESSION18_Bai5/InputText'
import InputRadio from './components/PTIT_CNTT4_IT104_SESSION18_Bai6/InputRadio'
import TodoApp from './components/PTIT_CNTT4_IT104_SESSION18_Bai7+8/TodoApp'


export default function App() {
  return (
    <div>
      <Increase></Increase>
      <UserList></UserList>
      <LoginForm></LoginForm>
      <ColorPicker></ColorPicker>
      <InputText></InputText>
      <InputRadio></InputRadio>
      <TodoApp></TodoApp>
    </div>
  )
}
