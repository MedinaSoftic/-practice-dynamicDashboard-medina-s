import { useState } from 'react'
import './App.css'
import Dates from './DynamicDashboard/Date'
import GreetUser from "./DynamicDashboard/GreetUser"
import MemberStat from './DynamicDashboard/MemberStats'
import TaskLists from './DynamicDashboard/TaskList'


function App() {

  return (
    <>
      <div>
        <Dates></Dates>
        <GreetUser name="Medina" ></GreetUser>
        <MemberStat memberStatus={true}></MemberStat>
        <TaskLists></TaskLists>
      </div>
    </>
  )
}

export default App
