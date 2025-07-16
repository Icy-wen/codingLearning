import { Allotment } from 'allotment'
import "allotment/dist/style.css"
import Header from './components/Header'
import Setting from './components/Setting'
import Materail from './components/Materail'
import Edit from './components/Edit'

export default function LocodeEditor() {
  return (
    <div className='h-[100vh] flex flex-col'>
        <div className='h-[60px]  flex items-center border-b-[1px] border-[#000]'>
            <Header></Header>
        </div>
        <Allotment>
            <Allotment.Pane preferredSize={240} maxSize={400} minSize={200}>
                <Materail></Materail>
            </Allotment.Pane>
            <Allotment.Pane>
                <Edit></Edit>
            </Allotment.Pane>
            <Allotment.Pane preferredSize={300} maxSize={500} minSize={200}>
                <Setting></Setting>
            </Allotment.Pane>
        </Allotment>
    </div>
  )
}
